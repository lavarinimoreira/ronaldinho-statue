import React, { useState } from 'react';
import SphereForm from './components/SphereForm';
import CylinderForm from './components/CylinderForm';
import ParallelepipedForm from './components/ParallelepipedForm';
import { TSphere } from './model';
import { sphereWeight, sphereTotal } from './components/common/utils/functions';
import SphereList from './components/SphereList';
import { v4 as uuidv4 } from 'uuid';
import { BiCylinder } from 'react-icons/bi';
import { ImSphere } from 'react-icons/im';
import { BsBox } from 'react-icons/bs';
import { FaSortAmountUpAlt } from 'react-icons/fa';

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

        sphere.total = sphereTotal(sphere.material, sphere.weight);
        sphere.id = uuidv4();

        console.log(sphere);

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

    /** Parallelepiped Settings--------------------------------- */

    return (
        <div className="App">
            <div className="left">
                <SphereForm
                    handleSphere={handleSphere}
                    sphere={sphere}
                    setSphere={setSphere}
                />
                <CylinderForm />
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
