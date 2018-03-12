'use strict';

const Hapi = require('hapi');

var port = process.env.PORT || 3000;

const server = Hapi.Server({
    host: 'localhost',
    port: port
});

const routes = require('./routes')

server.route({
    method: 'GET',
    path: '/apigee',
    handler: routes.apigee.get
});

async function start(){
    try {
        await server.start();
    }
    catch(err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at: ' + server.info.uri);
}

start();
