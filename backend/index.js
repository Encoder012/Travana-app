const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

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

connectDB()
    .then(
        app.listen(8000, () => {
            console.log('Server running at PORT: 3000')
        })
    )
    .catch((err) => { console.log(err) })
