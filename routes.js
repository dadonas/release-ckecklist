const utils = require('./utils')

var routes = {
    apigee: {
        get: function(req, h){
            var body = req.payload;

            if (body.uri == undefined || body.uri === '') {
                return h.response(utils.createFieldRequiredResponse('uri')).code(400);
            }

            if (body.method == undefined || body.method === '') {
                return h.response(utils.createFieldRequiredResponse('method')).code(400);
            }

            return body;
        }
    }
}

module.exports = routes;