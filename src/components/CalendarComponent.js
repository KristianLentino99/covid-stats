import React, {Component} from "react";
import "flatpickr/dist/themes/material_green.css";
import FlatPickr from 'react-flatpickr';
export default class CalendarComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            date_start:new Date(),
            date_end:null
        };
    }
    componentDidMount() {

    }
    render() {
        let {dates,date_start}= this.props;
        return (
            <FlatPickr
                value={dates}
                options={{
                    mode:'range',
                    dateFormat: "d/m/Y",
                    enableTime:true,

                }}
                onChange={(dates)=>this.props.onChange(dates)}
            />
        );
    }


}
