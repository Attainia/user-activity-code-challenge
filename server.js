/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const app = require("express")();

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Type", "application/json");
  next();
});

app.get("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync("users.json"));

  if ("hasLogins" in req.query) {
    const { hasLogins } = req.query;

    res.send(
      users.filter(user =>
        hasLogins === "false" ? user.login_count === 0 : user.login_count > 0
      )
    );
  } else {
    res.send(users);
  }
});

app.listen(3000, () => console.log(`Listening on port 3000`));
