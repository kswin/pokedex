import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './PokeApp.scss';
import { PokeCard } from '../../components';
import * as PokeActions from '../../actions/PokeActions';

class PokeApp extends Component {
  static propTypes = {
    pokedex: PropTypes.object,
    actions: PropTypes.object,
  }

  componentWillMount() {
    const { actions } = this.props;
    actions.loadPokemon();
  }

  renderPokeCards() {
    const { pokedex } = this.props;
    return pokedex.pokemon.map((poke) => {
      return <PokeCard key={poke.name} {...poke} />;
    });
  }

  render () {
    const { pokedex } = this.props;

    if (pokedex.loading) {
      return <div>Loading...</div>
    }

    return <div className="grid">{this.renderPokeCards()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    pokedex: state.pokedex,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PokeActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokeApp);
