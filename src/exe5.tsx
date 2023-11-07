import React from "react"

export default function CompteurExo5(props: { onIncrement: () => void, onDecrement: () => void, value: number }){

    return (
        <div className="compteur">
            <div className="compteur-value">
                {props.value}
            </div>
            <div className="compteur-actions">
                <button 
                    className="compteur-actions-increment"
                    onClick={props.onDecrement}
                >-</button>
                <button 
                    className="compteur-actions-increment"
                    onClick={props.onIncrement}
                >+</button>
            </div>
        </div>
    )
}