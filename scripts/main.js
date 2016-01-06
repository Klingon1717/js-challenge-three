'use strict';
var le = prompt('What is the length of the room in feet');
console.log(le);
var wid = prompt('what is the width of the room in feet?');
console.log(wid);

var area = wid + le + 'feet';
var room = document.getElementById('room');
room.innerHTML = area;