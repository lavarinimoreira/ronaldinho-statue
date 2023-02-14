import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './List.css';

interface Props {
    material: string;
    units: string;
    weight: number;
    total: number;
    id: string;
    handleDelete: (id: string) => void;
}

const Item: React.FC<Props> = ({
    material,
    units,
    weight,
    total,
    id,
    handleDelete,
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
            <span onClick={() => handleDelete(id)} title="Remove">
                <FaTrashAlt />
            </span>
        </div>
    );
};

export default Item;
