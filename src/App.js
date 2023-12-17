import logo from './logo.svg';
import './App.css';
import {CustomAutocomplete} from './CustomAutocomplete'
import { useEffect, useState } from 'react';
import { CustomButton } from './calculator/CustomButton'
import { CustomEqualButton } from './calculator/CustomEqualButton'
import { CustomBackspace } from './calculator/CustomBackspace'

function clear(){
  document.getElementById("result").value = ''
}

function App() {
  const [display, setDisplay] = useState('')
  const callback = (value) =>{setDisplay(display + value)}
  console.log("callback - App", callback)

  const backspaceCallback = () =>{setDisplay(display.substring(0, display.length -1))}
  return (
    <div className="App">
      <table id="calcu"> 
        <tr> 
            <td colspan="3"> 
              <input type="text" id="result" value={display} /> 
            </td> 
            <td><input type="button" value="c" onClick={() =>{clear()}} /></td> 
        </tr> 
  
        <tr> 
            <CustomButton value={1} callback={callback} />
            <CustomButton value={2} callback={callback} />
            <CustomButton value={3} callback={callback} />
            <CustomButton value={'/'} callback={callback} />
        </tr> 
        <tr> 
            <CustomButton value={4} callback={callback} />
            <CustomButton value={5} callback={callback} />
            <CustomButton value={6} callback={callback} />
            <CustomButton value={'*'} callback={callback} />
        </tr> 
        <tr>
            <CustomButton value={7} callback={callback} />
            <CustomButton value={8} callback={callback} />
            <CustomButton value={9} callback={callback} />
            <CustomButton value={'-'} callback={callback} />
        </tr> 
        <tr>
            <CustomButton value={0} callback={callback} />
            <CustomButton value={'.'} callback={callback} />
            <CustomEqualButton value={'='}  />
            <CustomButton value={'+'} callback={callback} />
            
            
            {/* <CustomBackspace value={'backspace'} display={display} setDisplay={setDisplay} /> */}
            <CustomBackspace value={'backspace'} callback={backspaceCallback} />
        </tr> 
      </table> 

    </div>
    
  );
}

export default App;
