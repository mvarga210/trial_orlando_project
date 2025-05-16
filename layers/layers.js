ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9244275.934536, 3255455.673439, -9005207.618144, 3430953.077451]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_testingtl_2010_12_zcta510_1 = new ol.format.GeoJSON();
var features_testingtl_2010_12_zcta510_1 = format_testingtl_2010_12_zcta510_1.readFeatures(json_testingtl_2010_12_zcta510_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_testingtl_2010_12_zcta510_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_testingtl_2010_12_zcta510_1.addFeatures(features_testingtl_2010_12_zcta510_1);
var lyr_testingtl_2010_12_zcta510_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_testingtl_2010_12_zcta510_1, 
                style: style_testingtl_2010_12_zcta510_1,
                popuplayertitle: 'testing — tl_2010_12_zcta510',
                interactive: true,
    title: 'testing — tl_2010_12_zcta510<br />\
    <img src="styles/legend/testingtl_2010_12_zcta510_1_0.png" /> <br />\
    <img src="styles/legend/testingtl_2010_12_zcta510_1_1.png" /> <br />\
    <img src="styles/legend/testingtl_2010_12_zcta510_1_2.png" /> <br />\
    <img src="styles/legend/testingtl_2010_12_zcta510_1_3.png" /> <br />\
    <img src="styles/legend/testingtl_2010_12_zcta510_1_4.png" /> <br />\
    <img src="styles/legend/testingtl_2010_12_zcta510_1_5.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_testingtl_2010_12_zcta510_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_testingtl_2010_12_zcta510_1];
lyr_testingtl_2010_12_zcta510_1.set('fieldAliases', {'STATEFP10': 'STATEFP10', 'ZCTA5CE10': 'ZCTA5CE10', 'GEOID10': 'GEOID10', 'CLASSFP10': 'CLASSFP10', 'MTFCC10': 'MTFCC10', 'FUNCSTAT10': 'FUNCSTAT10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'PARTFLG10': 'PARTFLG10', 'Homes Passed DMA': 'Homes Passed DMA', 'Zone': 'Zone', 'Homes Passed Zip': 'Homes Passed Zip', 'Connected': 'Connected', 'Passings': 'Passings', 'Penetration %': 'Penetration %', });
lyr_testingtl_2010_12_zcta510_1.set('fieldImages', {'STATEFP10': 'TextEdit', 'ZCTA5CE10': 'TextEdit', 'GEOID10': 'TextEdit', 'CLASSFP10': 'TextEdit', 'MTFCC10': 'TextEdit', 'FUNCSTAT10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', 'INTPTLAT10': 'TextEdit', 'INTPTLON10': 'TextEdit', 'PARTFLG10': 'TextEdit', 'Homes Passed DMA': 'TextEdit', 'Zone': 'TextEdit', 'Homes Passed Zip': 'TextEdit', 'Connected': 'TextEdit', 'Passings': 'TextEdit', 'Penetration %': 'TextEdit', });
lyr_testingtl_2010_12_zcta510_1.set('fieldLabels', {'STATEFP10': 'hidden field', 'ZCTA5CE10': 'header label - always visible', 'GEOID10': 'hidden field', 'CLASSFP10': 'hidden field', 'MTFCC10': 'hidden field', 'FUNCSTAT10': 'hidden field', 'ALAND10': 'hidden field', 'AWATER10': 'hidden field', 'INTPTLAT10': 'hidden field', 'INTPTLON10': 'hidden field', 'PARTFLG10': 'hidden field', 'Homes Passed DMA': 'header label - always visible', 'Zone': 'header label - always visible', 'Homes Passed Zip': 'header label - always visible', 'Connected': 'header label - always visible', 'Passings': 'header label - always visible', 'Penetration %': 'header label - always visible', });
lyr_testingtl_2010_12_zcta510_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});