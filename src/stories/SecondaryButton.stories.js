import React from 'react';

import SecondaryButton from '../components/SecondaryButton'

export default {
    title: 'Components/SecondaryButton',
    component: SecondaryButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <SecondaryButton {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
    outline: true,
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

