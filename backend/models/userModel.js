import  mongoose from  'mongoose';

const userSchema = mongoose.Schema (
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    }, {
    /*
        timestaps tells Mongoose to automatically manage
        createdAt and updatedAt(set at the same time,
        when I have created document) properties on your document
    */
        timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User