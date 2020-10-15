setInterval(function() {
var d = document.getElementById('out');
var n0 = Number(document.getElementById('in0').value);
var s0 = Number(document.getElementById('in1').value);
var s1 = Number(document.getElementById('in2').value);
var num = 0;
if (s0 != 10 && s1 == 10) {
num = parseInt(n0, s0);

} else if (s0 == 10 && s1 != 10) {
num = Number(n0.toString(s1));

}
d.innerText = num + ' в ' + s1;
}, 10);