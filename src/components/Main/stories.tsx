import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'klinkonskydev :3',
    description: 'Junior programmer'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
// Basic.args = {
// title: 'klinkonskydev',
// description: 'Junior programmer'
// };
