export function CustomEqualButton(props){
    console.log("equla button-", props.callback)
   return (
    //  <td><input type="button" value="=" onClick={() =>{result()}}/></td>
     <td><input type="button" value="=" onClick={() =>{props.callback()}}/></td> 
   )
 }

 function result(){
    let res=eval(document.getElementById("result").value)
    document.getElementById("result").value =  res
  }