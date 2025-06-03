import React from 'react'
import '../App.css'
const Filters = ({currentFilter, onChange}) => {
  return ( <div className='filters'>
      {['all', 'active', 'completed'].map((f) => (
          <button
              key={f}  //Each button gets a unique key based on the filter name (f = 'all', 'active', 'completed').
              onClick={() => onChange(f)}
              style={{fontWeight:currentFilter===f ? 'bold': 'normal'}}
          >
              {f}
          </button>
      ))}
      
</div>
  )
}

export default Filters