import './App.css';
import React, { useRef } from 'react';
import { useBarcode } from '@createnextapp/react-barcode';
import exportAsImage from './Components/exportAsImage';

function App() {

  const exportRef = useRef();

  const { inputRef } = useBarcode({
    value: 'createnextapp',
    options: {
      background: 'white',
     format:'CODE39'
    }
  });

 
  
  return ( 
    <>
    <div id='barCode' ref={exportRef}>
      <img alt='barcode' ref={inputRef} />
    </div>
     <button onClick={() => exportAsImage(exportRef.current, "test")}>Capture Image</button>
    </>
  );

  
}

export default App;
