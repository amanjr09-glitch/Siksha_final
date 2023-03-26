import React from 'react';

const Table = ({ tableData }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>College Name</th>
                    <th>Rank</th>
                </tr>
            </thead>
            <tbody>
                {tableData.colleges.map((college, index) => (
                    <tr key={index}>
                        <td>{college.college_name}</td>
                        <td>{college.rank}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
