import React from 'react';

import Header from './Header';

export default {
    title: 'Components/Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Title = Template.bind({});
Title.args = {
    title: 'Default title'
}

