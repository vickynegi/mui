export function CustomBackspace(props){
    // console.log("backspace props", props)
    // console.log("backspace-", props.value)
    
    return (
    //   <td><input type="button" value="Backspace" onClick={() =>{backspace(props.display, props.setDisplay)}}/></td>
      <td><input type="button" value="Backspace" onClick={() =>{props.callback()}}/></td>
    )
  }

// in case we send display & setDisplay
function backspace(word, setDisplay){
    // console.log("word is -", word)
    setDisplay(word.substring(0, word.length -1))
    // console.log(setDisplay)
}
  