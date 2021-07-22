import React from 'react';

import Navbar from "../components/Navbar";
import "../components/Navbar.css";


export default {
    title: 'Components/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
};

export const Logo = Template.bind({});
Logo.args = {
    logoSrc: 'https://www.filepicker.io/api/file/q8yh1SmySmy5BNapeDem',
};

export const Title = Template.bind({});
Title.args = {
    title: 'Default title'
}