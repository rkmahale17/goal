


import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserAuthSchema = new Schema({
         userName: {
           type: String,
           required: true,
         },
         userId: {
           type: String,
           required: true,
         },
         password: {
           type: String,
           required: true,
         },
       });