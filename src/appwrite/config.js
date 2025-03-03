import { Client, Account, Databases } from "appwrite";
import conf from "../conf/conf.js";

const client = new Client();

client
  .setEndpoint(conf.Appwrite_url)
  .setProject(conf.ProjectId);

export const account = new Account(client);
export const databases = new Databases(client);