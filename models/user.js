const { Schema, model } = require('mongoose');

const userSchema = Schema({
    username: { 
        type: String,
        required: true,
        unique: true,
        trim: true,   
    },
    email: { 
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/,'Please enter a valid email adress']
    },

    thoughts: [{
        type: Schema.Types.ObjectId,
        ref:'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }],
}, {
  toJson: {
    virtuals: true
  },
  id: false
});

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User; 