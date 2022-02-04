import express, { Application } from "express";
import router from "../routes/user";
import cors from "cors";
import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: "/api/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    //Middlewares
    this.middlewares();
    //Routes
    this.routes();
  }
  async dbConnection() {
    try {
      await db.authenticate();
      console.log("--- Database connected");
    } catch (error) {
      throw new Error("--- Error db connection");
    }
  }

  middlewares() {
    //Cors
    this.app.use(cors());
    //Read Body
    this.app.use(express.json());
    //Public
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.users, router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("--- Server on port: " + this.port);
    });
  }
}

export default Server;
