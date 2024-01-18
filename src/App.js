import { useEffect } from 'react';
import './App.css';
import ContentContainer from './components/ContentContainer/ContentContainer';
import Map from './components/map/Map';
import {getLocationDetails} from './store/ipDetailsSlice'
import { useDispatch } from 'react-redux';
function App() {
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLocationDetails(''))
  }, [dispatch]); 
  
  return (
  <>
    <div className='bg'></div>
    <ContentContainer />
    <Map />
  </>
  );
}

export default App;
