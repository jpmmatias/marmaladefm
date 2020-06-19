import React from 'react'
import Mix from './Mix'

const Home =({mixes,...props}) => {
    return (
        <div className='flex flex-wrap justify-between mixes ph3'>
            {mixes.slice(0,6).map(mix=>{
                return(
                    <div className='mix mb4'>
                    <Mix name='Dirty Crates from the Bottom' {...mix }{...props} id={mix.key}/>
                </div>
                )
            })}
       
        </div>
    )
}

export default Home
