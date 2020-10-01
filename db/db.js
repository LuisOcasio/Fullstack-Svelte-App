// we will hook up to mongoose here.
import mongoose from 'mongoose'

//will resolve deprecated warnings
export const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })

  console.log(
    `MongoDB Connected: ${conn.connection.host}`.magenta.underline.bold
  )
}

