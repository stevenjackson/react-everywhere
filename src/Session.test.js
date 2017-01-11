import React from 'react';
import ReactDOM from 'react-dom';
import Session from './Session';
import renderer from 'react-test-renderer'

it('matches snapshot', () => {
  const output = renderer.create(<Session title="title" abstract="abstract"/>);
  expect(output).toMatchSnapshot()
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const output = ReactDOM.render(<Session title="title" abstract="abstract"/>, div);
});
