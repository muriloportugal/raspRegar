import {hardwareRevision} from 'pigpio';

console.log('Hardware Revision: ' + hardwareRevision().toString(16));