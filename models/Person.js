import mongoose from "mongoose";

const personSchema =new mongoose.Schema({
     name:{type:String,required:true},
     age:{type:Number,required:true},
     email:{type:String, required:true,unique:true},
     userOrder:{type:Object,default:{}}
},{timestamps:true , minimize:false})  // the minimize:false is used for the put an empty object in the mongodb database 
  

export const Person = mongoose.model("person" , personSchema)