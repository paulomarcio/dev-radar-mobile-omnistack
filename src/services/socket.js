import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.24:3001', {
  autoConnect: false,
});

const subscribeToNewDev = (subscribeFunction) => {
  socket.on('new-dev', subscribeFunction);
}

const connect = (latitude, longitude, techs) => {
  socket.io.opts.query = { 
    latitude, 
    longitude, 
    techs 
  };

  socket.connect();
}

const disconnect = () => {
  if(socket.connected){
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDev };