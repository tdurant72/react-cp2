import React from 'react';

import PrimaryButton from '../components/PrimaryButton'

export default {
    title: 'Components/PrimaryButton',
    component: PrimaryButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <PrimaryButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
    primary: false,
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

