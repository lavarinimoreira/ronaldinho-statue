import React, { useState } from 'react';
import SphereForm from './components/SphereForm';
import CylinderForm from './components/CylinderForm';
import ParallelepipedForm from './components/ParallelepipedForm';
import { TCylinder, TSphere } from './model';
import {
    totalValue,
    sphereWeight,
    cylinderWeight,
} from './components/common/utils/functions';
import SphereList from './components/SphereList';
import { v4 as uuidv4 } from 'uuid';
import { BiCylinder } from 'react-icons/bi';
import { ImSphere } from 'react-icons/im';
import { BsBox } from 'react-icons/bs';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import CylinderList from './components/CylinderList';

function App() {
    /** Sphere Settings------------------------------------------ */
    const [sphere, setSphere] = useState<TSphere>({
        radius: '',
        material: '',
        units: '',
        weight: 0,
        total: 0,
        id: '',
    });
    const [spheres, setSpheres] = useState<TSphere[]>([]);

    const handleSphere = (e: React.FormEvent) => {
        e.preventDefault();

        if (parseInt(sphere.radius) <= 0 || parseInt(sphere.units) <= 0) return;

        sphere.weight = sphereWeight(
            sphere.radius,
            sphere.units,
            sphere.material
        );

        sphere.total = totalValue(sphere.material, sphere.weight);
        sphere.id = uuidv4();

        setSpheres([...spheres, sphere]);
        setSphere({
            radius: '',
            material: '',
            units: '',
            weight: 0,
            total: 0,
            id: '',
        });
    };

    const handleDeleteSphere = (id: string) => {
        setSpheres(spheres.filter((sphere) => sphere.id !== id));
    };

    /** Cylinder Settings--------------------------------------- */
    const [cylinder, setCylinder] = useState<TCylinder>({
        radius: '',
        height: '',
        material: '',
        units: '',
        weight: 0,
        total: 0,
        id: '',
    });
    const [cylinders, setCylinders] = useState<TCylinder[]>([]);

    const handleCylinder = (e: React.FormEvent) => {
        e.preventDefault();

        if (
            parseInt(cylinder.radius) <= 0 ||
            parseInt(cylinder.units) <= 0 ||
            parseInt(cylinder.height) <= 0
        )
            return;

        cylinder.weight = cylinderWeight(
            cylinder.radius,
            cylinder.units,
            cylinder.height,
            cylinder.material
        );

        cylinder.total = totalValue(cylinder.material, cylinder.weight);
        cylinder.id = uuidv4();

        console.log(cylinder);

        setCylinders([...cylinders, cylinder]);
        setCylinder({
            radius: '',
            height: '',
            material: '',
            units: '',
            weight: 0,
            total: 0,
            id: '',
        });
    };

    const handleDeleteCylinder = (id: string) => {
        setCylinders(cylinders.filter((cylinder) => cylinder.id !== id));
    };

    /** Parallelepiped Settings--------------------------------- */

    return (
        <div className="App">
            <div className="left">
                <SphereForm
                    handleSphere={handleSphere}
                    sphere={sphere}
                    setSphere={setSphere}
                />
                <CylinderForm
                    handleCylinder={handleCylinder}
                    cylinder={cylinder}
                    setCylinder={setCylinder}
                />
                <ParallelepipedForm />
            </div>
            <div className="right">
                <h1>Ronaldinho Statue</h1>
                <h2 className="sc">Shopping Cart</h2>
                <span>0 items in cart</span>
                <div className="shopping-cart">
                    <div>
                        <h3>Sphere</h3>
                        <h2>
                            <ImSphere />
                        </h2>
                        {spheres.map((item) => (
                            <SphereList
                                key={item.id}
                                units={item.units}
                                material={item.material}
                                weight={item.weight}
                                total={item.total}
                                radius={''}
                                id={item.id}
                                handleDeleteSphere={handleDeleteSphere}
                            />
                        ))}
                    </div>
                    {/* <div className="line"></div> */}
                    <div>
                        <h3>Cylinder</h3>
                        <h2>
                            <BiCylinder />
                        </h2>
                        {cylinders.map((item) => (
                            <CylinderList
                                key={item.id}
                                units={item.units}
                                material={item.material}
                                weight={item.weight}
                                total={item.total}
                                height={item.height}
                                radius={''}
                                id={item.id}
                                handleDeleteCylinder={handleDeleteCylinder}
                            />
                        ))}
                    </div>
                    {/* <div className="line"></div> */}
                    <div>
                        <h3>Parallelepiped</h3>
                        <h2>
                            <BsBox />
                        </h2>
                    </div>
                    {/* <div className="line"></div> */}
                    <div>
                        <h3>Total</h3>
                        <h2>
                            <FaSortAmountUpAlt />
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
