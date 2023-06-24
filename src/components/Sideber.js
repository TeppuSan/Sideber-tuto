import React from 'react'
import { SideberDate } from './SideberDate'
import SideberIcon from './SideberIcon'

const Sideber = () => {
  return (
    <div className='Sideber'>
        <SideberIcon />
        <ul className='SideberList'>
            {SideberDate.map((value, key) => {
                return (
                    <li key={key}
                    id={window.location.pathname == value.link ? 'active' : ''}
                    className='row'
                    onClick={()=>
                        window.location.pathname = value.link
                    }>
                        <div id='icon'>{value.icon}</div>
                        <div id='title'>{value.title}</div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Sideber