import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

class Map extends Component {

    componentDidMount(){
        mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaWdvIiwiYSI6ImNrZnByNXFqeDA4MGczNXJwOGpndHB3Z3UifQ.REOAGVDJ7vLNzHqa78ugdw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [4.467660, 50.418366],
            zoom: 2
        });

        var homePopup = new mapboxgl.Popup();
        homePopup.setHTML("<h2>My current home</h2><p>Been living there for quite a while now, wouldn't recommend it.</p>");
        new mapboxgl.Marker()
        .setLngLat([4.467660, 50.418366])
        .setPopup(homePopup)
        .addTo(map);


        var tokyoPopup = new mapboxgl.Popup();
        tokyoPopup.setHTML("<h2>My dream location</h2><p>If the event present itself, I want to live in Tokyo.</p>");
        new mapboxgl.Marker()
        .setLngLat([139.798698, 35.689182])
        .setPopup(tokyoPopup)
        .addTo(map);

        map.on('load', () => {
            map.addSource('route',{
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type' : 'LineString',
                        'coordinates' : [
                            [4.467660, 50.418366],
                            [139.798698, 35.689182]
                        ]
                    }
                }
            });
            map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                'line-join': 'round',
                'line-cap': 'round'
                },
                'paint': {
                'line-color': '#888',
                'line-width': 8
                }
            });
        });
        
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Map;