var de;
if (! de) { de = {}; }
if (! de.bender) { de.bender = {}; }
if (! de.bender.radar ) { de.bender.radar = {}; }

//
// like on-document-ready but for confluence-pages
$(document).ready(function () {
    de.bender.prepareSage();
    radar = new TechRadar(_.first(radar));
    radar.create();
    de.bender.radar =radar;
});


de.bender.radars = []; // init with an empty array

//noinspection JSJQueryEfficiency
de.bender.prepareSage = function() {
    if ($('help').length === 0) { $('#main').append('<div id="help">'); }
    if ($('radar').length === 0) { $("#main").append('<div id="radar">'); }
    if ($('items0').length === 0) { $("#main").append('<div id="items0">'); }
    if ($('items1').length === 0) { $("#main").append('<div id="items1">'); }
    if ($('history').length === 0) { $("#main").append('<div id="history">'); }
};

de.bender.clearStage = function() {
    if ($('#help').length > 0) { $('#help').remove(); }
    if ($('#radar').length > 0) { $('#radar').remove(); }
    if ($('#items0').length > 0) { $('#items0').remove(); }
    if ($('#items1').length > 0) { $('#items1').remove(); }
    if ($('#history').length > 0) { $('#history').remove(); }
};

de.bender.showRadar = function(indexOfRadarToBeShown) {
    de.bender.clearStage();
    de.bender.prepareSage();
    
    document.title = de.bender.radars[indexOfRadarToBeShown].title;
    $('#title-text').text(de.bender.radars[indexOfRadarToBeShown].title);
    radar = new TechRadar(de.bender.radars[indexOfRadarToBeShown]);
    radar.create();
    de.bender.radar =radar;
};
