import {sendMail as sendMailFunction} from "../middleware/nodemailer";
import { utilisateurSA } from "../applicatif/Utilisateur";

export const sendDeletionNotice = async () => {
    console.error('runned cron job for deletion notice');
    try {
        // @ts-ignore
        const usersForFirstNotification = await utilisateurSA.findBetweenDates('firstNotificationDate','secondNotificationDate',{
            deletionState:  { $ne: 'FIRST_NOTIF' }
        });

        console.log(`Found ${usersForFirstNotification.length} users to send first notification`);

        await Promise.all(usersForFirstNotification.map(async user => {
            await utilisateurSA.updateFields(user.id, { deletionState: 'FIRST_NOTIF' });
            await sendDeleteReminderNotification(user, 'first-process', 'First warning: Your account will be deleted soon.');
        }));


        // @ts-ignore
        const usersForSecondNotification = await utilisateurSA.findBetweenDates('secondNotificationDate','deletionDate',{
            deletionState:  { $eq: 'FIRST_NOTIF' }
        });

        console.log(`Found ${usersForSecondNotification.length} users to send second notification`);

        await Promise.all(usersForSecondNotification.map(async user => {
            await utilisateurSA.updateFields(user.id, { deletionState: 'SECOND_NOTIF' });

            await sendDeleteReminderNotification(user, 'second-process', 'Second warning: Your account will be deleted imminently.');
        }));

        const allUserToDelete = await utilisateurSA.findBetweenDates('deletionDate',undefined, {
            deletionState: {
                $eq: 'SECOND_NOTIF'
            }
        });

        console.log(`Found ${allUserToDelete.length} users to delete`);

        await Promise.all(allUserToDelete.map(async user => {
            await utilisateurSA.delete(user.id);
            await sendDeleteReminderNotification(user, 'final-process','Your account has been deleted.');
        }));
    } catch (error) {
        console.error('Error sending deletion notices:', error);
    }
};

const sendDeleteReminderNotification = async (user,type, message) => {
    console.log(`Sending ${message} notification to user ${user.nom}`);
    if(type !='final-process') {
        await sendMailFunction({
            to: user.email,
            subject: "[PokerApply] - Suppression de compte",
            body: `Bonjour ${user.username || user.nom},
         <br /> <br />
         <span>
         <p>${message}</p>
         <br />
         <br />
         Si vous n'êtes pas à l'origine de cette action, veuillez ignorer ce mail.
         <br /> <br /> <br />
         Cordialement,
         <br /> <br />
         L'équipe Pockerapply.
         `,
        });

    }
}
