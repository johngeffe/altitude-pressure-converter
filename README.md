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
    altitude: 1000, // required for altitudeToPressure()
    pressure: 97722,
    pressureAtAltitude: 97716.57, // required for pressureToAltitude()
    units: {
        temp: 'F',
        altitude: 'ft',
        pressure: 'Pa'
    }
};

console.log(AltConverter.altitudeToPressure(config));
// returns 97722.72887817245 Pascals
console.log(AltConverter.pressureToAltitude(config));
// returns about 1000 feet
```

# API

### actual conversion is done in Kelvin (temp), Meters (Altitude) and Pascals (pressure)
Limited between sea level and 20,000 meters (65,617 feet).

### altitudeToPressure(options)
Returns barometric pressure at the supplied altitude above sea level.
#### Params:
* **options** (*Object*) - Feels options:
  * **temp** (*Float*) - Temperature in Celsius, Fahrenheit or Kelvin, depends on units type.
    * **Default** Kelvin 288.15 (59.9°F/15°C)
  * **pressureAtSeaLevel** (*Float*) - Pressure at Sea Level in Psi, Atmospheres or Pascals, depends on units type.
    * **Default** Pascals 101325 Pa
  * **altitude** (*Float*) ***Required*** - altitude in Feet or Meters, depends on units
    * **Default** 0 meters
  * **units** (*Object*) - Units type:
    * **temp** (*String*) - `C`, `F`, `K` (default `K`).
    * **pressure** (*String*) - `psi`, `atm`, `Pa` (default `Pa`)
    * **altitude** (*String*) - `ft`, `m` (default `m`)

### pressureToAltitude(options)
Returns altitude in Meters or Feet at the supplied barometric pressure above sea level.
#### Params:
* **options** (*Object*) - Feels options:
  * **temp** (*Float*) - Temperature in Celsius, Fahrenheit or Kelvin, depends on units type.
    * **Default** Kelvin 288.15 (59.9°F/15°C)
  * **pressureAtSeaLevel** (*Float*) - Pressure at Sea Level in Psi, Atmospheres or Pascals, depends on units type.
    * **Default** Pascals 101325
  * **pressureAtAltitude** (*Float*) ***Required*** - Pressure at altitude in Pascals, Atmospheres or Psi, depends on units
    * **Default** Pascals 101325
  * **units** (*Object*) - Units type:
    * **temp** (*String*) - `C`, `F`, `K` (default `K`).
    * **pressure** (*String*) - `psi`, `atm`, `Pa` (default `Pa`)
    * **altitude** (*String*) - `ft`, `m` (default `m`)
