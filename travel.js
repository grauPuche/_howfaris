
'use strict';

var prompt = require('prompt');
var geodist = require('geodist');
var where = require('node-where');
const dns = require('dns');
const extIP = require('external-ip');
var colors = require('colors');


var latitude;
var longitude;
var realPlace;
var realPlace2;
var latitude2;
var longitude2;
var address;

var IPn1;
var IPn2;

let getIP = extIP({
	services: ['http://ifconfig.co/x-real-ip', 'http://ifconfig.io/ip'],
});

getIP((err, ip) => {
	if (err) {
		throw err;
	}
	//console.log(ip);
	IPn1 = ip;
});

prompt.start();

prompt.get(['website'], function (err, result) {
	// console.log('input:');
	// console.log('IP #1: ' + result.IP1);
	// console.log('IP #2: ' + result.IP2);

	dns.lookup(result.website,(err, address, family)=>{
		//console.log(address);
		traveling(address);
	});
	// var distance = require('google-distance');

	// distance.get({
	// 		index: 1,
	// 		origin: latitude+","+longitude,
	// 		destination: latitude2+","+longitude2
	// 	},

	// 	function (err, data) {
	// 		if (err) return console.log(err);
	// 		console.log(data.distanceValue);
	// 	}
	// );
});

function traveling(address) {

	where.is(IPn1, function (err, result) {

		if (result) {

			latitude = result.get('lat');
			longitude = result.get('lng');
			realPlace = result.get('address');

			// console.log(latitude + "," + longitude);
			//console.log(realPlace);

			where.is(address, function (err, result) {

				if (result) {

					latitude2 = result.get('lat');
					longitude2 = result.get('lng');
					realPlace2 = result.get('address');

					// console.log(latitude2 + "," + longitude2);

					forhowlong();
				}
			});
		}
	});
}

function forhowlong() {

	var dist = geodist({

		lat: latitude,
		lon: longitude

	}, {

		lat: latitude2,
		lon: longitude2

	});
	console.log();
	console.log();	
	console.log(" " + realPlace.yellow);	
	console.log("  |");
	console.log("  |");
	console.log("  |   You just traveled " + colors.bgWhite.black(" "+dist+" "),"miles!");
	console.log("  |");
	console.log("  V");
	console.log(" " + realPlace2.yellow);
	console.log();
	console.log();	
}