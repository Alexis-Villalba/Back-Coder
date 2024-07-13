import dotenv from "dotenv";
dotenv.config();

const environment = "DEV"
dotenv.config({
  path: environment === "PRODUCTION" ? "./.env.prod" : "./.env.dev"
});


export default {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  CODE_SECRET: process.env.CODE_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
}