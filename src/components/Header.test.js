import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<Header />).is('.header__container')).toBe(true);
  });
});