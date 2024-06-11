import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gunikasharma0502:gunika0502@cluster0.nehuukm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}