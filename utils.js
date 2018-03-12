'use strict';

var utils = {
    createFieldRequiredResponse: (fieldName) => {
        return {
            developerMessage : "Field " + fieldName + " is required", 
            userMessage : "Field " + fieldName + " is required"
        }
    }
}

module.exports = utils;