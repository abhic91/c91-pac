// Button.stories.js|jsx

import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};
export const Outlined = () => <Button variant="outlined" label="Button" >Button</Button>;
export const Contained = () => <Button variant="contained" label="Button" >Button</Button>;