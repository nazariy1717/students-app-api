import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import uniqueValidator  from 'mongoose-unique-validator';


const schema = new mongoose.Schema({
    login: { type: String, required:true, lowercase: true, index: true, unique: true},
    password: { type: String , required: true },
    passwordHash: { type: String , required: true },
    name: { type: String , required: true},
    groupId: { type: String , required: true }
}, { timestamps: true });


schema.methods.setPassword = function setPassword(password){
    this.passwordHash = bcrypt.hashSync(password, 10);

};
schema.plugin(uniqueValidator,{message: 'Користувач з таким іменем вже існує!'});

export default mongoose.model('Student', schema);