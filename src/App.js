import logo from './logo.svg';
import './App.css';
import {CustomAutocomplete} from './CustomAutocomplete'
import { useEffect } from 'react';

function f4(value){
  document.getElementById("result").value +=  value
}

function result(){
  let res=eval(document.getElementById("result").value)
  document.getElementById("result").value =  res
}

function clear(){
  document.getElementById("result").value = ''
}

function CustomButton(props){
  const value = props.value
  return (
    <td><input type="button" value={value} onClick={() =>{f4(value)}} /></td>
  )
}

function App() {
  const str = "ss"
  return (
    <div className="App">
      <table id="calcu"> 
        <tr> 
            <td colspan="3"> 
              <input type="text" id="result"/> 
            </td> 
            <td><input type="button" value="c" onClick={() =>{clear()}} /></td> 
        </tr> 
  
        <tr> 
            <CustomButton value={1} />
            <CustomButton value={2} />
            <CustomButton value={3} />
            <td><input type="button" value="/" onClick={() =>{f4('/')}} /></td> 
        </tr> 
        <tr> 
            <CustomButton value={4} />
            <CustomButton value={5} />
            <CustomButton value={6} />
            <td><input type="button" value="*" onClick={() =>{f4('*')}}/></td> 
        </tr> 
        <tr>
            <CustomButton value={7} />
            <CustomButton value={8} />
            <CustomButton value={9} />
            <td><input type="button" value="-" onClick={() =>{f4('-')}}/></td> 
        </tr> 
        <tr>
            <CustomButton value={0} />
            <td><input type="button" value="." onClick={() =>{f4('.')}} /></td> 
            <td><input type="button" value="=" onClick={() =>{result()}}/></td> 
            <td><input type="button" value="+" onClick={() =>{f4('+')}}/></td> 
        </tr> 
      </table> 

    </div>
    
  );
}

export default App;
