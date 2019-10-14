$(document).ready(function () {
	if($(window).width()>630){
	  $(".itopabox").height($(window).width()*0.286 );
	}else{
	  $(".itopabox").height($(window).width()*0.495);
	}
});
	  
$(window).resize(function () {
	if($(window).width()>630){
	  $(".itopabox").height($(window).width()*0.286 );
	}else{
	  $(".itopabox").height($(window).width()*0.495);
	}
}).resize();



$(function(){
	
  try {
	$.smoothScroll();
  } catch (err) {
  }

  $(".tnav ul li").hover(function(){
	  $(this).children('div').show();
  },function(){
	  $(this).children('div').hide();
  });
  
  $(".backtop").click(function(){
	  $("body, html").animate({scrollTop:0},800);
  });

  $(".tnav_min_btn").click(function(){
	  if (!$(this).parent('.tnav_min').hasClass("open")){
		  $(".tnav_min_con").animate({right:'0'});
		  $(this).parent('.tnav_min').addClass("open");
	  }else{
		  $(".tnav_min_con").animate({right:'-151px'});
		  $(this).parent('.tnav_min').removeClass("open");
	  }
  });

  $(".pages_up").click(function(){
	  $("body, html").animate({scrollTop:0},800);
  });
  
  
});

function Floaters() {
		this.delta=0.15;
		this.playid =null;
		this.items	= [];
		this.addItem	= function(id,x,y,content) {
			var newItem = {};
			newItem.object = document.getElementById(id);

			if(x==0){
				objw= newItem.object.offsetWidth;
				var body = (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;
				newItem.x = x = body.scrollLeft + (body.clientWidth - objw)/2;
				newItem.y = y;
			}else{
				newItem.x = x;
				newItem.y = y;
			}

			this.items[this.items.length]		= newItem;
		}
		this.play =function(varname){
			this.playid = setInterval(varname+'.plays()',40);
		}
		this.close = function(obj){
			document.getElementById(obj).style.display='none';
			 //clearInterval(this.playid);
		}
}
Floaters.prototype.plays = function(){
	var diffY;
	if (document.documentElement && document.documentElement.scrollTop)
	{
		diffY = document.documentElement.scrollTop;
	}
	else if (document.body)
	{
		diffY = document.body.scrollTop;
	}else{}

	for(var i=0;i<this.items.length;i++) {
		var obj = this.items[i].object;
		var followObj_y = this.items[i].y;
		var total = diffY + followObj_y;
		if(this.items[i].x >= 0){
			obj.style['left'] = this.items[i].x+ 'px';
		}else{
			obj.style['right'] = Math.abs(this.items[i].x)+ 'px';
		}
		if( obj.offsetTop != total)
		{
			var oldy = (total - obj.offsetTop) * this.delta;
				newtop = obj.offsetTop + ( oldy>0?1:-1 ) * Math.ceil( Math.abs(oldy) );
			obj.style['top'] = newtop + 'px';
		}
	}
}
