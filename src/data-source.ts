import "reflect-metadata";

import { DataSource } from "typeorm";

import { Provider } from "./entity/Provider";
import { Model } from "./entity/Model";
import { Equipment } from "./entity/Equipment";

export const Connection = async () => {
  const connection = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "estoque_vdt",
    entities: [Provider, Model, Equipment],
    migrations: [],
    subscribers: [],
    synchronize: true,
    logging: false,
  });

  try {
    await connection.initialize();
  } catch (error) {
    console.log(error);
  } 
}
