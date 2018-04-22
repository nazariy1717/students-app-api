import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const schema = new mongoose.Schema({
    email: { type: String, required:true, lowercase: true, index: true},
    passwordHash: { type: String , required: true }
}, { timestamps: true });


schema.methods.isValidPassword = function isValidPassword(password){
    return bcrypt.compareSync(password, this.passwordHash);
};

schema.methods.generateJWToken = function generateJWToken(){
    return jwt.sign({
        email: this.email
    }, process.env.JWT_SECRET);
};

schema.methods.toAuthJson = function toAuthJson() {
    return{
        email: this.email,
        token: this.generateJWToken()
    }
};


export default mongoose.model('User', schema);