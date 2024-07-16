import express from "express";
import db from "./config/Database.js";
import dotenv from "dotenv";
import session from "express-session";

import fileupload from "express-fileupload";
import SequelizeStore from "connect-session-sequelize";
import cors from "cors";
import UserRoute from "./Routes/UserRoute.js"
import AdminRoute from "./Routes/AdminRoute.js"
import LaporanRoute from "./Routes/LaporanRoute.js"
import AuthRoute from "./Routes/AuthRoute.js"


dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});
// (async () => {
//   await db.sync();
// })();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(fileupload());
app.use(express.static("public"));
app.use(express.json());
app.use(UserRoute);
app.use(AdminRoute);
app.use(AuthRoute);
app.use(LaporanRoute);

// store.sync();
app.listen(process.env.APP_PORT, () => {
  console.log("server run " + process.env.APP_PORT);
});
