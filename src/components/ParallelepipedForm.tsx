import React from 'react';
import { BsBox } from 'react-icons/bs';
import { TParallelepiped } from '../model';
import './Form.css';

interface Props {
    parallelepiped: TParallelepiped;
    setParallelepiped: React.Dispatch<React.SetStateAction<TParallelepiped>>;
    handleParallelepiped: (e: React.FormEvent) => void;
}

const Parallelepiped: React.FC<Props> = ({
    parallelepiped,
    setParallelepiped,
    handleParallelepiped,
}) => {
    return (
        <form className="form" onSubmit={(e) => handleParallelepiped(e)}>
            <h3>Parallelepiped</h3>
            <h2>
                <BsBox />
            </h2>

            <label htmlFor="width-p">Width (cm): </label>
            <input
                max="100"
                min="1"
                id="width-p"
                name="width-p"
                type="number"
                value={parallelepiped.width}
                onChange={(e) =>
                    setParallelepiped({
                        ...parallelepiped,
                        width: e.target.value,
                    })
                }
                required
            />

            <label htmlFor="height-p">Height (cm): </label>
            <input
                max="100"
                min="1"
                id="height-p"
                name="height-p"
                type="number"
                value={parallelepiped.height}
                onChange={(e) =>
                    setParallelepiped({
                        ...parallelepiped,
                        height: e.target.value,
                    })
                }
                required
            />

            <label htmlFor="depth-p">Depth (cm): </label>
            <input
                max="100"
                min="1"
                id="depth-p"
                name="depth-p"
                type="number"
                value={parallelepiped.depth}
                onChange={(e) =>
                    setParallelepiped({
                        ...parallelepiped,
                        depth: e.target.value,
                    })
                }
                required
            />

            <select
                name="material"
                value={parallelepiped.material || ''}
                onChange={(e) =>
                    setParallelepiped({
                        ...parallelepiped,
                        material: e.target.value,
                    })
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
                <label htmlFor="units-p">Units: </label>
                <input
                    max="10"
                    id="units-p"
                    name="units-p"
                    type="number"
                    value={parallelepiped.units}
                    onChange={(e) =>
                        setParallelepiped({
                            ...parallelepiped,
                            units: e.target.value,
                        })
                    }
                    required
                />
                <button>Add</button>
            </div>
        </form>
    );
};

export default Parallelepiped;
