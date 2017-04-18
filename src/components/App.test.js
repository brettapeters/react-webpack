import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import App from './App.jsx';

describe('App', function() {
  it('should have a heading', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h2')).to.have.length(2);
  });
});