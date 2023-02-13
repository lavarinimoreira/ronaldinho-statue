import React, { useState } from 'react';
import SphereForm from './components/SphereForm';
import CylinderForm from './components/CylinderForm';
import ParallelepipedForm from './components/ParallelepipedForm';
import { TSphere } from './model';
import { sphereWeight, sphereTotal } from './components/common/utils/functions';
import SphereList from './components/SphereList';
import uuid from 'react-uuid';

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
        sphere.id = uuid();

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
                {spheres.map((item) => (
                    <SphereList
                        key={item.weight}
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
        </div>
    );
}

export default App;
