import React, { useState } from 'react';
import SphereForm from './components/SphereForm';
import CylinderForm from './components/CylinderForm';
import ParallelepipedForm from './components/ParallelepipedForm';
import { TSphere } from './model';

function App() {
    /** Sphere Settings------------------------------------------ */
    const [sphere, setSphere] = useState<TSphere>({
        radius: '0',
        material: '',
        units: '0',
    });
    const [spheres, setSpheres] = useState<TSphere[]>([]);

    const handleSphere = (e: React.FormEvent) => {
        e.preventDefault();

        setSpheres([...spheres, sphere]);
        setSphere({
            radius: '0',
            material: '',
            units: '0',
        });
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
            </div>
        </div>
    );
}

export default App;
