'use strict';
const grpc = require('grpc');

function main() {
    let server = new grpc.Server();

    server.bind('127.0.0.1:3000', grpc.ServerCredentials.createInsecure());
    server.start();

    console.log('Server running on 127.0.0.1:3000');
}

main();