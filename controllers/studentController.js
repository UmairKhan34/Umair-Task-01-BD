const student = [];

module.exports = {
  createStudent: (req, res) => {
    try {
      const { username, password } = req.body;
      student.push({ username, password });
      return res.send({
        response: student,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getStudent: (req, res) => {
    try {
      return res.send({
        response: "Get All Student data",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteStudent: (req, res) => {
    try {
      const { username, password } = req.body;
      student.pop({ username, password });
      return res.send({
        response: "Delete Student data",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
