const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

//TODO: Only allow authenticated users to create games
exports.createGame = functions.https.onCall((data, context) => {
	let newGameRef = admin.database().ref('/games').push();
	console.log('Creating a new game with key', newGameRef.key);
	newGameRef.set({
		author: 'Aaron Mercier',
		message: data.message
	})
});