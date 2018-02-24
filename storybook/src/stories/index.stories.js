/* eslint-disable react/react-in-jsx-scope */
import { storiesOf } from '@storybook/vue';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs/vue';
import { withReadme, withDocs } from 'storybook-readme';
import '../styles.css';
import Container from '../container.vue';
import defs from './defs';

function component(name, dSize, dColor) {
  return () => {
    const _size = text('Size', dSize);
    const _color = color('Color', dColor);

    return {
      template: `<${name} size="${_size || ''}" color="${_color || ''}"/>`
    };
  };
}

const stories = (
  storiesOf('Loaders', module)
    .addDecorator(withKnobs)
    .addDecorator(story => ({
      template: '<Container><Content></Content></Container>',
      components: { Container, Content: story() }
    }))
);

defs.forEach(def => stories.add(def.name, withReadme(def.readme, component(def.component))))


