function addMarkers(map){
    var info = new Array();
    var markers = new Array();
    var i=0;
        $.get('log1.txt', {}, function (txt){
          var lines = txt.split('\n');
          
          var i;
          for (i=0; i<lines.length-1; i++ ){
              var data = lines[i].split(";");
              console.log(data[5]);
              var color;
              if (strcmp(data[6], "  Closed  ")==0){
                  color = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
              }
              else{
                  color = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
              }
              var geocoder = new google.maps.Geocoder();
              var address = data[5] + ", University Park, PA";
              geocoder.geocode({'address': address}, function(results, status) {
                console.log(results[0].geometry.location);
          if (status === 'OK') {
              markers[i] = new google.maps.Marker({
                position: results[0].geometry.location,
                map: this.map,
                icon: color
             });
          }
              });
              }
          });
        
        
}

function strcmp(a, b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}