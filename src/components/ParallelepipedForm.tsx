import React from 'react';
import { BsBox } from 'react-icons/bs';
import './Form.css';

const Parallelepiped = () => {
    return (
        <form className="form">
            <h3>Parallelepiped</h3>
            <h2>
                <BsBox />
            </h2>

            <label>Width (cm): </label>
            <input type="number" />

            <label>Heigth (cm): </label>
            <input type="number" />

            <label>Depth (cm): </label>
            <input type="number" />

            <select name="material" defaultValue="dv">
                <option disabled value="dv">
                    -- select the material --
                </option>
                <option key="steel" value="steel">
                    Steel
                </option>
                <option key="aluminium" value="aluminium">
                    Aluminum
                </option>
                <option key="copper" value="copper">
                    Copper
                </option>
            </select>
            <div>
                <label>Units: </label>
                <input type="number" />
                <button>Add</button>
            </div>
        </form>
    );
};

export default Parallelepiped;
