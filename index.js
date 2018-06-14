const app = require("./server");
const PORT = process.env.PORT || 8080;
// const { db } = require("./server/db/models");
// do i need this?

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`up and running here ${PORT}`);
});
