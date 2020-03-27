import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import DrawerComponent from "./Drawer/DrawerComponent";

export default  class HeaderComponent extends Component{

    constructor(props) {
        super(props);
        this.state={
            openDrawer:false
        };
    }

    toggleDrawer= (openDrawer)=> this.setState({openDrawer});
    render() {
        let {openDrawer}= this.state;
        let {drawerItemClick}= this.props;

        return (
            <div>
                <DrawerComponent onItemClick={(page)=>drawerItemClick(page)} anchor="left" open={openDrawer} onClose={()=>this.toggleDrawer(false)} />
                <header className="App-header p-2   ">
                    <a href="#" onClick={()=>drawerItemClick('HomePage')}>
                        <i className="fa fa-globe fa-2x mr-3"></i>
                        Covid Site
                    </a>
                    <div className="flex justify-content-end">
                        <Button variant="outlined" onClick={()=>this.toggleDrawer(true)} ><i className="fa fa-bars fa-3x "></i></Button>
                    </div>
                </header>
            </div>
        );
    }
}
