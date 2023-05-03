const Tab = ({id,index,selectedTab,tabPanelId,title,handleChange,tabRef}) => {
    const handleClick = () => handleChange(index)
    return (
    <div>
      <button 
      ref={tabRef}
      role="tab" 
      id={id} 
      aria-selected={selectedTab.index === index} 
      aria-controls={tabPanelId}
      onClick={()=>handleClick(index)}
      tabIndex={selectedTab.index===index ? 0 : -1
    }
      >
        {title}
      </button>
     </div>
    )
}

export default Tab;