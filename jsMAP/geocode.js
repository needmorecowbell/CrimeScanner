
$.get(filename, function(xml){
		$(xml).find("marker").each(function(){
			//get name and address of incident
			var name = $(this).find('name').text();
			var address = $(this).find('address').text();
			//
			L.mapbox.accessToken = 'pk.eyJ1IjoibmVlZG1vcmVjb3diZWxsIiwiYSI6ImNpdG5yczZ4czAyNDQyenNidno2ODRuM2MifQ.HoPc2pAFQIrmx2iMah8tTQ';
            var geocoder = L.mapbox.geocoder('mapbox.places');
			geocoder.query(address, inSQL);
		}
			
function inSQL(err, data){
    
}
