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
            {/* <td><input type="button" value="1" onClick={() =>{f4(1)}} /></td>  */}
            <CustomButton value={1} />
            <td><input type="button" value="2" onClick={() =>{f4(2)}} /></td> 
            <td><input type="button" value="3" onClick={() =>{f4(3)}} /></td> 
            <td><input type="button" value="/" onClick={() =>{f4('/')}} /></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="4" onClick={() =>{f4(4)}} /></td> 
            <td><input type="button" value="5" onClick={() =>{f4(5)}} /></td> 
            <td><input type="button" value="6" onClick={() =>{f4(6)}} /></td> 
            <td><input type="button" value="*" onClick={() =>{f4('*')}}/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="7" onClick={() =>{f4(7)}} /></td> 
            <td><input type="button" value="8" onClick={() =>{f4(8)}} /></td> 
            <td><input type="button" value="9" onClick={() =>{f4(9)}} /></td> 
            <td><input type="button" value="-" onClick={() =>{f4('-')}}/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="0" onClick={() =>{f4(0)}} /></td> 
            <td><input type="button" value="." onClick={() =>{f4('.')}} /></td> 
            <td><input type="button" value="=" onClick={() =>{result()}}/></td> 
            <td><input type="button" value="+" onClick={() =>{f4('+')}}/></td> 
        </tr> 
      </table> 

    </div>
    
  );
}

export default App;
