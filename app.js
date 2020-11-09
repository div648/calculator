var r = random(0, 255);
var g = random(0, 255);
var b = random(0, 255);
var rf = random(0, 1);
var gf = random(0, 1);
var bf = random(0, 1);

setInterval(function() {

var s0 = Number(getElId('in1', true));
var s1 = Number(getElId('in2', true));
if (s0 <= 10) {
var n0 = Number(getElId('in0', true));
} else {
var n0 = getElId('in0', true)
}
if (numSi(n0, s0, s1) != 'NaN') {
printElSet('out',numSi(n0, s0, s1)  + '\t' + ' в '  + s1 + '-ой');
} else {
printElSet('out',0  + '\t' + ' в '  + s1 + '-ой');    
}
}, 10);

setInterval(function() {
if (countStr(getElId('in3', true))) {
printElSet('out1','Ответ: ' + countStr(getElId('in3', true)));
}
}, 10);

function menu() {
changeStyl('menu', 'display', 'contents');
changeStyl('k0', 'display', 'none');
changeStyl('k1', 'display', 'none');
}
function cal0() {
    changeStyl('menu', 'display', 'none');
    changeStyl('k0', 'display', 'contents');

}
function cal1() {
    changeStyl('menu', 'display', 'none');
    changeStyl('k1', 'display', 'contents');

}
setInterval(function() {
if (r >= 255 && rf) {
rf = false;
} else if (r <= 0 && !rf) {
rf = true;    
}
if (g >= 255 && gf){
gf = false;
} else if (g <= 0 && !gf) {
gf = true;
}
if (b >= 255 && bf){
bf = false;
} else if (b <= 0 && !bf) {
bf = true;
}

if (rf) {
r++;
} else {
r--;
}

if (gf) {
g++;
} else {
g--;
}

if (bf) {
b++;
} else {
b--;
}
changeStyl('spr', 'color', 'rgb('+r+','+g+','+b+')');
}, 10);

