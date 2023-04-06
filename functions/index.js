const functions = require("firebase-functions");

console.log(functions.config().test.key);

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
 });
