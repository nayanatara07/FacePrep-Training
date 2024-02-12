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

    return (
        <div className="table-mini">
            <div className='table-mini-inner'>
                {Programs.map(each =>
                    each.Programs.map(eachInner =>
                         eachInner.name
                        )
                    )}
            </div>
        </div>
    );
};

export default DayView;
