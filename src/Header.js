import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => <h1 className="topo">{children}</h1>;

Header.defaultProps = {
  children: 'RocketBook',
};

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
