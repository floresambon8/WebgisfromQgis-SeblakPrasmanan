ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WilayahKotaCimahi_1 = new ol.format.GeoJSON();
var features_WilayahKotaCimahi_1 = format_WilayahKotaCimahi_1.readFeatures(json_WilayahKotaCimahi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahKotaCimahi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahKotaCimahi_1.addFeatures(features_WilayahKotaCimahi_1);
var lyr_WilayahKotaCimahi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahKotaCimahi_1, 
                style: style_WilayahKotaCimahi_1,
                popuplayertitle: "Wilayah Kota Cimahi",
                interactive: false,
                    title: '<img src="styles/legend/WilayahKotaCimahi_1.png" /> Wilayah Kota Cimahi'
                });
var format_JalanKotaCimahi_2 = new ol.format.GeoJSON();
var features_JalanKotaCimahi_2 = format_JalanKotaCimahi_2.readFeatures(json_JalanKotaCimahi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKotaCimahi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKotaCimahi_2.addFeatures(features_JalanKotaCimahi_2);
var lyr_JalanKotaCimahi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKotaCimahi_2, 
                style: style_JalanKotaCimahi_2,
                popuplayertitle: "Jalan Kota Cimahi",
                interactive: false,
                    title: '<img src="styles/legend/JalanKotaCimahi_2.png" /> Jalan Kota Cimahi'
                });
var format_TitikOutlet_3 = new ol.format.GeoJSON();
var features_TitikOutlet_3 = format_TitikOutlet_3.readFeatures(json_TitikOutlet_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikOutlet_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikOutlet_3.addFeatures(features_TitikOutlet_3);
var lyr_TitikOutlet_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikOutlet_3, 
                style: style_TitikOutlet_3,
                popuplayertitle: "TitikOutlet",
                interactive: true,
                    title: '<img src="styles/legend/TitikOutlet_3.png" /> TitikOutlet'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_WilayahKotaCimahi_1.setVisible(true);lyr_JalanKotaCimahi_2.setVisible(true);lyr_TitikOutlet_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WilayahKotaCimahi_1,lyr_JalanKotaCimahi_2,lyr_TitikOutlet_3];
lyr_WilayahKotaCimahi_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_JalanKotaCimahi_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_TitikOutlet_3.set('fieldAliases', {'Id': 'Id', 'NamaOutlet': 'NamaOutlet', 'RatingGmap': 'RatingGmap', });
lyr_WilayahKotaCimahi_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_JalanKotaCimahi_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_TitikOutlet_3.set('fieldImages', {'Id': 'Range', 'NamaOutlet': 'TextEdit', 'RatingGmap': 'TextEdit', });
lyr_WilayahKotaCimahi_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_JalanKotaCimahi_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LEN': 'no label', });
lyr_TitikOutlet_3.set('fieldLabels', {'Id': 'no label', 'NamaOutlet': 'inline label - always visible', 'RatingGmap': 'inline label - always visible', });
lyr_TitikOutlet_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});