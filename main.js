$("#leftCol").hide();
rc = $("#rightCol").detach();
var rightCol = $("<div id='pageCol'></div>").appendTo("#mainContainer");
// var scrollHeight = $("#pagelet_ticker").height()+$(".fbChatSideBarBody").height()+$(".fbSidebarGripper").height();
var scrollHeight = $(window).height()*0.90;
$("#pageCol").slimScroll({
	height: scrollHeight,
	// allowPageScroll: true,
	width: '506px'
});
// $("#contentCol").addClass("slimScrollDiv").css({'position': 'relative', 'overflow': 'hidden', 'width': '506px', 'height': '585px'});
// $("#contentCol").slimScroll({
// 	height: $(window).height(),
// 	allowPageScroll: true,
// 	width: '506px'
// });
var leftCol = $("#contentCol").css({'margin-left':'0px'});
leftCol.css({'float':'left'});
$("#content").css({'width':'1035'});
$("#pageCol").css({'float':'right','width':'506px','padding-left':'11px','padding-top':'12px'});
$("#pagelet_rhc_footer").hide();
rc.find("._4-u2").detach().appendTo("#pageCol").css({'margin-bottom':'10px'}).addClass("pageletReminder");

// br.children(".rightColumnWrapper").css({'width':'inherit'});
// rightCol.css({'position':'absolute','left':'510px'});
// rightCol.find("#pagelet_composer").hide();
// leftCol.find("form.commentable_item").not("form[class^='live_']").closest("._4-u2").addClass("pageStories").hide();
// rightCol.find("form[class^='live_']").closest("._4-u2").addClass("friendStories").hide();
// rightCol.find(".hidden_elem").parent().hide();
console.log("Updating...");
leftCol.find(".userContentWrapper>div.clearfix>a").not(".visited").each(function(){
	if($(this).data('hovercard').indexOf('page')=='-1'){
		$(this).closest("._4-u2").addClass("visited");
	}else{
		var obj = $(this).closest("._4-u2");
		obj.clone().appendTo("#pageCol");
		obj.addClass("visited").hide();
		console.log($(this).attr('href'));
	}
});
setInterval(function(){
	console.log("Updating...");
	leftCol.find(".userContentWrapper>div.clearfix>a").not(".visited").each(function(){
		if($(this).data('hovercard').indexOf('page')=='-1'){
			$(this).closest("._4-u2").addClass("visited");
		}else{
			var obj = $(this).closest("._4-u2");
			obj.clone().appendTo("#pageCol");
			obj.addClass("visited").hide();
			console.log($(this).attr('href'));
		}
	});
},3000);

// $("body").on('DOMNodeInserted','.userContentWrapper>div.clearfix>a',function(){
// 	if($(this).closest("._4-u2").hasClass("pageStories")){
// 		console.log("already visited!");
// 	}else{
// 		console.log("New node!");
// 		if($(this).data('hovercard').indexOf('page')=='-1'){
// 			$(this).closest("._4-u2").addClass("userStories");
// 		}else{
// 			$(this).closest("._4-u2").addClass("pageStories").appendTo("#pageCol");
// 		}
// 	}
// });