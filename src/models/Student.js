import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import uniqueValidator  from 'mongoose-unique-validator';
import jwt from 'jsonwebtoken';


const schema = new mongoose.Schema({
    login: { type: String, required:true, lowercase: true, index: true, unique: true},
    password: { type: String , required: true },
    passwordHash: { type: String , required: true },
    name: { type: String , required: true},
    groupName: { type: String , required: true }
}, { timestamps: true });


schema.methods.isValidPassword = function isValidPassword(password){
    return bcrypt.compareSync(password, this.passwordHash);
};

schema.methods.setPassword = function setPassword(password){
    this.passwordHash = bcrypt.hashSync(password, 10);
};

schema.methods.generateJWToken = function generateJWToken(){
    return jwt.sign({
        login: this.login
    }, process.env.JWT_SECRET);
};

schema.methods.toAuthJson = function toAuthJson() {
    return {
        login: this.login,
        token: this.generateJWToken()
    }
};

schema.plugin(uniqueValidator,{message: 'Студент з таким іменем вже існує!'});

export default mongoose.model('Student', schema);