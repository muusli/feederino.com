

import * as functions from "firebase-functions";
// import * as admin from 'firebase-admin';
import { MeiliSearch } from 'meilisearch'
import {Twilio} from 'twilio';
import * as admin from 'firebase-admin';
import axios from "axios";
admin.initializeApp();
// const MeiliSearch = require('meilisearch')
// const { Client } = require('@elastic/elasticsearch');
const twilioCredentials =functions.config().twilio;
const credentials = functions.config().spoonacular;
// const ELASTIC_ID = functions.config().elastic.id;
// const ELASTIC_USERNAME = functions.config().elastic.username;
// const ELASTIC_PASSWORD = functions.config().elastic.password;



const client = new MeiliSearch({
    // host: 'http://164.90.175.92/',
    host: 'http://46.101.167.4/',
    apiKey: '793c93af9e13c8380ed364b042268dba4466fae33f79d636fbdb2d2275c450dd',
});
// const client = new Client({
// 	cloud : {
// 		id       : ELASTIC_ID,
// 		username : ELASTIC_USERNAME,
// 		password : ELASTIC_PASSWORD,
   
// 	}
// });

const twilioClient = new Twilio(twilioCredentials.sid, twilioCredentials.token);

const db = admin.firestore();

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

// export const onRecipeCreated = functions.firestore
// 	.document('users/{userId}/recipes/{recipeId}')
// 	.onCreate(async (snap, context) => {
// 		// Get the note document
// 		const recipe = snap.data();

// 		// Use the 'nodeId' path segment as the identifier for Elastic
// 		const id = context.params.recipeId;

// 		// Write to the Elastic index
// 		client.index({
// 			index : 'recipes',
// 			id,
// 			body  : recipe
// 		});
// 	});
//   export const onRecipeUpdated = functions.firestore
// 	.document('users/{userId}/recipes/{recipeId}')
// 	.onUpdate(async (snap, context) => {
// 		// Get the note document
// 		const recipe = snap.after.data()

// 		// Use the 'nodeId' path segment as the identifier for Elastic
// 		const id = context.params.recipeId;

// 		// Write to the Elastic index
// 		client.index({
// 			index : 'recipes',
// 			id,
// 			body  : recipe
// 		});
// 	});
	
// export const searchRecipes = functions.https.onCall(async (data, context) => {
// 	const query = data.query;

// 	// Search for any notes where the text field contains the query text.
// 	// For more search examples see:
// 	// https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/search_examples.html
// 	const searchRes = await client.search({
// 		index : 'recipes',
// 		body  : {
// 			query : {
// 				query_string : {
// 					query  : `*${query}*`,
// 					fields : [ 'title', 'description'],
// 					// filter: {username: 'muusli2'}
					
// 				},
// 			// 	filters:{
				
// 			// 		// published: ['true']}
// 			// 	// ,
// 			// 	// bool: {filter:[{term:{published:'true'}}]}
// 			},
			
			
// 		}
// 	});

	// Each entry will have the following properties:
	//   _score: a score for how well the item matches the search
	//   _source: the original item data
// 	const hits = searchRes.body.hits.hits;

// 	// const recipes = hits.map( '_source');
// 	return {
// 		recipes : hits
// 	};
// });

export const meilisearchIndex = functions.firestore
  .document('users/{userId}/recipes/{recipeId}')
  .onCreate(async (snapshot, context) => {
   	// Get the note document
		const recipe = snapshot.data();
		// Use the 'nodeId' path segment as the identifier for meili
		const id = context.params.recipeId;
   await client.index('recipes').addDocuments([
      { id, ...recipe}
    ]).then(res=> console.log(res))
  });

  export const meilisearchQuery = functions.https.onCall(async (data, context:any) => {
	const search = await client.index('recipes').search(data.query, {limit:5,filter:[["published = true", `uid = ${context.auth.uid}`]]});
  	return {
    recipes: search};
  });
export const sendText = functions.https.onCall(async (data, context:any) => {
	const StringMessage = data.message.map((e:any) => ` \n${e.quantity} ${e.unit} ${e.name}`).toString();
  const userId = context.auth.uid;
  const userRef = db.doc(`users/${userId}`);
  const userSnap:any = await userRef.get();
  const number = userSnap.data().phoneNumber;
  const textMessage = {
    body: `Hey hier ist deine Einkaufsliste ${StringMessage}`,
    to: `whatsapp:${number}`, // SMS to this number
    from: 'whatsapp:+14155238886' // From a valid Twilio number
  };

  twilioClient.messages.create(textMessage)
    .then((message: any) => {
      console.log('SMS Sent: ' + message.status);
      console.log('SMS Sent');
      return true;
    })
    .catch((err: any) => {
      console.log(err)
      return false;
    }); 

    return true;}
  );
  export const onRecipeUpdated = functions.firestore
	.document('users/{userId}/recipes/{recipeId}')
	.onUpdate(async (snap, context) => {
		// Get the note document
		const recipe = snap.after.data()

		// Use the 'nodeId' path segment as the identifier for Meili
		const id = context.params.recipeId;

		// Write to the Meili index
		client.index('recipes').updateDocuments([{
        id,
        ...recipe
   }])

	});
	