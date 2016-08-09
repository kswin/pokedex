import React, { Component, PropTypes } from 'react';
import POKE_TYPES from '../../constants/PokeTypes';

export default class Badge extends Component {
  static propTypes = {
    type: PropTypes.oneOf(POKE_TYPES),
  };

  render() {
    const { type } = this.props;
    return <div>{type}</div>
  }
}
