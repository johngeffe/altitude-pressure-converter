var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('chai').assert;
var AltConverter = require('../index');

pressureToAltitude = AltConverter.pressureToAltitude;
altitudeToPressure = AltConverter.altitudeToPressure;

describe('#computeAltitude', function() {
    it('pressure (sealevel) to altitude = 0', function() {
        var options = {
            temp: 59.9,
            pressureAtAltitude: 101325,
            units: {
                temp: 'F',
                pressure: 'Pa',
                altitude: 'ft'
            }
        };
        expect(pressureToAltitude(options)).equals(0);
    });
    it('pressure (300meter/97772.58) to altitude = 300', function() {
        var options = {
            temp: 59.9,
            pressureAtAltitude: 97772.58,
            units: {
                temp: 'F',
                pressure: 'Pa',
                altitude: 'm'
            }
        };
        expect(pressureToAltitude(options)).to.be.at.least(300);
    });
    it('pressure (1000ft/97772.58) to altitude = 1000 ft', function() {
        var options = {
            temp: 59.9,
            pressureAtAltitude: 97716.57,
            units: {
                temp: 'F',
                pressure: 'Pa',
                altitude: 'ft'
            }
        };
        expect(pressureToAltitude(options)).to.be.at.least(1000);
    });
});

describe('#altitudeToPressure', function() {
    it('pressure (sealevel) to altitude = 0', function() {
        var options = {
            temp: 59.9,
            altitude: 0,
            units: {
                temp: 'F',
                pressure: 'Pa',
                altitude: 'ft'
            }
        };
        expect(altitudeToPressure(options)).equals(101325);
    });
});