import {createSingleLoaderComponent} from '../componentApi';


export default createSingleLoaderComponent({
  name: 'ball-rotate',
  children: [
    {count: 1, children: 2}
  ]
});
