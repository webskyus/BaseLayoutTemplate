window.addEventListener('DOMContentLoaded', function () {
    'use strict';
		
		// folder alias static for dev, assets for prodaction start
		// const folderAlias = './static';
		const folderAlias = '../assets';
    const map = document.querySelector('#map');
    const mapAdd = document.querySelector('#map_add');

    if (map !== null) {
        initMap();
    }

    if (mapAdd !== null) {
        initAddMap();
    }

    function initMap() {
        let capital_cords = {
            lat: 40.409264,
            lng: 49.867092
        };
        const map = new google.maps.Map(document.getElementById('map'), {
            center: capital_cords,
            zoom: 13,
            mapTypeId: 'roadmap',
        });
        let defaultMarker = new google.maps.Marker({
            position: capital_cords,
            map: map,
            icon: `${folderAlias}/img/general/icon/location.svg`
        });
        // Create the search box and link it to the UI element.
        const input = document.getElementById('search_input');
        const searchBox = new google.maps.places.SearchBox(input);
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', () => {
            searchBox.setBounds(map.getBounds());
        });
        let markers = [];
        // [START maps_places_searchbox_getplaces]
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', () => {
            defaultMarker.setMap(null);
            const places = searchBox.getPlaces();
            if (places.length == 0) {
                return;
            }
            // Clear out the old markers.
            markers.forEach((marker) => {
                marker.setMap(null);
            });
            markers = [];
            // For each place, get the icon, name and location.
            const bounds = new google.maps.LatLngBounds();
            places.forEach((place) => {
                if (!place.geometry || !place.geometry.location) {
                    console.log('Returned place contains no geometry');
                    return;
                }
                const icon = {
                    url: `${folderAlias}/img/general/icon/location.svg`,
                };
                // Create a marker for each place.
                markers.push(
                    new google.maps.Marker({
                        map,
                        icon,
                        title: place.name,
                        position: place.geometry.location,
                    })
                );

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
        // [END maps_places_searchbox_getplaces]
    }

    function initAddMap() {
        // start latLng
        let myLatlng = new google.maps.LatLng(40.410519, 49.867317);

        // styles for map
        let styleArr = [
            {
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#ebe3cd'
                    }
                ]
            },
            {
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#523735'
                    }
                ]
            },
            {
                'elementType': 'labels.text.stroke',
                'stylers': [
                    {
                        'color': '#f5f1e6'
                    }
                ]
            },
            {
                'featureType': 'administrative',
                'elementType': 'geometry.stroke',
                'stylers': [
                    {
                        'color': '#c9b2a6'
                    }
                ]
            },
            {
                'featureType': 'administrative.land_parcel',
                'elementType': 'geometry.stroke',
                'stylers': [
                    {
                        'color': '#dcd2be'
                    }
                ]
            },
            {
                'featureType': 'administrative.land_parcel',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#ae9e90'
                    }
                ]
            },
            {
                'featureType': 'landscape.natural',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#dfd2ae'
                    }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#dfd2ae'
                    }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#93817c'
                    }
                ]
            },
            {
                'featureType': 'poi.park',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#a5b076'
                    }
                ]
            },
            {
                'featureType': 'poi.park',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#447530'
                    }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#f5f1e6'
                    }
                ]
            },
            {
                'featureType': 'road.arterial',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#fdfcf8'
                    }
                ]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#f8c967'
                    }
                ]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'geometry.stroke',
                'stylers': [
                    {
                        'color': '#e9bc62'
                    }
                ]
            },
            {
                'featureType': 'road.highway.controlled_access',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#e98d58'
                    }
                ]
            },
            {
                'featureType': 'road.highway.controlled_access',
                'elementType': 'geometry.stroke',
                'stylers': [
                    {
                        'color': '#db8555'
                    }
                ]
            },
            {
                'featureType': 'road.local',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#806b63'
                    }
                ]
            },
            {
                'featureType': 'transit.line',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#dfd2ae'
                    }
                ]
            },
            {
                'featureType': 'transit.line',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#8f7d77'
                    }
                ]
            },
            {
                'featureType': 'transit.line',
                'elementType': 'labels.text.stroke',
                'stylers': [
                    {
                        'color': '#ebe3cd'
                    }
                ]
            },
            {
                'featureType': 'transit.station',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#dfd2ae'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#b9d3c2'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#92998d'
                    }
                ]
            }
        ];

        // map option
        let mapOptions = {
            zoom: 12,
            center: myLatlng
        };

        // init map
        let map = new google.maps.Map(document.getElementById('map_add'), mapOptions);

        // add marker
        let marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: {
                url: `${folderAlias}/img/general/icon/location.svg`,
                scaledSize: new google.maps.Size(65, 65)
            }
        });

        // add new marker when click
        google.maps.event.addListener(map, 'click', function (event) {

            // Get the location that the user clicked
            let clickedLocation = event.latLng;


            // If the marker hasn't been added
            if (marker === false) {
                // Create the marker.
                marker = new google.maps.Marker({
                    position: clickedLocation,
                    map: map,
                    draggable: true // make it draggable
                });

                // Listen for drag events!
                google.maps.event.addListener(marker, 'dragend', function (event) {
                    markerLocation();
                });
            } else {

                // Marker has already been added, so just change its location.
                marker.setPosition(clickedLocation);
            }

            // Get the marker's location.
            markerLocation();
        });

        function markerLocation() {
            // Get location.
            let currentLocation = marker.getPosition();
            let input = document.querySelector('[data-js-clinics-location]');

            // add latlng to input
            input.value = `${currentLocation.lat()},${currentLocation.lng()}`;
        }
    }


});
