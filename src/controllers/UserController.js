class UserController {
  constructor(userService) {
    this.userService = userService;
    this.getUser = this.getUser.bind(this);
  }

  async getUser(req, res) {
    try {
      const user = await this.userService.fetchById(req.params.id);
      res.json(user);
    } catch (err) {
      const status = err.statusCode || 500;
      res.status(status).json({ error: err.message });
    }
  }
}

module.exports = UserController;
