
import './App.css';
import React, {useEffect, useState} from "react";
import { Tabs } from "./components/tabs/Tabs";
import { tabs } from "./data/tabs/Tabs"
import TabContent from './components/tabContent/TabContent';

export function App() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [content, setContent] = useState([])

    const urlBuilder = `https://jsonplaceholder.typicode.com/${tabs[selectedTab].title}`

    const gethData = async () => {
        const data = await fetch(urlBuilder).then(res => res.json());
        setContent(data)
    }

    useEffect (() => {
        gethData();
    }, [selectedTab])


    return (
     
            <div className="container">
                <Tabs tabs={tabs} handler={setSelectedTab} activeTab={selectedTab}/>
                <TabContent  data={content} tabs={tabs} indexTab={selectedTab}></TabContent>
            </div>
     
    )

}
export default App;

