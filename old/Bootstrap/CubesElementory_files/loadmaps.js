

// Created by MrGarretto - @JustMrGarretto
// Last updated: 2-16-15


allMaps = [];

var allTransitionsComplete = (function () {
    var state; // Private Variable
    var pub = {};// public object - returned at end of module
    pub.change = function (newstate) {
        state = newstate;
    };
    pub.check = function() {
        return state;
    }
    return pub; // expose externally
}());

var selectedPage = (function () {
    var page; // Private Variable
    var pub = {};// public object - returned at end of module
    pub.change = function (newpage) {
        page = newpage;
    };
    pub.check = function() {
        return page;
    }
    return pub; // expose externally
}());

function showMapType(type) {
	if (allTransitionsComplete.check() === true) {
		allTransitionsComplete.change(false);
		selectedPage.change("none");
		$("#map-container").animate({
				marginLeft: "-100%",
				marginRight: "100%",
			}, 450, function() {
			$("#map-container").empty();
			$("#map-container").css({'margin-left' : '100%', 'margin-right' : '-100%'});
			var mapsAmount = allMaps.length;
			for (i = 0; i < mapsAmount; i++) {
				if (allMaps[i].mapType === type) {
					$("#map-container").append('<div class="map-entry"><h3>'+ allMaps[i].mapName +'</h3><div class="players">'+ allMaps[i].mapPlayers +' player</div><img src="'+ allMaps[i].mapImageURL +'"><p>'+ allMaps[i].mapDesc +'</p><a href="'+ allMaps[i].mapDownloadURL +'"><center><span class="downloadbutton">'+ allMaps[i].mapVersion +' download</span></a></center></div>');
				}
			}
			$("#map-container").animate({marginLeft: "-=100%", marginRight: "+=100%",}, 450, function() {
				allTransitionsComplete.change(true);
			});
		});
	}
}

function Map(mapName, mapType, mapDesc, mapImageURL, mapDownloads, mapDownloadURL, mapAdflyURL, mapVersion, mapPlayers) {
	this.mapName = mapName;
	this.mapType = mapType;
	this.mapDesc = mapDesc;
	this.mapImageURL = mapImageURL;
	this.mapDownloads = mapDownloads;
	this.mapDownloadURL = mapDownloadURL;
	this.mapAdflyURL = mapAdflyURL;
	this.mapVersion = mapVersion;
	this.mapPlayers = mapPlayers;

	this.mapID = allMaps.length + 1;
}

// Add all maps here
// Map contents order: "Name", "type", "Description", "image URL", downloads amount, "download URL", "minecraft version", players

allMaps[allMaps.length] = new Map("Hologram Parkour", "parkour", "Hologram Parkour is possibly the most challenging form of parkour, where you must look at the template, then jump to the next block, without seeing it. The map will keep track of how many seconds it has taken you, and how many attempts you have taken, so it is speedrunable!", "./MrGarretto's Minecraft Maps_files/hologramparkour.png", 29503, "http://download1580.mediafire.com/6dd4zxaewxlg/owv13e3c5f4xzay/Hologram+Parkour.zip", "http://adf.ly/vDhaz", "1.8", "1");

allMaps[allMaps.length] = new Map("Platform Party", "game", "Survive as long as you can, through 4 new, fast-paced minigames, while trying to collect tokens. You can use tokens to purchase items in the shop, so you can get a higher score. You can also use tokens to customize different parts of the map!", "./MrGarretto's Minecraft Maps_files/platformparty.png", 29987, "http://download2029.mediafire.com/e2a21lca91rg/fnqb6j6b41z3loa/Platform+Party.zip", "http://adf.ly/uoJe2", "1.8", "1");

allMaps[allMaps.length] = new Map("Windfall 2", "game", "In this sequel to the reverse version of 'The Dropper', you must dodge, and land through 18 different customizable levels. With the newly added upper-dodge levels, and mid-air tokens, you can customize every aspect of the map, and purchase fun stuff in the shop!", "./MrGarretto's Minecraft Maps_files/windfall2.png", 26113, "http://download603.mediafire.com/b8bkdt58a1fg/qtd9bmw8i2igho2/Windfall+2+-+1.8.zip", "http://adf.ly/teQM2", "1.8", "1-2");

// End of maps

