const admin = [];

module.exports = {
  createAdmin: (req, res) => {
    try {
      const { username, password } = req.body;
      admin.push({ username, password });
      return res.send({
        response: admin,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAdmin: (req, res) => {
    try {
      return res.send({
        response: "Get All Admin data",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteAdmin: (req, res) => {
    try {
      const { username, password } = req.body;
      admin.pop({ username, password });
      return res.send({
        response: "Delete Admin data",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
