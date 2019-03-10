import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, deleteSmurf } from '../actions';
import styled from 'styled-components';
// import Loader from 'react-loader-spinner';

import Smurf from './Smurf';

class Smurfs extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  /*
    error ? (
        <p>{error}</p>
      ) : status === 'fetching smurfs' ? (
        <LoadingWrapper>
          <Loader type="Puff" color="#00BFFF" height="100" width="100" />
        </LoadingWrapper>
      ) :
  */

  render() {
    const { smurfs, deleteSmurf, history } = this.props;
    return (
      <SmurfsContainer>
        <SmurfsList>
          {smurfs.map(smurf => {
            return (
              <Smurf
                key={smurf.id}
                {...smurf}
                editSmurf={() => {
                  const { id, name, age, height } = smurf;
                  history.push('/smurf-form', [id, name, age, height]);
                }}
                deleteSmurf={() => deleteSmurf(smurf.id)}
              />
            );
          })}
        </SmurfsList>
      </SmurfsContainer>
    );
  }
}

const SmurfsContainer = styled.div`
  padding: 1rem;
`;

const SmurfsList = styled.ul`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const mapStateToProps = ({ smurfs }) => ({
  smurfs
});

export default connect(
  mapStateToProps,
  { fetchSmurfs, deleteSmurf }
)(Smurfs);