function showMaps(mapType, doTransition) {

	if (mapType === "categories") {
		$('#footer').css('visibility', 'hidden');
	}

	if (mapType === "all") {
		var mapsAmount = allMaps.length;
		if (allTransitionsComplete.check() === true && doTransition === true && selectedPage.check() !== "all") {
			allTransitionsComplete.change(false);
			selectedPage.change("all");
			$("#map-container").animate({
					marginLeft: "-100%",
					marginRight: "100%",
				}, 450, function() {
				$("#map-container").empty();
				$("#map-container").css({'margin-left' : '100%', 'margin-right' : '-100%'});
				for (i = 0; i < mapsAmount; i++) {
					$("#map-container").append('<div class="map-entry"><h3>'+ allMaps[i].mapName +'</h3><div class="players">'+ allMaps[i].mapPlayers +' player</div><img src="'+ allMaps[i].mapImageURL +'"><p>'+ allMaps[i].mapDesc +'</p><a href="'+ allMaps[i].mapAdflyURL +'"><center><span class="downloadbutton">'+ allMaps[i].mapVersion +' download</span></a></center></div>');
					
				}
				$("#map-container").animate({marginLeft: "-=100%", marginRight: "+=100%",}, 450, function() {
					allTransitionsComplete.change(true);
					$('#footer').css('visibility', 'visible');
				});
			});
		} else if (allTransitionsComplete.check() === true && doTransition === false) {
			for (i = 0; i < mapsAmount; i++) {
				$("#map-container").append('<div class="map-entry"><h3>'+ allMaps[i].mapName +'</h3><div class="players">'+ allMaps[i].mapPlayers +' player</div><img src="'+ allMaps[i].mapImageURL +'"><p>'+ allMaps[i].mapDesc +'</p><a href="'+ allMaps[i].mapAdflyURL +'"><center><span class="downloadbutton">'+ allMaps[i].mapVersion +' download</span></a></center></div>');
			}
		}
	} else if (mapType === "popular") {

		var mapsAmount = allMaps.length;
		var mapsPop = [];
		for (i = 0; i < mapsAmount; i++) {
			mapsPop[mapsPop.length] = i;
		}
		var mapsPopAmount = mapsPop.length;
		var currentBestDownloads = 0;
		var mapsPopFinal = [];
		var currentBestMap = 999;

		// This part below orders the maps in order from highest downloads to lowest, in the array 'mapsPopFinal'
		for (i = 0; i < mapsAmount; i++) {
			currentBestDownloads = 0;
			for (g = 0; g < mapsPopAmount; g++) {
				if (allMaps[mapsPop[g]].mapDownloads > currentBestDownloads || g === mapsAmount) {
					currentBestDownloads = allMaps[mapsPop[g]].mapDownloads;
					currentBestMap = mapsPop[g];
				}
			}
			mapsPopFinal[mapsPopFinal.length] = currentBestMap;
			mapsPop.splice(currentBestMap, 1);
			mapsPopAmount = mapsPop.length;
		}

		// The part that creates what actually shows up on the page, using the results from the sorting loops above
		if (allTransitionsComplete.check() === true && selectedPage.check() !== "pop") {
			allTransitionsComplete.change(false);
			selectedPage.change("pop");
			$("#map-container").animate({
					marginLeft: "-100%",
					marginRight: "100%",
				}, 450, function() {
				$("#map-container").empty();
				$("#map-container").css({'margin-left' : '100%', 'margin-right' : '-100%'});
				for (i = 0; i < mapsAmount; i++) {
					$("#map-container").append('<div class="map-entry"><h3>'+ allMaps[mapsPopFinal[i]].mapName +'</h3><div class="players">'+ allMaps[mapsPopFinal[i]].mapPlayers +' player</div><img src="'+ allMaps[mapsPopFinal[i]].mapImageURL +'"><p>'+ allMaps[mapsPopFinal[i]].mapDesc +'</p><a href="'+ allMaps[mapsPopFinal[i]].mapAdflyURL +'"><center><span class="downloadbutton">'+ allMaps[mapsPopFinal[i]].mapVersion +' download</span></a></center></div>');
				}
				$(".map-entry").css("margin-bottom", "45px");
				$("#map-container").animate({marginLeft: "-=100%", marginRight: "+=100%",}, 450, function() {
					allTransitionsComplete.change(true);
					$('#footer').css('visibility', 'visible');
				});
			});
		}

	} else if (mapType === "categories") {
		if (allTransitionsComplete.check() === true && selectedPage.check() !== "cat") {
			allTransitionsComplete.change(false);
			selectedPage.change("cat");
			$("#map-container").animate({
					marginLeft: "-100%",
					marginRight: "100%",
				}, 450, function() {
				$("#map-container").empty();
				$("#map-container").css({'margin-left' : '100%', 'margin-right' : '-100%'});
				$("#map-container").empty();
				$("#map-container").append('<center></div><div id="category-games" class="category">Games</div><div id="category-parkour" class="category">Parkour</div></center>');
				$(".map-entry").css("margin-bottom", "45px");
				$("#category-parkour").click(function() {
					showMapType("parkour");
				});
				$("#category-games").click(function() {
					showMapType("game");
				});
				$("#map-container").animate({marginLeft: "-=100%", marginRight: "+=100%",}, 450, function() {
					allTransitionsComplete.change(true);
				});
			});
		}
	} else if (mapType === "info") {
		if (allTransitionsComplete.check() === true && selectedPage.check() !== "info") {
			allTransitionsComplete.change(false);
			selectedPage.change("info");
			$("#map-container").animate({
					marginLeft: "-100%",
					marginRight: "100%",
				}, 450, function() {
				$("#map-container").empty();
				$("#map-container").css({'margin-left' : '100%', 'margin-right' : '-100%'});
				$("#map-container").empty();
				var infoContain = document.getElementById('info-container').innerHTML;
				$(".map-entry").css("margin-bottom", "45px");
				$("#map-container").append(infoContain);
				$("#map-container").animate({marginLeft: "-=100%", marginRight: "+=100%",}, 450, function() {
					allTransitionsComplete.change(true);
					$('#footer').css('visibility', 'visible');
				});
			});
		}
	}
	// End of info
}
