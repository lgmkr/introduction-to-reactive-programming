const Rx = require('rxjs');

// It allows you to specify the dynamic behavior of a value completely at the time of declaration 
const streamA = Rx.Observable.of(3, 4);
const streamB = streamA.map(a => a * 10);

streamB.subscribe(b => console.log('b: ', b));