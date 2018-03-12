const request = require('supertest');
const routes = require('../routes');
const Hapi = require('hapi');
const utils = require('../utils')

var port = process.env.PORT || 3000;

const server = Hapi.Server({
    host: 'localhost',
    port: port
});

server.route({
    method: 'POST',
    path: '/v1/apigee',
    handler: routes.apigee.get
});

describe('Controller Tests', () => {

    it('No URI should return fault', () => {
        request(server.listener)
            .post('/v1/apigee')
            .send(
                {uri:''}
            )
            .expect(
                utils.createFieldRequiredResponse('uri')
            )
            .expect(400)
            .end(function(err, res) {
                if (err) throw err;
            })
    });

    it('No Verb should return fault', () => {
        request(server.listener)
            .post('/v1/apigee')
            .send(
                {uri: '/foo', method:''}
            )
            .expect(
                utils.createFieldRequiredResponse('method')
            )
            .expect(400)
            .end(function(err, res) {
                if (err) throw err;
            })
    });
});

