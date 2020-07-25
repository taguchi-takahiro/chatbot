import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
    return(
        <TextField 
        fuiiWidth = {true}
        label={props.label} 
        margin={"dense"}
        multiline={props.multiline}
        rows={props.value}
        type={props.type}
        onChange={props.onChange}
        />
    )
}

export default TextInput