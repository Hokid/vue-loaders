import {createSingleLoaderComponent} from '../componentApi';


export default createSingleLoaderComponent({
  name: 'ball-clip-rotate',
  children: [
    {
      count: 1,
      color: [
        'border-top-color',
        'border-left-color',
        'border-right-color'
      ]
    }
  ]
});
