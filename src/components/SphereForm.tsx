import React, { useState } from 'react';
import { ImSphere } from 'react-icons/im';
import './Form.css';
import { TSphere } from './../model';

interface Props {
    sphere: TSphere;
    setSphere: React.Dispatch<React.SetStateAction<TSphere>>;
    handleSphere: (e: React.FormEvent) => void;
}

const SphereForm: React.FC<Props> = ({ sphere, setSphere, handleSphere }) => {
    return (
        <form className="form" onSubmit={(e) => handleSphere(e)}>
            <h3>Sphere</h3>
            <h2>
                <ImSphere />
            </h2>

            <label htmlFor="radius-sphere">Radius (cm): </label>
            <input
                max="50"
                min="1"
                name="radius-sphere"
                id="radius-sphere"
                type="number"
                value={sphere.radius}
                onChange={(e) =>
                    setSphere({ ...sphere, radius: e.target.value })
                }
                required
            />

            <select
                name="material"
                required
                value={sphere.material || ''}
                onChange={(e) =>
                    setSphere({ ...sphere, material: e.target.value })
                }
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
                <label htmlFor="units-sphere">Units: </label>
                <input
                    max="10"
                    min="1"
                    id="units-sphere"
                    name="units-sphere"
                    type="number"
                    required
                    value={sphere.units}
                    onChange={(e) =>
                        setSphere({ ...sphere, units: e.target.value })
                    }
                />
                <button>Add</button>
            </div>
        </form>
    );
};

export default SphereForm;
