 $.getJSON('data/searchData.json', function(data) {
var logTime = {};

function searchEngine(searchString, searchKey, searchData) {
	logTime.start = Date.now();
	var result = [];

	$.each(searchData, function(i, item) {
		//console.log(this[searchKey].indexOf(searchString));
		if (this[searchKey].toLowerCase().indexOf(searchString) >= 0) {
			result.push(item);
		}

	});
	return result;
	$.GridFx()
}


$("#searchText, #searchField").on("change paste keyup", function() {
	var searchText = $("#searchText").val().toLowerCase();
	var searchField = $("#searchField").val();
	console.log(searchField);
	//console.log(searchEngine(searchText,'artist',data));
	var searchResult = searchEngine(searchText, searchField, data);
	var template = '{{ #. }}\
					<div class="search-result grid__item" data-artist="{{artist}}" data-tour="{{tour}}">\
						<a href="{{img}}" class="img-wrap">\
							<div class="search-item flex-row">\
								<img class="artwork" src="{{img}}">\
								<div class="flex-column">\
									<h3 class="search-name">{{artist}}</h1>\
									<h4 class="search-tour">{{tour}}</h2>\
								</div>\
							</div>\
                            <div class="description description--grid">\
                                <h6 class="item-sub">{{tour}}</h6>\
                                <h3 class="item-heading">{{artist}}</h3>\
                                <div class="details">\
	                                <ul>\
	                                    <li onclick="FWDRL.show(\'{{lbid}}colRadio\', 0);"><div class="cat-icon"><img class="mic" src="images/icons8-Microphone-100-white.png"></div></li>\
	                                    <li onclick="FWDRL.show(\'{{lbid}}colTV\', 0);"><div class="cat-icon"><img class="monitor" src="images/icons8-Monitor-100-white.png"></div></li>\
	                                    <li onclick="FWDRL.show(\'{{lbid}}colArt\', 0);"><div class="cat-icon"><img class="resolution" src="images/icons8-Resolution-100-white.png"></div></li>\
	                                </ul>\
                                </div>\
                                <div class="item-list">\
                                    <ul>\
                                        <li>\
                                            <ul id="{{lbid}}colRadio" class="flex-col">\
                                            {{#audio}}\
                                                <li id="audio{{type}}" onclick="FWDRL.show(\'{{lbid}}colRadio\', {{index}});" data-url="{{url}}"  data-thumbnail-path="{{cover}}" data-width="600"><h4><i class="material-icons">mic</i> {{type}}</h4></li>\
                                            {{/audio}}\
                                            </ul>\
                                        </li>\
                                        <li>\
                                            <ul id="{{lbid}}colTV" class="flex-col">\
                                            {{#video}}\
                                                <li id="video{{type}}" onclick="FWDRL.show(\'{{lbid}}colTV\', {{index}});" data-url="{{url}}" data-poster-path="{{cover}}" data-thumbnail-path="{{cover}}" data-width="800" data-height="450"><h4><i class="material-icons">play_circle_outline</i> {{type}}</h4><p class="description"></p></li>\
                                            {{/video}}\
                                            </ul>\
                                        </li>\
                                        <li>\
                                            <ul id="{{lbid}}colArt" class="flex-col">\
                                            {{#artwork}}\
                                                <li id="artwork{{type}}" onclick="FWDRL.show(\'{{lbid}}colArt\', {{index}});" data-url="{{url}}" data-thumbnail-path="{{url}}"><h4><i class="material-icons">create</i> {{type}}</h4></li>\
                                            {{/artwork}}\
                                            </ul>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                        </a>\
					</div>\
					{{ /. }}';
	var html = Mustache.to_html(template, searchResult);
	$("#output").html(html);
});
});