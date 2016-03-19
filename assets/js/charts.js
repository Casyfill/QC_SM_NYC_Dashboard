// var queue = d3_queue.queue();
console.log('Charts fired')
console.log('v proj2.11')

d3_queue.queue()
  .defer(d3.json, "assets/datum/zips.json")
  .await(makeGraphs);

// add network
function makeGraphs(error, zips) {
  console.log('makeGraphs fired')
  makeMap(error, zips);
  // add other charts etc.
};

function makeMap(error, zips) {
  console.log('makeMap fired')
  // var zips = zips;

  var mapWidth = 700;
  var mapHeight = 708;

  zipsFeatures = topojson.feature(zips, zips.objects.zips).features;


  var projection = d3.geo.mercator()
    .center([-73.94, 40.70])
    .scale(50000)
    .translate([(mapWidth) / 2, (mapHeight) / 2]);

  var path = d3.geo.path()
      .projection(projection);

  var mapSvg = d3.select("#mapBlock")
    .append("svg")
    .attr("width", mapWidth)
    .attr("height", mapHeight);

  mapSvg
    .attr("id", "map")
    .selectAll(".zip")
    .data(topojson.feature(zips, zips.objects.zips).features)
    .enter().append("path")
    .attr("class", "zip")
    .attr("id", function(d) {
      return "zip " + d.zip;
    })
    .attr("d", path)





}
