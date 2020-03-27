import React from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
function SwitchComponent(props){

    return (
        <FormControlLabel
            control={<Switch size={props.size} checked={props.checked} onChange={()=> props.onChange()} />}
            label="Filter per date"
        />
    );

}

export default SwitchComponent;
