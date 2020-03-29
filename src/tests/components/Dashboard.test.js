import React from 'react';
import Dashboard from '../../components/DashBoardPage';
import { shallow } from 'enzyme';

test('Should test Dashboard ', ()=>{
    //export const ExpenseLisItem = ({ dispatch, id, description, amount, createdAt }) => {

    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
});