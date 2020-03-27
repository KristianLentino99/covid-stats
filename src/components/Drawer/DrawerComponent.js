import React from "react";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './DrawerComponent.css';
import Paper from '@material-ui/core/Paper';


export default function DrawerComponent(props){

    let options=[
        {
            name:'HomePage',
            icon:'fa fa-globe',
            isLink:true,
            link:'HomePage'
        },
        {
            name:'Nations',
            icon:'fa fa-location-arrow',
            isLink:true,
            link:'Nations'
        },
    ];


    return (

        <Drawer className="drawer" anchor={props.anchor} open={props.open} onClose={()=> props.onClose()}>
            <List className="drawer-list">
                {
                    options.map((option,index)=>(
                        <Paper  key={index}>
                            <ListItem key={index} button onClick={()=>props.onItemClick(option.link)} className="drawer-list-item">
                                <i className={option.icon}></i>
                                <ListItemText className="ml-4 pt-2" primary={<p>{option.name}</p>}></ListItemText>

                            </ListItem>
                        </Paper>
                    ))
                }
            </List>
        </Drawer>
    );
}
