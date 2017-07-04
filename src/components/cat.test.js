import React from 'react';
import { shallow } from 'enzyme';
import Cat from './cat';
import CatsList from './cats-list';

describe('cat component tests', () => {
    const props = {
        name: 'Bill',
        picture: 'https://picofbill.com/1',
        age: 11,
    }

    const list = [
        {
            name: 'Bill',
            picture: 'https://picofbill.com/1',
            age: 11,
        },
        {
            name: 'Phil',
            picture: 'https://picofbill.com/1',
            age: 11,
        }
    ];

    it('should render cats name', () => {
        const wrapper = shallow(<Cat {...props } />);
        const name = 'Bill';

        expect(wrapper.contains(name)).toEqual(true);
    });

    it('should render cats image', () => {
        const wrapper = shallow(<Cat {...props}/>);
        const image = <img className='cat-img' src = {props.picture}/>

        expect(wrapper.contains(image)).toEqual(true);         
    });

    it('should render cats age', () => {
        const wrapper = shallow(<Cat {...props}/>);
        const age = 11;

        expect(wrapper.contains(age)).toEqual(true);
    });

    it('should render right number of cats', () => {
        const wrapper = shallow(<CatsList cats={ list } />);
        expect(wrapper.find(Cat)).toHaveLength(list.length);
    });
}) 