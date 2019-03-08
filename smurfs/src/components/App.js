import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

const App = ({ status, error }) =>
  error ? (
    <p>{error}</p>
  ) : status === 'fetching smurfs' ? (
    <LoadingWrapper>
      <Loader type="Puff" color="#00BFFF" height="100" width="100" />
    </LoadingWrapper>
  ) : (
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

const mapStateToProps = ({ status, error }) => ({
  status,
  error
});

export default connect(mapStateToProps)(App);
