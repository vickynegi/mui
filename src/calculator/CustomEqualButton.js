export function CustomEqualButton(props){
    console.log("equla button-", props.value)
   return (
     <td><input type="button" value="=" onClick={() =>{result()}}/></td> 
   )
 }

 function result(){
    let res=eval(document.getElementById("result").value)
    document.getElementById("result").value =  res
  }