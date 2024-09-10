import * as admin from 'firebase-admin';

const key = require('../../../firebase-admin-sdk.json');

export const initFirebaseSdk = () =>
  admin.initializeApp({
    credential: admin.credential.cert(key),
  });

export const sendNotification = async ({ tokens, title, body }) => {
  const messaging = admin.messaging();

  try {
    const data = await Promise.all(tokens.map(async (token) =>  await messaging.send({
      notification: { title, body },
      token
    })));

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
