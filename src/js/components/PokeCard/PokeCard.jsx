import React, { Component, PropTypes } from 'react';

import POKE_TYPES from '../../constants/PokeTypes';
import Badge from '../Badge/Badge';

export default class PokeCard extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    level: PropTypes.number.isRequired,
    moves: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.oneOf(POKE_TYPES),
    })),
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(POKE_TYPES).isRequired,
  };

  static defaultProps = {
    imageUrl: 'http://goo.gl/pCPkuN',
    moves: [],
  };

  renderMoves() {
    const { moves } = this.props;

    if (moves.length === 0) {
      return <div>No known moves</div>;
    }

    moves.forEach((move) => {
      return (
        <div key={move.name}>
          <div>{move.name}</div>
          <Badge type={move.type} />
        </div>
      );
    });
  }

  render() {
    const {
      description,
      level,
      name,
      imageUrl,
      type
    } = this.props;

    return (
      <div>
        <div className="header">
          <img
            src={imageUrl}
            alt="" />
          <div className="level">lvl {level}</div>
        </div>
        <div className="summary">
          <h1>{name}</h1><Badge type={type} />
          <p>{description}</p>
        </div>
        <div className="moves">
          <h2>Moves</h2>
          {this.renderMoves()}
        </div>
      </div>
    );
  }
}