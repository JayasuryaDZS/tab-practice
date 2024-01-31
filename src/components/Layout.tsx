import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeTabs } from '../slices/tabs/reducer'

const Layout = (props: any) => {
  const { tabs } = useSelector((state: any) => state.TabReducer)
  const dispatch = useDispatch()
  const headStyle= {
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '6vh',
    alignItems: 'center',
    padding: '0px 15px'
  }
  const headWrapStyle = {}
  const bodyStyle={
    border: '2px solid red',
    minHeight: '94vh'
  }
  const tabStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '120px',
    border: '1px solid black',
    marginRight: '10px'
  }
  const tabParent = {
    display: 'flex',
  }
  const removeTab = (data: any) => {
    dispatch(removeTabs(data))
  }
  return (
    <div style={headWrapStyle}>
      <div style={headStyle}>
          <h2>Dynamic Tabs</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
              <Link to="/refering-provider">Refering Provider</Link>
              <Link to="/cpt-code">CptCode</Link>
          </div>
      </div>
        <div style={bodyStyle}>
          {/* Tabs Adding and removing */}
          <div style={tabParent}>
            { tabs.length > 0 
            ? (tabs).map((tab: any, idx: number) => (
              <div key={idx} style={tab.active ? { ...tabStyle, border: '2px solid red' } : { ...tabStyle }}>
                <span>{tab.title}</span>
                <button onClick={() => { removeTab(tab) }}>X</button>
              </div>
            ) ) 
            : null}
          </div>
          <div>
            {props.children}
          </div>
        </div>
    </div>
  )
}

export default Layout;