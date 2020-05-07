// const mongoose = require("./database");
// const schema = {
//   name: { type: mongoose.SchemaTypes.String, required: true },
//   email: { type: mongoose.SchemaTypes.String, required: true },
//   password: {
//     type: mongoose.SchemaTypes.String,
//     required: true,
//     select: false,
//   },
// };
// const collectionName = "user"; // Name of the collection of documents
// const userSchema = mongoose.Schema(schema);
// const User = mongoose.model(collectionName, userSchema);

// // Create user
// User.create({
//   name: name,
//   email: email,
//   password: password,
// });
// // Find user by email
// User.findOne({
//   email: email,
// });
// // Find user by email with the password field included
// User.findOne({
//   email: email,
// }).select("+password");

// module.exports = User;
