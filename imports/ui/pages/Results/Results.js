import React from 'react';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../../components/ResultsCard/ResultsCard';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { compose, withProps, withHandlers, withState } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { MAP } from 'react-google-maps/lib/constants';

const refs = {
  map: undefined
};

const Results = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCsLQmoYlsOqd5yWQpnkbwbpa76UmYwz8E&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: '500px' }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  withState('places', 'updatePlaces', '', 'setResults'),
  withHandlers({
    onMapMounted: () => ref => {
      refs.map = ref;
    },
    fetchPlaces: ({ updatePlaces }) => () => {
      const bounds = refs.map.getBounds();
      const service = new google.maps.places.PlacesService(
        refs.map.context[MAP]
      );
      const request = {
        bounds: bounds,
        keyword: '(thai) OR (indian)',
        type: ['restaurant']
        // openNow: true
      };
      service.nearbySearch(request, (results, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          // console.log(results);
          updatePlaces(results);
        }
      });
    }
  })
)(props => {
  const query = props.location.state ? props.location.state.query : '';
  const openNow = props.location.state ? props.location.state.openNow : true;
  const price = props.location.state ? props.location.state.price : 0;
  console.log('QUERY, OPENNOW, PRICE', query, openNow, price);
  return (
    <Grid container>
      <Grid item>
        <GoogleMap
          onTilesLoaded={props.fetchPlaces}
          ref={props.onMapMounted}
          onBoundsChanged={props.fetchPlaces}
          defaultZoom={15}
          defaultCenter={{ lat: 49.2632597, lng: -123.138 }}
        >
          {props.places &&
            props.places.map((place, i) => (
              <Marker
                key={i}
                position={{
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng()
                }}
              />
            ))}
        </GoogleMap>
      </Grid>
      <Grid>{props.places && <MediaCard places={props.places} />}</Grid>
    </Grid>
  );
});

export default withStyles(styles)(Results);
