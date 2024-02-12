import React from 'react';
import Programs from "../data/programs.json"

const DayView = ({programData }) => {
    if (!programData || Object.keys(programData).length === 0)
    {
        return (
            <div className="table-mini">
                <div className="future flex space-around">
                    You are in the future
                </div>
            </div>
        );
    }

    const selectedDay = Programs[programData]
console.log(selectedDay)
    return (
        <div className="table-mini">
            <div className='table-mini-inner'>
                    <ul >
                        {/* <h2>Day: {programData}</h2> */}
                        <div>{selectedDay["date"]}</div>
                        {selectedDay["programs"].map(program => (

                            <li key={program.name}>
                                <p>{program.name}</p>
                                {/* <p>Day: {programData}</p> */}
                                {/* <p>Code: {program.code}</p> */}
                            </li>

                        ))}
                    </ul>
            </div>
        </div>
    );

    // return (
    //     <>{programData} is the content</>
    // )
};

export default DayView;
