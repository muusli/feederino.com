

import * as functions from "firebase-functions";
// import * as admin from 'firebase-admin';

// import * as Twilio from 'twilio';
// import * as admin from 'firebase-admin';
import axios from "axios";

const credentials = functions.config().spoonacular;

// const client = new Twilio(credentials.sid, credentials.token);

// const db = admin.firestore();

export const autocompleteIngredient = functions.https
.onCall(async (data, context) => {
  try {
    const ingredients = await axios.get("https://api.spoonacular.com/food/ingredients/autocomplete", {
      params: {
        apiKey: credentials.apikey,
        query: data.string,
        number: 5,
        metaInformation: true
      }});
    return (ingredients.data);
  } catch (error) {
    return 'Something went wrong'
  }
});
export const searchIngredient = functions.https
.onCall(async (data, context) => {
  try {
    const ingredients = await axios.get("https://api.spoonacular.com/food/ingredients/search", {
      params: {
        apiKey: credentials.apikey,
        query: data.string,
        number: 1,
        metaInformation: true

      }});
    return (ingredients.data);
  } catch (error) {
    return 'Something went wrong'
  }
});

// export const sendText = functions.https.onCall(async (data, context) => {
//   const userId = context.auth.uid;

//   const userRef = db.doc(`users/${userId}`);

//   const userSnap = await userRef.get();

//   const number = userSnap.data().phoneNumber;

//   return client.messages.create({
//     body: data.message,
//     to: number, // User's number
//     from: '+12248084375' // Your Twilio number
//   });
// });


// export const sendText = functions.https.onCall(async (data, context) => {
//   const userId = context.auth.uid;

//   const userRef = db.doc(`users/${userId}`);

//   const userSnap = await userRef.get();

//   const number = userSnap.data().phoneNumber;

//   const textMessage = {
//     body: 'hello',
//     to: number, // SMS to this number
//     from: '+12248084375' // From a valid Twilio number
//   };

//   client.messages.create(textMessage)
//     .then((message: any) => {
//       // console.log('SMS Sent: ' + smsMessage + ' to ' + phoneNumber);
//       console.log('SMS Sent');
//       return true;
//     })
//     .catch((err: any) => {
//       console.log(err)
//       return false;
//     }); 

//     return true;
//   });
