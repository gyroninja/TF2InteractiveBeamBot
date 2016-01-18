'use strict'
let Beam = require('beam-client-node');
let TF2 = require('beam-interactive-node');
let childProcess = require('child_process');
let config = require('./config');

let stream = config.channelId;
let username = config.username;
let password = config.password;

let needsRefresh = false;

let beam = new Beam();
beam.use('password', {
	username: username,
	password: password
}).attempt().then(() => {
	return beam.game.join(stream);
}).then((res) => {
	var details = {
		remote: res.body.address,
		channel: stream,
		key: res.body.key
	};

	var robot = new TF2.Robot.default(details);

	robot.handshake((err) => {
		if (err) {
			console.log('HANDSHAKE ERROR: ' + err);
		}
		else {
			console.log('Handshake Successful');
		}
	});

	robot.on('report', (report) =>  {
		if (report.tactile.length > 0) {
			report.tactile.forEach((tactile) => {
				switch (tactile.code) {
					case 1024:
						needsRefresh = true;
						break;
				}
			});
		}
	});

	setInterval(() => {
		if (needsRefresh) {
			console.log("Randomize");
			childProcess.exec('xdotool key --window $(xdotool search --onlyvisible --name Random) F5');
			needsRefresh = false;
		}
	}, 500);
});
