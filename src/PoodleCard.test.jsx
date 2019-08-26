import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

import PoodleCardUser from './components/PoodleCardUser';

configure({adapter: new Adapter() });


describe('PoodleCard Name', () => {
    it ('should render correctly', () => {
        const output = shallow(<PoodleCardUser name="Swaffy" />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});

describe('PoodleCard img', () => {
    it ('img src should be correct', () => {
        const output = shallow(<PoodleCardUser image="https://bull" />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});