import React, { Component, PropTypes } from 'react';

export default class Badge extends Component {
  static propTypes = {
    /**
     * The poke type.
     * FIXME: Array is duplicated in PokeCard. Create an exportable constant.
     */
    type: PropTypes.oneOf([
      'fairy',
      'ghost',
      'fire',
      'water',
      'psychic',
      'bug',
      'normal',
    ]),
  };

  render() {
    const { type } = this.props;
    return <div>{type}</div>
  }
}
