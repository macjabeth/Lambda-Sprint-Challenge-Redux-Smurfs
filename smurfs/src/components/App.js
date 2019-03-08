import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';

import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

const App = () => (
  <React.Fragment>
    <GlobalStyles />

    <Header>
      <NavBar>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/smurf-form">Create</NavLink>
      </NavBar>
    </Header>

    <Main>
      <Route exact path="/" component={Smurfs} />
      <Route path="/smurf-form" component={SmurfForm} />
    </Main>
  </React.Fragment>
);

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    background-color: #75ABBC;
    color: #071013;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  background-color: #002a32;
`;

const NavBar = styled.nav`
  > a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    margin-left: 2rem;
    &.active {
      color: #00d6d6;
    }
  }
`;

const Main = styled.main`
  padding: 1rem;
`;

export default App;
