import React from 'react';
import { BiCylinder } from 'react-icons/bi';
import { TCylinder } from '../model';
import './Form.css';

interface Props {
    cylinder: TCylinder;
    setCylinder: React.Dispatch<React.SetStateAction<TCylinder>>;
    handleCylinder: (e: React.FormEvent) => void;
}

const Cylinder: React.FC<Props> = ({
    cylinder,
    setCylinder,
    handleCylinder,
}) => {
    return (
        <form className="form" onSubmit={(e) => handleCylinder(e)}>
            <h3>Cylinder</h3>
            <h2>
                <BiCylinder />
            </h2>
            <label htmlFor="radius-cylinder">Radius (cm): </label>
            <input
                max="10"
                min="1"
                name="radius-cylinder"
                id="radius-cylinder"
                type="number"
                value={cylinder.radius}
                onChange={(e) =>
                    setCylinder({ ...cylinder, radius: e.target.value })
                }
                required
            />

            <label htmlFor="height-cylinder">Height (cm): </label>
            <input
                max="100"
                min="1"
                name="height-cylinder"
                id="height-cylinder"
                type="number"
                value={cylinder.height}
                onChange={(e) =>
                    setCylinder({ ...cylinder, height: e.target.value })
                }
                required
            />

            <select
                name="material"
                value={cylinder.material || ''}
                onChange={(e) =>
                    setCylinder({ ...cylinder, material: e.target.value })
                }
                required
            >
                <option disabled value="">
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
                <label htmlFor="units-cylinder">Units:</label>
                <input
                    max="10"
                    min="1"
                    name="units-cylinder"
                    id="units-cylinder"
                    type="number"
                    value={cylinder.units}
                    onChange={(e) =>
                        setCylinder({ ...cylinder, units: e.target.value })
                    }
                    required
                />

                <button>Add</button>
            </div>
        </form>
    );
};

export default Cylinder;
