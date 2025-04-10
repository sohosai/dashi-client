import type { Preview } from '@storybook/react';
//global css
import '../src/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    //背景色の変更
    backgrounds: {
      values: [
        // 👇 Default values
        { name: 'Dark', value: '#333' },
        { name: 'Light', value: '#F7F9F2' },
        // 👇 Add your own
        { name: 'Dashi', value: '#fffdf3' },
      ],
      // 👇 Specify which background is shown by default
      default: 'Dashi',
    },
  },
};

export default preview;
