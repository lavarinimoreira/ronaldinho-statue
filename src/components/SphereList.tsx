import React from 'react';
import { TSphere } from '../model';
import { AiOutlineDelete } from 'react-icons/ai';

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
        <ul>
            <li>{`Units: ${units}`}</li>
            <li>{`Material: ${material}`}</li>
            <li>{`Weight: ${(Math.round(weight * 100) / 100).toFixed(
                2
            )}kg.`}</li>
            <li>{`Total: $ ${(Math.round(total * 100) / 100).toFixed(2)}`}</li>
            <span onClick={() => handleDeleteSphere(id)}>
                <AiOutlineDelete />
            </span>
        </ul>
    );
};

export default SphereList;
