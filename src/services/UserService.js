const { ObjectId } = require('mongodb');
const User = require('../models/User');

class UserService {
  constructor(db) {
    this.collection = db.collection('users');
  }

  async fetchById(id) {
    if (!ObjectId.isValid(id)) {
      const err = new Error('Invalid ObjectId');
      err.statusCode = 400;
      throw err;
    }

    // Fetch document by ID only
    const doc = await this.collection.findOne({ _id: new ObjectId(id) });

    // 404: user not found
    if (!doc) {
      const err = new Error('User not found');
      err.statusCode = 404;
      throw err;
    }

    // 403: user found but under age
    if (doc.age <= 21) {
      const err = new Error('User is under age(21)');
      err.statusCode = 403;
      throw err;
    }

    return new User(doc);
  }
}

module.exports = UserService;