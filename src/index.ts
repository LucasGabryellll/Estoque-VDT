import "reflect-metadata";
import { Connection } from '../src/data-source';
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

const app = express();
Connection()
app.use(bodyParser.json());
app.use(routes);

app.listen(3000, () => console.log("Server is running in http://localhost:3000"));

