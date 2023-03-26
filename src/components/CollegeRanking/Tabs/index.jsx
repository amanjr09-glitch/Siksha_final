import React, { useState } from 'react';
import './index.css'

const Tabs = ({ tabs }) => {
    const [currTab, setCurrTab] = useState(0);

    return (
        <div className='tab' align="center">
            {tabs.map((tab, index) => (
                <button
                    className={currTab === index && "button-fill"}
                    onClick={() => {
                        setCurrTab(index);
                    }}
                >
                    {tab["COLUMN_NAME"]}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
