import './Switch.css'
import { useState } from 'react'

export const Switch = (props) => {

    const [activated, setActivated] = useState(false)

    const switched = () => {
        console.log('switched')
        setActivated(!activated)
        props.onSwitch()

    }

    return (
        <div className={props.switchFieldClass}>
            <p>{activated === false ? props.tag : props.activatedTag}</p>
            <div onClick={switched} className={`switch ${activated ? 'activated' : ''}`}>
                <button></button>
                <span></span>
            </div>
        </div>
    )
}