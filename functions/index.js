const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

//TODO: Only allow authenticated users to create games
exports.createGame = functions.https.onCall((data, context) => {
    let newGameRef = admin.database().ref('/games').push();
    newGameRef.set({
        title: data.title,
        owner: data.owner,
        message: data.message,
        type: data.type,
        dateCreated: data.dateCreated
    })
});

