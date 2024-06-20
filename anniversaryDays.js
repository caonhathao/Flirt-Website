function callDialog_box_name(){
    $('.dialog_box_demand').removeClass('appear');
    $('button.btn_send').empty();
    $('button.btn_send').text('Send');
    //hop thoai yeu cau nhap ten
    $('.dialog_box_name').css({
        'height':'200px',
    })
    $('.dialog_box_name').addClass('appear');
	$('.bg_opacity1').css('background','#23679');
	$('.bg_opacity1').addClass('appear');
	$('.btn_close').click(function (event) {
	$('.bg_opacity1').removeClass('appear');
        $('.dialog_box_name').removeClass('appear');
	});
    $('.btn_send').click(function(event){
        var nameBoyinput = document.getElementById("nameBoyinput");
        var nameGirlinput = document.getElementById("nameGirlinput");
		document.getElementById('boyName').innerHTML =  `${nameBoyinput.value}`;
        document.getElementById('girlName').innerHTML = `${nameGirlinput.value}`;
        $('button.btn_send').empty();
        $('button.btn_send').text('Sent');
        
        $('.dialog_box_name').removeClass('appear');
        $('.bg_opacity1').removeClass('appear');
        $('body').addClass('addFont');
    });
    $('.bg_opacity1').click(function(event){
        $('.bg_opacity1').removeClass('appear');
        $('.dialog_box_name').removeClass('appear');
    });
}
var day,month,year;
$(document).ready(function () {
	//hop thoai yeu cau nhap ngay
	$('.dialog_box_demand').addClass('appear');
	$('.bg_opacity1').css('background','#23679');
	$('.bg_opacity1').addClass('appear');
	$('.btn_close').click(function (event) {
            //yeu cau nhap ten
            callDialog_box_name();
	});
    //nhan du lieu va dong hop thoai
    $('.btn_send').click(function(event){
        day = document.getElementById("dayInput");
        month = document.getElementById("mmonthInput");
        year = document.getElementById("yearInput");      
        // document.getElementById('day').innerHTML=`${dayInput.value}`;
		// document.getElementById('name').innerHTML =  `${input.value}`;
        $('button.btn_send').empty();
        $('button.btn_send').text('Sent');
        callDialog_box_name();
    });
    $('.bg_opacity1').click(function(event){
        callDialog_box_name();
    });
});

var dd=new Number(dayInput.value);
var mm=new Number(monthInput.value);
var yyyy=new Number(yearInput.value);

var yourDate = new Date(yyyy,mm,dd,00,00,00);

document.addEventListener('DOMContentLoaded', function(){
        var rootTime = document.querySelector("time");

        document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
        document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" DAYS";

        function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
        } olock();
        var timer = setInterval(function(){olock()}, 1000);
        //document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

        document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);
