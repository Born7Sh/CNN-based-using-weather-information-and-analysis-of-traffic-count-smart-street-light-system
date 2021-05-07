var end = document.getElementById('date2');
var start = document.getElementById('date1');

document.getElementById('date2').value = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
document.getElementById('date2').max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];

var a=new Date();
a.setDate(a.getDate()-14)

document.getElementById('date1').value = new Date(a.getTime() - a.getTimezoneOffset() * 60000).toISOString().split("T")[0];
document.getElementById('date1').max = new Date(a.getTime() - a.getTimezoneOffset() * 60000).toISOString().split("T")[0];


function changedate() {
    var starttime = start.value;
    a = new Date(starttime);
    a.setDate(a.getDate() + 14);
    end.valueAsDate = a;
}

function changedate2() {
    var endtime = end.value;
    a = new Date(endtime);
    a.setDate(a.getDate() - 14);
    start.valueAsDate = a;
}