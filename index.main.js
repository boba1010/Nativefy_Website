(function () {
	var shots = [
		{ 
			src: "img/browse.webp", 
			alt: "Nativefy video grid with the expanded library sidebar", 
			h: 1020,
			t: "Browse a clean grid", 
			d: "Thumbnails, durations and channel names in a layout that scales with the window. Collapse the sidebar to fit more on screen." 
		},
		{ 
			src: "img/search.webp", 
			alt: "Search results for a song with thumbnails, channel names and durations", 
			h: 1020,
			t: "Search without an account", 
			d: "Type a song, a channel or a topic and get results with the length of each video. Filter to what you have not watched yet." 
		},
		{ 
			src: "img/playlist.webp", 
			alt: "A playlist of 140 items with a track list and a Play button", 
			h: 1020,
			t: "Playlists with a proper track list", 
			d: "Striped rows, durations and a like button on every track. Long playlists stay quick to scroll." 
		},
		{ 
			src: "img/player.webp", 
			alt: "Lyric video playing with the bottom player bar", 
			h: 1020,
			t: "A player that stays out of the way", 
			d: "Shuffle, previous, next, repeat, seek and volume sit in one bar at the bottom of the window." 
		},
		{ 
			src: "img/fullscreen.webp", 
			alt: "Video in full screen mode with a compact player bar", 
			h: 1080,
			t: "Full screen when you want it",
			d: "Expand the video to the whole window and keep the controls one tap away." 
		},
		{ 
			src: "img/history.png", 
			alt: "Browsing recently watched videos and search history", 
			h: 1020,
			t: "Your history. Yours alone",
			d: "Pick up where you left off with your recently watched videos, playlists, and search history." 
		},
	];

	var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));

	var img = document.getElementById("stage-img");

	var title = document.getElementById("stage-title");

	var text = document.getElementById("stage-text");

	var panel = document.getElementById("panel");

	var shotBox = img.parentNode;

	function show(i) {
		var s = shots[i];
		tabs.forEach(function (t, j) {
			t.setAttribute("aria-selected", j === i ? "true" : "false");
			t.tabIndex = j === i ? 0 : -1;
		});

		img.src = s.src; img.alt = s.alt; img.height = s.h;
		shotBox.style.aspectRatio = "1920 / " + s.h;
		title.textContent = s.t; text.textContent = s.d;
		panel.setAttribute("aria-labelledby", "t" + i);
	}

	tabs.forEach(function (t, i) {
		t.tabIndex = i === 0 ? 0 : -1;
		t.addEventListener("click", function () { show(i); });
		t.addEventListener("keydown", function (e) {
			var n = i;

			if (e.key === "ArrowRight") 
				n = (i + 1) % tabs.length;
			else if (e.key === "ArrowLeft") 
				n = (i + tabs.length - 1) % tabs.length;
			else 
				return;

			e.preventDefault(); show(n); tabs[n].focus();
		});
	});

})();