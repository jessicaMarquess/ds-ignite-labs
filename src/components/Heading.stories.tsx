import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum.',
    size: 'xl',
  },
  argTypes: {
    size: {
      options: ['lg', 'xl', '2xl'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Saaaaaalut, ça va???</h1> 
  },
  argTypes: {
    children: {
      table: {
        disabled: true,
      }
    },
    asChild: {
      table: {
        disabled: true,
      }
    }
  }
};