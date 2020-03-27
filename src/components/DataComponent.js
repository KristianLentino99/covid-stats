import React from "react";

function DataComponent(props) {

    let {casesInWorld,deathInWorld,healedInWorld,formattedDate}= props;
    console.log(props);
    return (
        <div className="mt-5">
            <div className="flex flex-column p-10">
                <div>
                    <p>Total Coronavirus cases in the world : {new Intl.NumberFormat('it-IT').format(casesInWorld)}</p>
                </div>
                <div>
                    <p>Total deaths in the world : {new Intl.NumberFormat('it-IT').format(deathInWorld)}</p>
                </div>
                <div>
                    <p>Total healed in the world : {new Intl.NumberFormat('it-IT').format(healedInWorld)}</p>
                </div>
                <div>
                    <p> Last update info : {  formattedDate }</p>
                </div>
            </div>
        </div>
    )

}

export default DataComponent;
