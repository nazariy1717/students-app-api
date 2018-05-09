import mongoose from 'mongoose';


const schema = new mongoose.Schema({
    name: { type: String, required: true},
    teacherId: { type: mongoose.Schema.Types.ObjectId, required: true },
    groupId: { type: mongoose.Schema.Types.ObjectId, required: true },
    number: { type: String, required: true},
    day: { type: String, required: true},
}, { timestamps: true });



export default mongoose.model('Lesson', schema);