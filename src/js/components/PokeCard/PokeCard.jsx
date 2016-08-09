import React, { Component, PropTypes } from 'react';
import { uniqueId } from 'lodash';

import './PokeCard.scss';

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

    return moves.map(({ name, type }) => {
      return (
        <div key={uniqueId(`${name}_`)}>
          <div>{name}</div>
          <Badge type={type} />
        </div>
      );
    });
  }

  render() {
    const { description, level, name, imageUrl, type } = this.props;

    return (
      <div className="pokeCard">
        <div className="pokeCard-row pokeCard-header">
          <div className="poke-pic-container">
            <img src={imageUrl} alt="" />
          </div>
          <div className="pokeCard-row level-container">
            <span className="level-label">lvl</span>
            <span className="level-number">{level}</span>
          </div>
        </div>
        <div className="pokeCard-row summary">
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
