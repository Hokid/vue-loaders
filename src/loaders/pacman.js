import {createSingleLoaderComponent} from '../componentApi';


export default createSingleLoaderComponent({
  name: 'pacman',
  children: [
    {count: 2, color: ['border-top-color', 'border-left-color', 'border-bottom-color']},
    {count: 3}
  ]
});
