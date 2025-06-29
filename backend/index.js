const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const { Server } = require('socket.io');
const connectDB = require('./db/db');
const userRouter = require('./routers/user.routes');
const authRouter = require('./routers/auth.routes');
const authMiddleware = require('./middlewares/auth.middleware');
const rideRoutes = require('./routers/ride.routes')

const app = express();
const server = http.createServer(app); // create shared HTTP server
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

// Load environment variables
dotenv.config({ path: './env' });

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRouter);
app.use('/api/user', authMiddleware, userRouter);
app.use('/api/rides', rideRoutes)

// WebSocket events
io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    socket.on('join', (roomId) => {
        socket.join(roomId);
        console.log(`User joined room: ${roomId}`);
    });

    socket.on('signal', ({ to, data }) => {
        socket.to(to).emit('signal', { data });
    });

    socket.on('disconnect', () => {
        console.log('Socket disconnected:', socket.id);
    });
});

// Start server
const PORT = process.env.PORT || 8000;
connectDB()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
