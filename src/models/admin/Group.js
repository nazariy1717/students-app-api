import mongoose from 'mongoose';


const schema = new mongoose.Schema({
    groupName: { type: String , required: true }
}, { timestamps: true });



export default mongoose.model('Group', schema);