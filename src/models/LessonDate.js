import mongoose from 'mongoose';


const schema = new mongoose.Schema({
    lessonId: { type: mongoose.Schema.Types.ObjectId, required: true },
    dates: { type: Array, required: true},
}, { timestamps: true });



export default mongoose.model('LessonDate', schema);