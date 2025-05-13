const express = require('express');
const router = express.Router();
const Database = require('../repository/Database');
const UserService = require('../services/UserService');
const UserController = require('../controllers/UserController');

const MONGODB_URI = "mongodb://localhost:27017/"
const DB_NAME = "Centivo"

// Initialize database & services
const dbInstance = new Database(MONGODB_URI, DB_NAME);

// Middleware to inject dependencies
router.use(async (req, _res, next) => {
  const db = await dbInstance.connect();
  req.userService = new UserService(db);
  next();
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const controller = new UserController(req.userService);
  return controller.getUser(req, res);
});

module.exports = router;