import mongoose from "mongoose";

export const connectDB = async () =>{
    const MONGOOSE_URI ='mongodb+srv://pivnati:piv123@cluster0.yqe9lij.mongodb.net/piv_express_two'
    
    await mongoose.connect(MONGOOSE_URI).then(()=>{
        console.log('db connected')
    }) 
}
