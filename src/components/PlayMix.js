import React from 'react'

const PlayMix = ({playMix,id,children, playing,currentmix}) => {
    return (
        <div className={`pointer ${id===currentmix &&playing? 'playing':''} `}onClick={()=>playMix(id)}>
            {children}
            
        </div>
    )
}

export default PlayMix
