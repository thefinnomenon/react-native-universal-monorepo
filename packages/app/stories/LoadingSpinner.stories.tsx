import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

export default {
  title: 'Example/LoadingSpinner',
  component: LoadingSpinner,
} as Meta;

type Args = {
  size: 'small' | 'large' | undefined;
};

const Template: Story<Args> = args => <LoadingSpinner {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
