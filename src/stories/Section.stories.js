import React from 'react';

import Section from '../components/Section'
import '../components/Section.css';
export default {
    title: 'Components/Section',
    component: Section,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
};

const Template = (args) => <Section {...args} />;


export const Title = Template.bind({});
Title.args = {
    title: 'Default title'
}
export const MaxWidth = Template.bind({});
MaxWidth.args = {
    maxWidth: `960px`
}