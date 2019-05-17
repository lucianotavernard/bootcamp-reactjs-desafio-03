import React from 'react';
import PropTypes from 'prop-types';

import { Image } from './styles';

const UserPin = ({ source }) => <Image src={source} />;

UserPin.propTypes = {
  source: PropTypes.string.isRequired,
};

export default UserPin;
