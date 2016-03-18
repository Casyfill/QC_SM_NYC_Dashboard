# Development log, extended


## Zipcode map
[data source](https://data.cityofnewyork.us/Business/Zip-Code-Boundaries/i8iw-xf4u)

#### Install topojson:
sudo npm install -g topojson

#### Shapefile to topojson:
topojson -o datum/zips.topojson -s -- data/ZIP_CODE_040114/ZIP_CODE_040114.shp
