import socketio from 'socket.io-client';

const socket = socketio('http://192.168.15.9:3333', {
    autoConnect: false,
});

function subscribeToNewDev(subcribeFunction){
    socket.on('new-dev', subcribeFunction);
}

function connect(latitude, longitude, techs){
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };

    socket.connect();

    socket.on('message', text => {
        console.log(text);
    })
}

function disconnect(){
    if(socket.connect){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDev,
};