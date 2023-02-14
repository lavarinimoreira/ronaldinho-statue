import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { TCylinder } from '../model';
import './List.css';

interface Props extends TCylinder {
    handleDeleteCylinder: (id: string) => void;
}

const CylinderList: React.FC<Props> = ({
    material,
    units,
    weight,
    total,
    id,
    handleDeleteCylinder,
}) => {
    return (
        <div className="list">
            <ul>
                <li className="units">{`Units: ${units}`}</li>
                <li>{`${material}`}</li>
                <li>{`${(Math.round(weight * 100) / 100).toFixed(2)}kg.`}</li>
                <li className="dolar">{`$ ${(
                    Math.round(total * 100) / 100
                ).toFixed(2)}`}</li>
            </ul>
            <span onClick={() => handleDeleteCylinder(id)} title="Remove">
                <FaTrashAlt />
            </span>
        </div>
    );
};

export default CylinderList;
