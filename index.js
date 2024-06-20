
$(document).ready(function(){
	//Lay du lieu nhap vao o input
	$('.btn_in').click(function(event){
		const input=document.getElementById("textinput");
		const inputValue = input.value;
		document.getElementById('name').innerHTML =  inputValue;
		console.log(inputValue);
		$('button.btn_In').empty();
		$('button.btn_In').text('Sent');
		$('button.btn_In').css({
			'backgroundColor':'green',
			'cursor': 'not-allowed',
		});
		$('.dialog_box_demand').removeClass('appear');
		$('.bg_opacity2').removeClass('appear');
	});
	//hop thoai yeu cau nhap ten
	$('.dialog_box_demand').addClass('appear');
	$('.bg_opacity2').css('background','#223');
	$('.bg_opacity2').addClass('appear');
	$('.btn_close').click(function (event) {
		$('.bg_opacity2').removeClass('appear');
	  });
	//lua chon "yes"
	$('.btn_open_y').click(function(event) {
		$('.title').addClass('change_y');
		$('.title').empty();
		$('.title').text('I Love You So Much'+ name);
		$('.title').removeClass('change_n');
		$('.dialog_box_y').addClass('appear');
		$('.notice_y').addClass('appear_notice');
		$('.bg_opacity1').addClass('appear');
		document.body.style.backgroundImage='url(./tym.jpg)';
	});
	//lua chon "No"
	$('.btn_open_n').click(function(event){
		$('.title').addClass('change_n');
		$('.title').empty();
		$('.title').text('Why ?, you make me...');
		$('.dialog_box_n').addClass('appear');
		$('.notice_y').removeClass('appear_notice');
		$('.notice_n').addClass('appear_notice');
		$('.bg_opacity1').addClass('appear');
		document.body.style.backgroundImage='url(./sad.png)';
	});
	//dong hop thoai bang nut "close"
	$('.btn_close').click(function(event) {
		$('.dialog_box_demand').removeClass('appear');
		$('title').removeClass('change_y');
		$('title').removeClass('change_n');
		$('.dialog_box_y').removeClass('appear');
		$('.dialog_box_n').removeClass('appear');
		$('.bg_opacity1').removeClass('appear');
	});
	//dong hop thoai bang nen ngoai
	$('.bg_opacity1').click(function(event) {
		$('title').removeClass('change_y');
		$('title').removeClass('change_n');
		$('.dialog_box_y').removeClass('appear');
		$('.dialog_box_n').removeClass('appear');
		$('.bg_opacity1').removeClass('appear');
	});
});