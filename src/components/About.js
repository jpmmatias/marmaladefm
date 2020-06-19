import React from 'react'
import Stat from './stat'

const About = props => {
    const playCounts =props.mixes.reduce((acc,current)=>
         acc+current.play_count,0
    )
    const seconds =props.mixes.reduce((acc,current)=>
    acc+(current.audio_length),0
)
    
    return (   
        <div className='ph3 ph4-l'>
            <div className='measure black center lh-copy f4 ph3'>
                <p className='mt0'>
                    Marmalade.fm features the latest and greatest in grooves, beats and world music.
                </p>
                <p>
                    Whether you’re into hip hop, trip hop, classic jazz, fusion jazz, afro beat or break beat… we have you covered!
                </p>
            </div>
            <div className='flex pt3 '>
                <Stat {...props} statName='Featuring…' statData={`${props.mixes.length} mixes`}/>
                <Stat {...props} statName='Played…' statData={`${playCounts} times`}/>
                <Stat {...props} statName='With…' statData={`${Math.floor(seconds)} seconds`}/>

            </div>
        </div>
    
    )
}

export default About
