import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const schema = new mongoose.Schema({
    login: { type: String, required:true, lowercase: true, index: true},
    passwordHash: { type: String , required: true }
}, { timestamps: true });


schema.methods.isValidPassword = function isValidPassword(password){
    return bcrypt.compareSync(password, this.passwordHash);
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


export default mongoose.model('Admin', schema);