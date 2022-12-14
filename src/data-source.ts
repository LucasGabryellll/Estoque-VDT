import "reflect-metadata"

import { DataSource } from "typeorm";

import { Provider } from "./entity/Provider";
import { Model } from "./entity/Model";
import { Equipment } from "./entity/Equipment";
import { Stock_internal } from "./entity/Stock_internal";

export const Connection = async () => {
  const connection = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Lu274235Ely5",
    database: "estoque_vdt",
    entities: [Provider, Model, Equipment, Stock_internal],
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
