import React from 'react';
import PropTypes from 'prop-types';

import { faTimesCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as UserCreators } from '../../store/ducks/users';

import { Aside } from './styles';

const Sidebar = ({ users, totalUsers, removeUser }) => (
  <Aside>
    <ul>
      {totalUsers === 0 && (
        <li>
          <p className="msg-info">Não há nenhum usuário registrado :(</p>
        </li>
      )}
      {users.data.map(user => (
        <li key={user.id}>
          <img src={user.avatar} alt={user.name} />

          <div className="info">
            <h4>{user.name}</h4>
            <p>{user.username}</p>
          </div>

          <button type="button" onClick={() => removeUser(user.id)}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>

          <a href={user.url}>
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </li>
      ))}
    </ul>
  </Aside>
);

Sidebar.propTypes = {
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
  totalUsers: PropTypes.number.isRequired,
  removeUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
  totalUsers: state.users.data.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
