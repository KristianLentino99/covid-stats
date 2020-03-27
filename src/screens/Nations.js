import React, {Component} from "react";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Axios from "axios";
import LoaderComponent from "../components/LoaderComponent";
import NationDataComponent from "../components/NationDataComponent";

class Nations extends Component{

    constructor(props) {
        super(props);
        this.state={
            isLoading:true,
            selectedOption:null,
            nations:[],
            data:null
        };
    }

    async componentDidMount() {
        await Axios.get(`https://restcountries.eu/rest/v2/all`)
        .then(res => {

            let data=[];
            res.data.map((nation)=>{

                if(nation.name=='United States of America'){

                    nation.name='USA';
                }

                data[data.length]= {
                    value:nation.name.toLowerCase(),
                    label:nation.name
                }
                return true;
            });

             this.setState({
                nations:data
             });

        }).then(()=>this.setState({

            isLoading:false
        }));


    }


    _handleOnChange=async (selectedOption)=> {

        if(selectedOption) {
            this.setState({selectedOption, isLoading: true});
            await this.fetchData(selectedOption);
        } else {
            this.setState({selectedOption:null,data:null});
        }

    }

    async fetchData(selectedOption) {


        await Axios.get(`https://coronavirus-19-api.herokuapp.com/countries/`+selectedOption.value)
            .then(result => {

                let {data,status}=result;
                if(status===200){

                    this.setState({
                        data,

                    });

                }


            }).then(()=>this.setState({

                isLoading:false
            }));
    }

    render() {

        let {nations,isLoading,selectedOption,data}=this.state;

        let dataComponent= (!data) ? null : ( <NationDataComponent data={data} ></NationDataComponent> );
        let view= isLoading ? (
            <LoaderComponent></LoaderComponent>
        ) : (
            <div>
                <div className="flex flex-center mt-5">
                    <h2><p className="text-white">Please select a nation</p></h2>

                </div>
                <div className="flex flex-center">
                    <Select
                        className="nation-select"
                        name="form-field-name"
                        placeholder="Select a nation"
                        value={selectedOption}
                        onChange={this._handleOnChange}
                        options={nations}
                    />
                </div>
                {dataComponent}
            </div>
        );
        return (
            <div className="App">
                {view}
            </div>
        );
    }


};

export default Nations;
