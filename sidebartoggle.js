var side_menu = document.querySelector('.side_menu');
		var aside = document.querySelector('.toggle1');
		var statics = document.getElementsByClassName("statics")

		var toggle = (function () {
			var isShow = false;

			return function () {
				aside.style.display = isShow ? 'block' : 'none' ;
				for(var i = 0; i<statics.length; i++){
					statics[i].style.width = isShow ? "50rem" : "55rem";
				}
				isShow = !isShow;
			};
		})();

		side_menu.onclick = toggle;