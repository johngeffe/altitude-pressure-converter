# altitude-pressure-converter
convert altitude to pressure

THIS IS NOT NEARLY COMPLETE

Allows you to convert altitude in Feet or Meters to barometric pressure in Pascals, Psi or Atmospheres.

# Usage

```sh
$ npm install altitude-pressure-converter --save
```

```javascript
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

```

# API

Not defined yet

### actual conversion is done in Kelvin (temp), Meters (Altitude) and Pascals (pressure)
