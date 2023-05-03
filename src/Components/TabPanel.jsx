import React from 'react'

const TabPanel = ({id,Content,tabIndex,tabId}) => {
  return (
    <section role='tabpanel' id={id} tabIndex={tabIndex} aria-labelledby={tabId}>
        {Content}
    </section>
  )
}

export default TabPanel