import React from 'react';
import './ToggleSwitch.css'

const ToggleSwitch = ({ isOn, handleToggle }) => {
    return (
        <div className="toggle-switch">
           <input 
                checked={isOn}
                onChange={handleToggle}
                className="switch-checkbox"
                id={"toggle"}
                type="checkbox"
           />
           <label
                style={{ background: isOn && '#3a2f2f', color: isOn && '#FFF', paddingRight: '5px'}}
                className="switch-label"
                htmlFor={"toggle"}
           >
                Light
                <span className="switch-button"/>
                Dark
           </label>
        </div>
    );
}

export default ToggleSwitch;