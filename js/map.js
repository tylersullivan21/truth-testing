 // Initialize and add the map
 function initMap() {
        
    /*



    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    var sydney = {lat:-33.8688, lng:151.2093};

    // The map, centered at Uluru
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: uluru});
    
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker2 = new google.maps.Marker({position: sydney, map: map, title:"This is Sydney",icon: iconBase + 'parking_lot_maps.png'});
    
    
    
    */

    var newnansville = {lat:29.8051, lng:-82.4770};
    var newnansville2 = {lat:29.8000, lng:-82.4800};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: newnansville});

    var marker1 = new google.maps.Marker({position: newnansville, map: map});
    var marker2 = new google.maps.Marker({position: newnansville2, map: map});

    var contentString2 = '<div class="marker-info"><div class="marker-text"><h2> Location Title </h2>Location description : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><div class="marker-image"><a href="details.html"> <img src="img/Intersection 23.png"/></a></div></div>';

        var infowindow2 = new google.maps.InfoWindow({
            content: contentString2
          });

        marker2.addListener('click', function() {
            infowindow2.open(map, marker2);
          });








}