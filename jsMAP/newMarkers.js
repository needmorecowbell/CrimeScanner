function addMarkers(map){
    var info = new Array();
    var markers = new Array();
    var color = new Array();
    var i=0;
        $.get('log.txt', {}, function (txt){
          var lines = txt.split('\n');
 
          for (i=0; i<lines.length; i++ ){
              
              var data = lines[i].split(";");
              
              //"incident#","occurred","reported","nature","offenses","location","disposition"
              
              /*if (data[6].includes("Closed")){
               color[i] = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
              }
              else{
                color[i] = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
              }*/
              var geocoder = new google.maps.Geocoder();
              
              
              var address = data[5] + ", University Park, PA";
              
              geocoder.geocode({'address': address}, function(results, status) {
                // console.log(results[0].geometry.location);
                
                if (status === 'OK') {
                    markers[i] = new google.maps.Marker({
                      position: results[0].geometry.location,
                      map: this.map,
                      icon: '//maps.google.com/mapfiles/ms/icons/red-dot.png',
                      
                    });
                    
                    console.log(i);
                    
                  //if (data[6].includes("Closed")){
                  //   markers[i].setIcon('//maps.google.com/mapfiles/ms/icons/green-dot.png');
                  // }
                  // else{
                  //   markers[i].setIcon('//maps.google.com/mapfiles/ms/icons/red-dot.png');
                  // }
                }
              });
              
                  // console.log(markers[i]);

        
              }
          });
        
        
}