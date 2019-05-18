import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactMapGL, { Marker } from 'react-map-gl';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as UserCreators } from '../../store/ducks/users';

// import { Container } from './styles';

import UserPin from '../UserPin';

class Map extends Component {
  state = {
    mapboxApiAccessToken:
      'pk.eyJ1IjoibHVjaWFub3RhdmVybmFyZCIsImEiOiJjanZuMTJzdGsxajZxNDN1aXZ1bjliYWZ2In0.RLhO0SUfDxfWNdfUUnoFLw',
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -5.81622313,
      longitude: -35.21520224,
      zoom: 14,
    },
  };

  static propTypes = {
    users: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          username: PropTypes.string,
          avatar: PropTypes.string,
          coordenates: PropTypes.shape({
            latitude: PropTypes.number,
            longitude: PropTypes.number,
          }),
        }),
      ).isRequired,
      loading: PropTypes.bool,
    }).isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleViewportChange = (viewport) => {
    this.setState({ viewport });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    const { addUserRequest } = this.props;

    const username = window.prompt('Digite o username');

    if (!username) return;

    addUserRequest({
      username,
      coordenates: {
        latitude,
        longitude,
      },
    });
  };

  render() {
    const { viewport, mapboxApiAccessToken } = this.state;
    const { users } = this.props;

    return (
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onClick={this.handleMapClick}
        onViewportChange={this.handleViewportChange}
        mapboxApiAccessToken={mapboxApiAccessToken}
      >
        {users.data.map(user => (
          <Marker
            key={user.id}
            latitude={user.coordenates.latitude}
            longitude={user.coordenates.longitude}
          >
            <UserPin source={user.avatar} />
          </Marker>
        ))}
      </ReactMapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
