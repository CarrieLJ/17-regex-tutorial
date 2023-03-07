const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    //need to add in trimmed
    username: { type: String, required: true, unique: true },
    //need to add in unique and matching validation
    email: { type: String, required: true },
    //reference thought model: thoughts: { array: },
    //reference User model: friends; {}
});

// const U1 = db.model('U1', uniqueUsernameSchema);
// const U2 = db.model('U2', uniqueUsernameSchema);
// const dup = [{ username: 'Val' }, { username: 'Val' }];
// // Race condition! This may save successfully, depending on whether
// // MongoDB built the index before writing the 2 docs.
// U1.create(dup).
//   then(() => {
//   }).
//   catch(err => {
// });
// // You need to wait for Mongoose to finish building the `unique`
// // index before writing. You only need to build indexes once for
// // a given collection, so you normally don't need to do this
// // in production. But, if you drop the database between tests,
// // you will need to use `init()` to wait for the index build to finish.
// U2.init().
//   then(() => U2.create(dup)).
//   catch(error => {
//     // `U2.create()` will error, but will *not* be a mongoose validation error, it will be
//     // a duplicate key error.
//     // See: https://masteringjs.io/tutorials/mongoose/e11000-duplicate-key
//     assert.ok(error);
//     assert.ok(!error.errors);
//     assert.ok(error.message.indexOf('duplicate key error') !== -1);
//   });

//schema settings: create virtual called friendCount that retreives the length of the user's friends array field on query

module.exports = User;