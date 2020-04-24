import {createSingleLoaderComponent} from '../componentApi';


export default createSingleLoaderComponent({
  name: 'semi-circle-spin',
  children: [
    {
      count: 1,
      color(color) {
        return {
          backgroundImage: `linear-gradient(transparent 0,transparent 70%, ${color} 30%, ${color} 100%)`
        };
      }
    }
  ]
});
