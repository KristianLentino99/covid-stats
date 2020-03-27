import React from "react";
import {Paper} from "@material-ui/core";

export default function NationDataComponent(props) {

    let {todayCases,todayDeaths,casesPerOneMillion,deathsPerOneMillion}=props.data;
    let {cases,deaths,recovered,active,critical}=props.data;
    return (

        <div className="flex flex-center mt-5 p-10">
            <div className="flex flex-center row col-md-12">
                <Paper className="col-md-5 mr-5 mb-5 nation-data-box">
                    <div className="p-5">
                        <p>Today</p>
                        <p>Cases:  {todayCases??0}</p>
                        <p>Deaths: {todayDeaths??0}</p>
                        <p>Cases per one milion: {casesPerOneMillion??0}</p>
                        <p>Cases per one milion: {deathsPerOneMillion??0}</p>
                    </div>
                </Paper>
                <Paper className="col-md-5 mr-5 mb-5 nation-data-box ">
                    <div className="p-5">
                        <p>Total</p>
                        <p>Cases:  {cases??0}</p>
                        <p>Deaths: {deaths??0}</p>
                        <p>Recovered: {recovered??0}</p>
                        <p>Critical: {critical??0}</p>
                        <p>Active: {active??0}</p>
                    </div>
                </Paper>

            </div>
        </div>
    )
}
