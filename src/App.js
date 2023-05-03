import { useRef, useState, useEffect } from 'react';
import './App.css';
import Tab from './Components/Tab';
import TabPanel from './Components/TabPanel';

function App() {

  const tabContent = [
		{
      title:"Name",
      Content:"Himanshu",
      ref:useRef(null),
			index: 1,
      panelId:"firstPanelId"
    },
		{
      title:"Age",
      Content:24,
      ref:useRef(null),
			index: 2,
      panelId:"secondPanelId"
    },
		{
      title:"State",
      Content:"Maharashtra Pune",
      ref:useRef(null),
			index: 3,
      panelId:"thirdPanelId"
    },
		{
      title:"Organization",
      Content:"Tekvision LLP",
      ref:useRef(null),
			index: 4,
      panelId:"fourthPanelId"
    },
    {
      title:"Test",
      Content:"Tekvision Content",
      ref:useRef(null),
			index: 5,
      panelId:"fifthPanelId"
    }
  ]


  const getCurrentTab=(index)=>{
    return tabContent.find(tab=>tab.index===index);
  }
  const[selectedTab, setSelectedTab] = useState(()=>getCurrentTab(1));
  // const[id,setID]=useState("Tab1");
  // const[panelId,setPanelId]=useState("firstTabPanel");

  const {index,panelId,Content,ref} = selectedTab;

  const onChangeSelectedTab=(data)=>{
    setSelectedTab({...selectedTab,...data})
  }

  // const handleNextTab=(first,next,last)=>{
  //   const tabToSelect = selectedTab === last ? first : next;
  //   setSelectedTab(tabToSelect);
  //   // tabContent[tabToSelect].ref.current.focus();

  // }

  const handlekeyDown=(e)=>{
    const tabCount = tabContent.length;
    if (e.key === "ArrowLeft") {
      // const last = tabCount;
      if(selectedTab.index===1){
        onChangeSelectedTab(getCurrentTab(tabCount));
        return;
      }
      onChangeSelectedTab(getCurrentTab(selectedTab.index - 1));
      // const next = selectedTab - 1;
      // handleNextTab(last, next, 1);
    }
    if (e.key === "ArrowRight") {
      if(selectedTab.index===tabCount){
        onChangeSelectedTab(getCurrentTab(1));
        return;
      }
      onChangeSelectedTab(getCurrentTab(selectedTab.index + 1));
      // const first = 1;
      // const next = selectedTab + 1;
      // handleNextTab(first, next, tabCount);
    }
  };

  const handleClick=(index)=>{
    onChangeSelectedTab(getCurrentTab(index));
    // if(index===1){
    //   // setSelectedTab(tabContent[0].Content);
    //   // setID("Tab1");
    //   // setPanelId("firstTabPanel")
    //   onChangeSelectedTab(getCurrentTab(1));
    // }
    // if(index===2){
    //   // setSelectedTab(tabContent[1].Content);
    //   // setID("Tab2");
    //   // setPanelId("secondTabPanel")
    //   onChangeSelectedTab(getCurrentTab(2));
    // }
    // if(index===3){
    //   // setSelectedTab(tabContent[2].Content);
    //   // setID("Tab3");
    //   // setPanelId("thirdTabPanel")
    //   onChangeSelectedTab(getCurrentTab(3));
      
    // }
    // if(index===4){
    //   // setSelectedTab(tabContent[3].Content);
    //   // setID("Tab4");
    //   // setPanelId("fourthTabPanel")
    //   onChangeSelectedTab(getCurrentTab(4));
    // }
  }

  useEffect(() => {ref.current.focus()} , [ref, selectedTab])

  return (
    <div className="App">
      <h1>Accessible Tab Component in ReactJS</h1>
      <section>
      <ul role="tablist" aria-label="List of Tabs" onKeyDown={handlekeyDown} >
      {tabContent.map((tab) => {
      return (
      <Tab
        id={tab.index}
        tabPanelId={tab.panelId}
        index={tab.index}
        handleChange={handleClick}
        selectedTab={selectedTab}
        tabRef={tab.ref}
        title={tab.title}
        key={tab.title}
      />
    );
    })}

      </ul>
      <TabPanel id={panelId} Content={Content} tabId={index} tabIndex={0}>
      </TabPanel>  
      {/* <TabPanel id="secondTabPanel" tabId="Tab2" tabIndex={1} selectedTab={selectedTab}>
      </TabPanel>
      <TabPanel id="thirdTabPanel" tabId="Tab3" tabIndex={1} selectedTab={selectedTab}>
      </TabPanel>  
      <TabPanel id="fourthTabPanel" tabId="Tab4" tabIndex={1} selectedTab={selectedTab}>
      </TabPanel> */}
    </section>
    </div>
  );
}

export default App;
