import { getIpDetails } from './ApisHandller'; 
import { useEffect, useState } from 'react';
import './App.css';
import ContentContainer from './comonents/ContentContainer/ContentContainer';
import Map from './comonents/map/Map';
import {getLocationDetails} from './store/ipDetailsSlice'
import { useDispatch } from 'react-redux';
function App() {
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLocationDetails(''))
  }, []); 
  
  return (
  <>
    <div className='bg'></div>
    <ContentContainer />
    <Map />
  </>
  );
}

export default App;
