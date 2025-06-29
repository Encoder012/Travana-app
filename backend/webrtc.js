module.exports = (io) => {
    io.on('connection', socket => {
        socket.on('signal', ({ to, data }) => {
            io.to(to).emit('signal', { from: socket.id, data });
        });
        socket.on('join', room => socket.join(room));
    });
};