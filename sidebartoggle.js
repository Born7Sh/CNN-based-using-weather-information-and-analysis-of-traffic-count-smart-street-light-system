var side_menu = document.querySelector('.side_menu');
		var aside = document.querySelector('.toggle1');

		var toggle = (function () {
			var isShow = false;

			return function () {
				aside.style.display = isShow ? 'block' : 'none';
				isShow = !isShow;
			};
		})();

		side_menu.onclick = toggle;