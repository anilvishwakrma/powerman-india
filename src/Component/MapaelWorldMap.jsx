// MapaelWorldMap.jsx
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'raphael';
import 'jquery-mapael';
import 'jquery-mapael/js/maps/world_countries';
import './MapaelWorldMap.css'; // make sure this includes .mapTooltip

const MapaelWorldMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            $(mapRef.current).addClass('map');

            $('.js-map-container').mapael({
                map: {
                    name: 'world_countries',
                },
                areas: {
                    IN: {
                        attrs: { fill: '#ff0000' },
                        tooltip: { content: 'India' },
                    },
                    PK: {
                        attrs: { fill: '#ff0000' },
                        tooltip: { content: 'Pakistan' },
                    },
                    NP: {
                        attrs: { fill: '#ff0000' },
                        tooltip: { content: 'Nepal' },
                    },
                    US: {
                        attrs: { fill: '#ff0000' },
                        tooltip: { content: 'United States' },
                    },
                    CN: {
                        attrs: { fill: '#ff0000' },
                        tooltip: { content: 'China' },
                    },
                    AU: {
                        attrs: { fill: '#ff0000' },
                        tooltip: { content: 'Australia' },
                    },
                },

            });
        }
    }, []);

    return (
        <div className="container">
            <div className="office__wrapper-map wrapper-">
                <div className="office__map-wrapper map-container js-map-container">
                    <div className="office__map" ref={mapRef}></div>
                </div>
            </div>
        </div>
    );
};

export default MapaelWorldMap;
