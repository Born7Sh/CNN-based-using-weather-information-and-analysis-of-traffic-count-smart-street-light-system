var side_menu = document.querySelector('.side_menu');
		var aside = document.querySelector('.toggle1');
		var statics = document.getElementsByClassName("statics")
		var statics2 = document.getElementsByClassName("statics2")

		var toggle = (function () {
			var isShow = false;
			if(statics[0]==undefined) {
				return function () {
					aside.style.display = isShow ? 'block' : 'none' ;
					isShow = !isShow;
				};
			}

			return function () {
				aside.style.display = isShow ? 'block' : 'none' ;
				statics2[0].style.width = isShow ? "100.5rem" : "114.62rem";
				for(var i = 0; i<statics.length; i++){
					statics[i].style.width = isShow ? "50rem" : "57.06rem";
				}
				isShow = !isShow;
			};
		})();

		side_menu.onclick = toggle;