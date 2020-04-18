import {createSingleLoaderComponent} from '../singleLoaderComponent';


export default createSingleLoaderComponent({
  name: 'ball-clip-rotate-multiple',
  children: [
    {count: 1, color: ['border-right-color', 'border-left-color']},
    {count: 1, color: ['border-top-color', 'border-bottom-color']},
  ]
});
