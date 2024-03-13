import axios from 'axios';

export const sendSMS = async (messages: string, receiver: string) => {
  try {
    const res = await axios.post(
      'http://158.220.114.227:7070/service/sendsms',
      {
        messages,
        sender: 'RELIA',
        receiver,
      },
      {
        headers: {
          application: 'pokerApps',
          'Content-Type': 'application/json',
        },
      },
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
