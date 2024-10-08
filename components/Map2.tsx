// @ts-nocheck
"use client";

import React from 'react';
import Map, {Source, Layer} from 'react-map-gl';
//import ReactMapGL, { ScaleControl, NavigationControl, MapRef, }  from "react-map-gl"
import {useRef} from 'react';
import {useState, useEffect, useMemo, useCallback} from 'react';
//import type FillLayerSpecification from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import JurisdictionJson from "../viz/data.json"



function FirstMap() {

    const VIEW_STATE =  {
        longitude: -105.45304562833229,
        latitude: 39.327800750504494,
        zoom: 6,
        bearing: 0,
        pitch: 20,
      }
      

    
    const LAT = 39.327800750504494
    const LONG = -105.45304562833229

    
    const INITIAL_VIEW_STATE  = VIEW_STATE

    const [year, setYear] = useState(2015);
    const [allData, setAllData] = useState(null);

    useEffect(() => {
      /* global fetch */
      fetch(
        'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
      )
        .then(resp => resp.json())
        .then(json => setAllData(json))
        .catch(err => console.error('Could not load data', err)); // eslint-disable-line
    }, []);

    const states = ['New York', 'Pennsylvania'];
    const colors = ['#F0F', '#FF0'];
    const statesAndColors = [1, '#F0F', 2, '#FF0'];



    const dataLayer = {
      id: 'state-fills',
      type: 'fill',
      source: 'states',
      layout: {},
      paint: {
          'fill-color': '#627BC1',
          'fill-opacity': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              1,
              0.5
          ]
      }
  }

    

    const mapRef = useRef(null);

    //const JurisdictionData = JSON.parse(JSON.stringify(JurisdictionJson)); 

    //const filteredJurisdictions = JurisdictionData.filter(e => e.value === SelectedJurisdiction);

    //setFilteredJurisdictionsData(filteredJurisdictions)





  




    return (
        <div className=' '>
        <div className=' overflow-hidden'>



        < Map     
            reuseMaps
            initialViewState={INITIAL_VIEW_STATE}
            mapStyle={"mapbox://styles/branden-dupont/ckt0h6w5800vb18qq9lniiuoc"}
            mapboxAccessToken={'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2x5b2pscW1kMGgwZjJpcHdtMDhhZjg3ZyJ9.jv_6ksQROEiuvXdl6dwoGw'}
            ref={mapRef}
            style={{width:"100%", height:800}}
    
 
            
            >
                      <Source type="geojson" data={allData}>
          <Layer {...dataLayer} />
        </Source>
                              <div className='flex justify-end p-6'>
               <div className='bg-primary-500  text-ywhite min-h-[220px] w-[400px]  p-6 z-40 '>
                <div className="font-bold text-2xl text-ywhite mb-2">
                Colorado Judicial District 
                </div>
                <div><hr/></div>
                
                  
   
                </div>
                
               

                </div>
               </Map >

                <div className='flex justify-end p-6'>

                
               

                </div>
  
        
      </div>
      </div>
    );
  }

export default FirstMap