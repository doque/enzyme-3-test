import React from 'react';
import { shallow } from 'enzyme';

import Animal from './Animal';

test('Animal', () => {
    const meow = jest.fn();
    const dog = shallow(<Animal name="Jack" type="dog" greet={ meow }/>);

    expect(meow).not.toHaveBeenCalled();

    dog.setProps({ type: "cat" });
    console.log(dog.text());
    expect(meow).toHaveBeenCalledTimes(1);
});
