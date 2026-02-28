const MSGS = {
    LOCATION: "LOCATION",
    ADD: "ADD",
    DELETE: "DELETE",
    LOAD_WEATHER: "LOAD_WEATHER"
};

const initModel = {
    location: "",
    temp: "",
    high: "",
    low: "",
    locations: [],
};

module.exports = { MSGS, initModel};