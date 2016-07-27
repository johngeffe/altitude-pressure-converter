var AltConverter = require('altitude-pressure-converter');

var config = {
    temp: 59.9,
    altitude: 1000,
    pressure: 97722,
    units: {
        temp: 'F',
        altitude: 'ft',
        pressure: 'Pa'
    }
};

console.log(AltConverter.altitudeToPressure(config));
// returns 97722.72887817245 Pascals
console.log(AltConverter.pressureToAltitude(config));