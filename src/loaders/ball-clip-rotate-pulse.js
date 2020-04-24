import {createSingleLoaderComponent} from '../componentApi';

export default createSingleLoaderComponent({
  name: 'ball-clip-rotate-pulse',
  children: [
    {count: 1},
    {count: 1, color: ['border-top-color', 'border-bottom-color']}
  ]
});
