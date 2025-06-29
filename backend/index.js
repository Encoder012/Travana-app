const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const dotenv = require('dotenv');
const connectDB = require('./db/db');
const userRouter = require('./routers/user.routes');
const authRouter = require('./routers/auth.routes');
const authMiddleware = require('./middlewares/auth.middleware')

app.use('/api/auth', authRouter)
app.use('/api/user', authMiddleware, userRouter)


dotenv.config({
    path: "./env"
})

const PORT = process.env.PORT;

connectDB()
    .then(
        app.listen(PORT, () => {
            console.log(`Server running at PORT: ${PORT}`)
        })
    )
    .catch((err) => { console.log(err) })
