import React from "react";
import './Tabs.css'

export function Tabs({activeTab, handler, tabs}) {
    return (
        <div className="tabs__row">
            {tabs.map((tab, index) => <button
                    key={index}
                    onClick={() => {
                        handler(index)
                    }}
                    className={activeTab === index ? "activeTab tab" : 'tab'}>
                    {tab.title}
                </button>
            )}
        </div>
    );
}
