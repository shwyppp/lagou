/*
* @Author: 虚竹
* @Date:   2016-09-26 22:32:33
* @Last Modified by:   饶鹏飞
* @Last Modified time: 2016-10-12 19:22:13
*/

;(function() {
	'use strict';
	angular.module('renren').controller('TheathersController', ['$scope','$http',function($scope,$http) {
	/*---------------------ajax请求--------------------------------------*/
		var url = "json.json";
		$http.get(url).success(function(response){
			$scope.jsonList = response;
		})		
	/*---------------------datalist的hover效果----------------------------*/
	  	$scope.showSub = function(item) {
	  		item.show = !item.show;
	  	}
	/*----------------------banner焦点图效果------------------------------*/
	  	$scope.banner_top = 0;
	  	$scope.em_top = 0;
	  	$scope.timergo = function(){
		  	$scope.timer = setInterval(function(){	
		  		$scope.banner_top -= 160;
		  		$scope.em_top += 55;
		  		if($scope.banner_top <= -480){
		  			$scope.banner_top = 0;
		  			$scope.em_top = 0;
		  		}
		  		$scope.$apply();
		  	}, 1000);
	  	}
	  	$scope.timergo();
	  	$scope.bannerover = function(num){
	  		clearInterval($scope.timer);
	  		$scope.banner_top = -num*160;
	  		$scope.em_top = num*55;
	  	}
	  	$scope.bannerout = function(){
	  		$scope.timergo();
	  	}
	/*------------------------判断鼠标移入方向的封装函数--------------------------------*/
	  	$scope.getfrom = function (id,tag,num){	  			
		  		var x = event.clientX;
		  		var y = event.clientY + document.body.scrollTop;
		  		var oUl = document.querySelector(id)
		  		var oLi = oUl.querySelectorAll(tag)[num];
		  		var pos = getpos(oLi);
		  		var x0 = oLi.offsetWidth/2 +pos.left;
		  		var y0 = oLi.offsetHeight/2 + pos.top;
		  		function getpos(obj){
	     			var pos = {
	          			left:0,
	          			top:0
	     			}
	     			while(obj){
	          			pos.left += obj.offsetLeft;                          
	          			pos.top += obj.offsetTop;                              
	          			obj=obj.offsetParent;                              
	    			}
	     			return pos
				}
				var k0 = oLi.offsetHeight/oLi.offsetWidth;
				var k = (y - y0)/(x - x0);
				if(k <= k0 && k >= -k0){
					if(x<x0){
						// console.log('left')
						
						return ['-100%','0px'];

					}else{
						// console.log('right')
						return ['100%','0px'];
					}
				}else{
					if(y<y0){
						// console.log('top')
						return ['0px','-100%'];
					}else{
						// console.log('bottom')
						return ['0px','100%'];
					}
				}
	  		}
	  	$scope.change = [];	
	  	$scope.thumbsover = function(id,tag,num){
	  		var from = $scope.getfrom(id,tag,num);
	  		$scope.change[num] = 'display:block;left:' + from[0] + ';top:' + from[1];
	  		setTimeout(function(){
	  			$scope.change[num] = 'display:block;transition: 0.3s ease-in-out;left:0px;top:0px;';
	  		}, 10)
	  	}
	  	$scope.thumbsout = function(id,tag,num){
	  		var from = $scope.getfrom(id,tag,num);
	  		$scope.change[num] = 'display:block;transition: all 0.3s ease;left:' + from[0] + ';top:' + from[1];
	  	}
	  	/*---------------------------content导航页码切换-----------------------------------*/
	  	$scope.a_show = [];
	  	$scope.a_show.oddindex = 0;
	  	$scope.search = function (index) {
	  		if(index >= 5){
	  			index = 4;
	  		}
	  		if (index < 0) {
	  			index = 0;
	  		}
	  		$scope.a_show[$scope.a_show.oddindex] = false;
	  		var url = "data.json";
	  		var arr = []
			$http.get(url).success(function(response){
				arr = response;
				$scope.dataList = arr.splice(index*5,5);
			})
			$scope.a_show[index] = true;
			$scope.a_show.oddindex = index;
	  	}
	  	$scope.search(0);
	  	/*---------------------------------回到首页小火箭-------------------------------------*/
	  	$scope.calltop = function(){
	  		$("body").animate({
                    "scrollTop": 0
                }, 100);
	  	}
	  	$scope.scrollTop = "display:none";
	  	window.onscroll = function(){
	  		console.log(document.body.scrollTop);
	  		if(document.body.scrollTop>100){
	  			$scope.scrollTop = '';
	  			$scope.nav_fix = true;
	  		}else{
	  			$scope.scrollTop = "display:none";
	  			$scope.nav_fix = false;
	  		}
	  		$scope.$apply()
	  	}

	}]);

})();
