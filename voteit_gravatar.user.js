// ==UserScript==
// @name     Gravatar identicon
// @namespace   Gravatar
// @include     https://scout.voteit.se/*
// @version  1
// @grant    none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js 
// ==/UserScript==

setInterval(
	function() {
		jQuery('img.profile-pic')
			.each(
				function() {
					if(this.src.substr(this.src.length - 5) == '&d=mm')
					{
						this.src = this.src.substr(0, this.src.length - 2) + 'identicon';
					}
				}
			);
	}
	,
	1000
);

