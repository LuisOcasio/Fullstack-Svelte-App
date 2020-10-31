import mongoose from 'mongoose'

const Vendor_Schema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 8,
    select: false,
  },
  email: {
    type: String,
    requried: [true, 'Please provide an email address'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide an email address',
    ],
  },
  avatar: {
    type: String,
    default: 'no-photo.jpg',
  },
})
