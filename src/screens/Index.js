import React, {Component} from "react";
import LoaderComponent from "../components/LoaderComponent";
import HomePage from "./HomePage";
import Axios from "axios";
import Button from '@material-ui/core/Button';
import DrawerComponent from "../components/Drawer/DrawerComponent";
import Nations from "./Nations";
import HeaderComponent from "../components/HeaderComponent";
export default class Index extends Component{


    constructor(props) {
        super(props);
        this.state={
            isLoading:true,
            datas:null,
            dataPerDate:null,
            openDrawer:false,
            currentPage:'HomePage'
        };

        this._handleDrawerItemClick= this._handleDrawerItemClick.bind(this);

    }

    componentDidMount() {

        Axios.get(`https://enrichman.github.io/covid19/world/data.json`)
            .then(res => {
                const datas = res.data;
                this.setState({
                    datas,
                    dataPerDate: datas.ts.reverse()
                });
            }).then(()=>this.setState({

            isLoading:false
        }));




    }

    _handleDrawerItemClick= (currentPage)=>this.setState({currentPage,openDrawer:false});



    render() {
        let view = this.state.isLoading ? (
            <LoaderComponent></LoaderComponent>
        ) : (
            <div>
                <HeaderComponent openDrawer drawerItemClick={(page)=> this._handleDrawerItemClick(page)}></HeaderComponent>
                { this.renderSwitchComponent() }
            </div>
        );
        return (

            <div className="App">
                {view}
            </div>
        );



    }


    renderSwitchComponent() {

        let {datas,dataPerDate,currentPage}= this.state;

        switch (currentPage) {
            case "HomePage":
                return (<HomePage  items={datas} itemsPerDate={dataPerDate}></HomePage>);
                break;
            case 'Nations':
                return (<Nations></Nations>);
                break;

            default:
                return (<HomePage></HomePage>)
            break;
        }
    }
}
