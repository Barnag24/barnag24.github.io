var bgIllustration = 0;

function showBgIllustration()
{
	if (bgIllustration != 1)
	{
	bgIllustration = 1;
	$(".sidePic").css('display', 'block');
	$("#agentBg").animate({top:'200px', left:'-200px'}, 1000);
	$("#guardBg").animate({top:'200px', right:'-1800px'}, 1000);	
	}
}

var contentNo = 0;

function hideAllContent(_animTime)
{
	
$("#content1").hide(_animTime);
$("#content2").hide(_animTime);
$("#content3").hide(_animTime);

if (bgIllustration != 0)
{
	bgIllustration = 0;
	$("#agentBg").animate({top:'300px', left:'-1000px'}, 1000);
	$("#guardBg").animate({top:'300px', right:'-2300px'}, 1000, function() {
		$(".sidePic").css('display', 'none');
	});
	
}

}
hideAllContent(0);
function showContent(_number)
{
	if (contentNo != _number)
	{
	hideAllContent(1000);
    $("#content" + _number).show(1000, function() {
    document.querySelector("#content" + _number).scrollIntoView({behavior: 'smooth'});
    });	
	contentNo = _number;
	}
}
$("#logo").click(function() {hideAllContent(1000); contentNo = 0;});
$("#nav1").click(function() {
	showContent(1);
});
$("#nav2").click(function() {
	showContent(2);
//var win = window.open('', '_blank');
//if (win) {
    //Browser has allowed it to be opened
    //win.focus();
//} else {
    //Browser has blocked it
    //alert('Please allow popups for this website!');
//}
});
$("#nav3").click(function() {
	showContent(3);
	showBgIllustration();
});

