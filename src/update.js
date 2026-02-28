const {MSGS} = require("./model");

function update(msg, model) {
    switch (msg.type) {
        case MSGS.LOCATION:
            return {...model, location: msg.value};
        case MSGS.ADD:
            if (!model.location) return model;
            return {...model}
        case MSGS.DELETE:
            return { ...model, locations: model.locations.filter((_, i) => i!== msg.index ) };
        case MSGS.LOAD_WEATHER:
            return {...model, locations: [ ...model.locations, msg.payload], location: "" };
        default:
            return { ...model };
    }
}

module.exports = update;