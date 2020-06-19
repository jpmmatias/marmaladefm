import React from 'react'

const stat = ({statName,statData,...props}) => {
    return (
        
        <div className='w-third tc pa3 ba bw2 b--light-gray ' style={{marginRight:-2}}>
            <div className='f6 biryani ttu'>{statName}</div>
            <div className='f5 b biryani-black tracked ttu'>{statData}</div>
        </div>
    )
}

export default stat
