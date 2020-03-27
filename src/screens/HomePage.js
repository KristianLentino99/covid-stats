import React, {Component} from "react";
import CalendarComponent from "../components/CalendarComponent";
import DataComponent from "../components/DataComponent";
import moment from 'moment';
import tz from 'moment-timezone';
import SwitchComponent from "../components/SwitchComponent";
import ChartComponent from "../components/Charts/ChartComponent";
import LoaderComponent from "../components/LoaderComponent";
class HomePage extends Component{


    constructor(props) {
        super(props);
        this.state={
            isLoading:true,
            deathInWorld:0,
            casesInWorld:0,
            healedInWorld:0,
            lastUpdate:null,
            showCalendar:false,
            timeseries:null,
            period:null
        };
        this._handleChangeCalendar= this._handleChangeCalendar.bind(this);
        this._handleToggleCalendar= this._handleToggleCalendar.bind(this);
    }

     async componentDidMount() {

        if(this.props.items){

            let {items} = this.props;

            await this.setInitialState(items);

            await this.updateChart(this.state.timeseries);
            await this.setState({isReadyChart:true});

        }


    }


    async updateChart(timeseries) {


        await this.setState({filteredTimeseries:timeseries});

        await this.prepareDataForChart(timeseries);
    }

    async setInitialState(items) {
        await this.setState({
            deathInWorld:items.deaths,
            casesInWorld:items.confirmed,
            healedInWorld:items.recovered,
            lastUpdate: new Date(items.last_update),
            isLoading:false,
            timeseries:items.ts,
            filteredTimeseries:[],
            dataForChart:null,
            isReadyChart:false,
            chartAxes: [
                {
                    primary: true,
                    type: 'time',
                    time:{
                        unit: 'day'
                    },
                    position: 'bottom'
                },
                { type: 'linear', position: 'left' }
            ]
        });
    }

    async prepareDataForChart(timeseries) {

        let returnData=[];

        await timeseries.reverse().map((data,index)=>{
            let timestamp= moment.unix(data.t).tz('Europe/Rome');
            returnData[index]={
                label: timestamp.format('DD-MM-YYYY'),
                data: [[timestamp.toDate(),data.c]]
            }
        });

        await this.setState({dataForChart:returnData});


    }

    async filterSingleDate(date,timeseries) {

        let singleDate= moment(date).tz("America/New_York").format('YYYY-MM-DD');
        let tsDate= moment(singleDate).format('X');
        tsDate= parseInt(tsDate) +3600;
        let dayBeforeTs= tsDate- 86400; //seconds in a day;
        let filteredTimeseries=await timeseries.filter((value => {
            return value.t>dayBeforeTs  && value.t <=tsDate;
        }));
        let dayBeforeStats= await timeseries.filter((value => {
            return value.t>= dayBeforeTs && value.t <= dayBeforeTs;
        }));

        await this.updateChart(filteredTimeseries);

        let deathInWorld=0;
        let healedInWorld=0;
        let casesInWorld=0;
        let arrLen=filteredTimeseries.length;
        if(arrLen>0){
            deathInWorld= filteredTimeseries[0].d - dayBeforeStats[0].d;
            healedInWorld= filteredTimeseries[0].r - dayBeforeStats[0].r;
            casesInWorld= filteredTimeseries[0].c - dayBeforeStats[0].c ;
        }

        return {
            deathInWorld,
            healedInWorld,
            casesInWorld
        };

    }

    async filterMultipleDates(dates,timeseries) {

        let start_date= moment(dates[0]).tz('GMT').format('YYYY-MM-DD');
        let end_date= moment(dates[1]).tz('GMT').format('YYYY-MM-DD');
        let ts_start= moment(start_date).format('X');
        let ts_end= parseInt(moment(end_date).format('X'));
        ts_end+=3600;

        let filteredTimeseries=await  timeseries.filter((value => {
            return value.t>=ts_start  && value.t <=ts_end;
        }));

         this.updateChart(filteredTimeseries);

        let deathInWorld=0;
        let healedInWorld=0;
        let casesInWorld=0;
        let arrLen=filteredTimeseries.length;

        if(arrLen>0){
            let lastNotEmptyDate= filteredTimeseries[arrLen-1];

            if(!lastNotEmptyDate.d){
                lastNotEmptyDate= this.getLastNotEmptyDate(filteredTimeseries);

            }

            deathInWorld= filteredTimeseries[0].d;
            healedInWorld= filteredTimeseries[0].r;
            casesInWorld= filteredTimeseries[0].c;



            if(arrLen>1){



                deathInWorld =   lastNotEmptyDate.d -deathInWorld ;
                healedInWorld = lastNotEmptyDate.r - healedInWorld;
                casesInWorld = lastNotEmptyDate.c - casesInWorld;
            }


        }

        return {
            deathInWorld,
            healedInWorld,
            casesInWorld
        };

    }

     _handleChangeCalendar=async (dates)=>{

        this.setState({isReadyChart:false,isLoading:true,dataForChart:null});
        let stats=null;
        let {timeseries} = this.state;
        if(dates.length>1){

            stats=await this.filterMultipleDates(dates,timeseries);

        } else {
           stats=await this.filterSingleDate(dates[0],timeseries);

        }



        await this.setState({
            casesInWorld:stats.casesInWorld,
            deathInWorld:stats.deathInWorld,
            healedInWorld:stats.healedInWorld,
            period:dates
        });

         await this.setState({isReadyChart:true,isLoading:false});

    }


    getLastNotEmptyDate(filteredTimeseries) {

        for (let key= 0; key<=filteredTimeseries.length;key++){

            if(filteredTimeseries[key]){
                return filteredTimeseries[key];
            }

        }

        return null;

    }

    _handleToggleCalendar() {

        this.setState({
            showCalendar:!this.state.showCalendar
        });

    }



    render() {
            let {isLoading,lastUpdate,showCalendar,dataForChart,chartAxes,isReadyChart,period}=this.state;
            let formattedDate=null;
            if(lastUpdate instanceof Date){
                //getMonth returns value from 0
                let month=lastUpdate.getMonth()+1;
                formattedDate= lastUpdate.getDate()+'/'+ month +'/'+ lastUpdate.getFullYear();
            }

            let data= !isLoading && isReadyChart ? (
                <div className="mt-5">

                    <div className="flex flex-center row" style={{paddingLeft:30}}>
                        <div className="col-md-6">
                            <p
                                style={{
                                    display: 'flex',
                                    flex: 1,
                                    marginRight: 35,
                                    justifyContent: 'flex-end'
                                }}
                            >
                                {/*<a onClick={()=>this._handleToggleCalendar()}>Filter per date</a>*/}
                                <SwitchComponent size="medium" checked={showCalendar} onChange={this._handleToggleCalendar}   />
                            </p>
                        </div>

                        <div className="flex-row-start col-md-6">
                            {
                                showCalendar ? (
                                    <CalendarComponent dates={period} onChange={this._handleChangeCalendar}></CalendarComponent>
                                ) : null
                            }
                        </div>
                    </div>
                    {
                        isReadyChart ? ( <ChartComponent data={dataForChart} axes={chartAxes} /> ) : null
                    }

                    <DataComponent {...this.state} formattedDate={formattedDate}></DataComponent>


                </div>
            ) : (
                <LoaderComponent/>
            );
            return (
                <div className="home">
                    {/*<div className="globe">
                        <i className="fa fa-globe fa-10x" style={{color: '#fff'}}></i>
                    </div>*/}
                    {data}
                </div>
            )
    }


}

export default HomePage;
