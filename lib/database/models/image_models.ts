import mongoose, { Schema } from "mongoose";

const imageschema = new Schema(
    {
        title : {type : String, required : true},
        transformationtype : {type : String, required : true}
    }
)