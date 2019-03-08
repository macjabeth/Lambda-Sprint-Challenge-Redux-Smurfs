import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addSmurf, updateSmurf } from '../actions';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { useInput } from '../hooks';

const SmurfForm = ({ history, location }) => {
  const [name, setName, updateName] = useInput();
  const [age, setAge, updateAge] = useInput();
  const [height, setHeight, updateHeight] = useInput();
  let capturedID = false;

  useEffect(() => {
    const { state } = location;
    if (state) {
      const [id, name, age, height] = state;
      setName(name);
      setAge(age);
      setHeight(height);
      capturedID = id;
    }
  });

  const submitSmurf = e => {
    e.preventDefault();

    const smurfy = { name, age, height };

    if (typeof capturedID === 'number') {
      updateSmurf(capturedID, smurfy).then(() => history.push('/'));
    } else {
      addSmurf(smurfy).then(() => history.push('/'));
    }

    setName('');
    setAge('');
    setHeight('');
  };

  return (
    <div>
      <FormTitle>It's Smurfin' Time</FormTitle>
      <Form onSubmit={submitSmurf}>
        <Input
          type="text"
          onChange={updateName}
          placeholder="name"
          value={name}
        />
        <Input
          type="number"
          onChange={updateAge}
          placeholder="age"
          value={age}
        />
        <Input
          type="text"
          onChange={updateHeight}
          placeholder="height"
          value={height}
        />
        <Input type="submit" value="Add Smurf" />
      </Form>
    </div>
  );
};

const FormTitle = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #002a32;
  padding-top: 3rem;
`;

const Form = styled.form`
  width: 35rem;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  height: 4rem;
  width: 100%;
  border: 2px solid midnightblue;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  background-color: ${({ type }) =>
    (type === 'submit' ? darken : lighten)(0.2, '#75abbc')};
  color: ${({ type }) =>
    type === 'submit' ? lighten(0.8, '#002a32') : '#002a32'};
  ${({ type }) =>
    type === 'submit' &&
    css`
      font-variant: small-caps;
    `}
  &::placeholder {
    text-align: center;
  }
`;

export default connect(
  null,
  { addSmurf, updateSmurf }
)(SmurfForm);
