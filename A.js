// Making a clock Javascripting

let a;
let date;
let time;
setInterval(() =>{
    a = new Date();
    const options = {weekday:'long', year: 'numeric', month: 'long', day:'numeric'};
    date = a.toLocaleDateString(options,undefined);
    time = a.getHours+ ':' + a.getMinutes+ ':' + a.getSeconds;
    document.getElementById('');
}1000);

Let a;
let date;
let time;

setInterval(() => {
    a = new Date ();
    const options= {weekday: 'numeric', year: 'long', month:'numeric', day:'long' };
    date = a.toLocaleDateString(options,undefined);
    time =a.getHours+ ':'+a.getMinutes+':'+a.getSeconds;
    document.getElementById('ID NAME')
},1000);

var b;
var tarik;
var somy;
 
setInterval(() => {
    a = new Date;
    const options:{weekday:'long',year: 'numeric',month:'long', day:'numreric'};
    date = a.toLocaleDateString(options,undefined);
    time= a.getHours+ ':' +a.getMinutes+ ':'+ a.getSeconds;
    document.getElementById('id name');
}, 1000);