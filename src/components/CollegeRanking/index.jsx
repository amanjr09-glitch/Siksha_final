import React from 'react';
import './index.css'
import Table from './Table';
import Tabs from './Tabs';

const tableData =
{
    agency: [{ "COLUMN_NAME": "buisnesstoday" }, { "COLUMN_NAME": "indiatoday" }, { "COLUMN_NAME": "nirf" }, { "COLUMN_NAME": "outlook" }, { "COLUMN_NAME": "toi" }],
    colleges: [
        {
            college_name: "Harvard University",
            rank: 1
        },
        {
            college_name: "MIT",
            rank: 2
        },
        {
            college_name: "Stanford University",
            rank: 3
        },
        {
            college_name: "California Institute of Technology",
            rank: 4
        },
    ]
}


const CollegeRanking = () => {
    return (
        <div className='college-ranking'>
            <h1 className='heading'>College Rankings</h1>
            <Tabs tabs={tableData.agency}/>
            <Table tableData={tableData} />
        </div>
    );
};

export default CollegeRanking;
