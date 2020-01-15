import React from 'react';
import Link from './Link.react';
import renderer from 'react-test-renderer';
import Displatresult from './Displayresult';

test('snapshot test for temperatureInput component', () => {

    const component = renderer.create(
        <Displatresult all={[]}>Facebook</Displatresult>,
      );
      let comp = component.toJSON();

  expect(comp).toMatchSnapshot();


});