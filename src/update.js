const {MSGS} = require("./model");

function update(msg, model) {
    switch (msg.type) {
        case MSGS.LOCATION:
            return {...model, location: msg.value};
        case MSGS.ADD:
            if (!msg.payload) return model;
            return {...model, locations: [ ...model.locations, msg.payload], location: "" };
        case MSGS.DELETE:
            return { ...model, locations: model.locations.filter((_, i) => i!== msg.index ) };
        default:
            return { ...model };
    }
}

module.exports = update;