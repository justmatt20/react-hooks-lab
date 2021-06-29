import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';

export default (
  <Switch>
    <Route path="/pokemon/:name" component={Pokemon} />
    <Route exact path="/" component={PokemonList} />
  </Switch>
)