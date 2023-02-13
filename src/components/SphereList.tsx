import React from 'react';
import { TSphere } from '../model';
import { FaTrashAlt } from 'react-icons/fa';
import './List.css';

interface Props extends TSphere {
    handleDeleteSphere: (id: string) => void;
}

const SphereList: React.FC<Props> = ({
    units,
    material,
    weight,
    total,
    id,
    handleDeleteSphere,
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
            <span onClick={() => handleDeleteSphere(id)} title="Remove">
                <FaTrashAlt />
            </span>
        </div>
    );
};

export default SphereList;
