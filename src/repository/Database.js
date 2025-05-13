const { MongoClient } = require('mongodb');

class Database {
  constructor(uri, dbName) {
    this.uri = uri;
    this.dbName = dbName;
    this.client = new MongoClient(uri, { useUnifiedTopology: true });
    this.db = null;
  }

  async connect() {
    if (!this.db) {
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      console.log(`Connected to database: ${this.dbName}`);
    }
    return this.db;
  }
}

module.exports = Database;
