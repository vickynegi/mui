

export function CustomButton(props){
    const callback = props.callback
    console.log("callback is", callback)
    const value = props.value
    return (
        <td><input type="button" value={value} onClick={() =>{callback(value)}} /></td>
    )
}