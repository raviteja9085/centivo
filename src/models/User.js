class User {
  constructor({ _id, name, email, age }) {
    this.id = _id;
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

module.exports = User;