const teacher = [];

module.exports = {
  createTeahcer: (req, res) => {
    try {
      const { username, password } = req.body;
      teacher.push({ username, password });
      return res.send({
        response: teacher,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getTeacher: (req, res) => {
    try {
      return res.send({
        response: "Get All Teacher data",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteTeacher: (req, res) => {
    try {
      const { username, password } = req.body;
      teacher.pop({ username, password });
      return res.send({
        response: "Delete Teacher data",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
