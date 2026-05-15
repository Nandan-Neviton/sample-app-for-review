const express = require("express");
const taskRoutes = require("./routes/tasks");

const app = express();

app.use(express.json());
app.use("/tasks", taskRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// made some changes to refelect in dashboard 1
// made some changes to refelect in dashboard 2
// made some changes to refelect in dashboard 3
// made some changes to refelect in dashboard 4
// made some changes to refelect in dashboard 5
// made some changes to refelect in dashboard 6
// made some changes to refelect in dashboard 7
// made some changes to refelect in dashboard 8
// made some changes to refelect in dashboard 9
// made some changes to refelect in dashboard 10