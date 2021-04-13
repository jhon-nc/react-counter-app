import { shallow,configure } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});

describe('debe incrementar +1', () => {
    const wrapper = shallow (<CounterApp/>);

    wrapper.find('button').at(0).simulate('click');
});