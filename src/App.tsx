import React, { useEffect, useState } from 'react';
import SphereForm from './components/SphereForm';
import CylinderForm from './components/CylinderForm';
import ParallelepipedForm from './components/ParallelepipedForm';
import { TCylinder, TParallelepiped, TSphere } from './model';
import {
    totalValue,
    sphereWeight,
    cylinderWeight,
    parallelepipedWeight,
} from './components/common/utils/functions';
import { v4 as uuidv4 } from 'uuid';
import { BiCylinder } from 'react-icons/bi';
import { ImSphere } from 'react-icons/im';
import { BsBox } from 'react-icons/bs';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import Item from './components/Item';
import { BsCart4 } from 'react-icons/bs';
import ConfettiExplosion from 'react-confetti-explosion';
import { GiReturnArrow } from 'react-icons/gi';
import Footer from './components/Footer';

function App() {
    const [total, setTotal] = useState<number>(0);
    const [cartItems, setCartItems] = useState<number>(0);
    const [totalWeight, setTotalWeight] = useState<number>(0);

    /** Sphere Settings---------------------------------------------------------- */
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

    /** Cylinder Settings--------------------------------------------------------- */
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

    /** Parallelepiped Settings------------------------------------------------- */
    const [parallelepiped, setParallelepiped] = useState<TParallelepiped>({
        height: '',
        width: '',
        depth: '',
        material: '',
        units: '',
        weight: 0,
        total: 0,
        id: '',
    });
    const [parallelepipeds, setParallelepipeds] = useState<TParallelepiped[]>(
        []
    );

    const handleParallelepiped = (e: React.FormEvent) => {
        e.preventDefault();

        if (
            parseInt(parallelepiped.width) <= 0 ||
            parseInt(parallelepiped.units) <= 0 ||
            parseInt(parallelepiped.height) <= 0 ||
            parseInt(parallelepiped.depth) <= 0
        )
            return;

        parallelepiped.weight = parallelepipedWeight(
            parallelepiped.units,
            parallelepiped.height,
            parallelepiped.material,
            parallelepiped.width,
            parallelepiped.depth
        );

        parallelepiped.total = totalValue(
            parallelepiped.material,
            parallelepiped.weight
        );
        parallelepiped.id = uuidv4();

        setParallelepipeds([...parallelepipeds, parallelepiped]);
        setParallelepiped({
            height: '',
            width: '',
            depth: '',
            material: '',
            units: '',
            weight: 0,
            total: 0,
            id: '',
        });
    };

    const handleDeleteParallelepiped = (id: string) => {
        setParallelepipeds(
            parallelepipeds.filter((parallelepiped) => parallelepiped.id !== id)
        );
    };

    /** UseEffect ----------------------------------------------------------- */

    useEffect(() => {
        const totalSpheres = spheres.reduce((result, currentSphere) => {
            return result + currentSphere.total;
        }, 0);
        const totalCylinders = cylinders.reduce((result, currentCylinder) => {
            return result + currentCylinder.total;
        }, 0);
        const totalParallelepipeds = parallelepipeds.reduce(
            (result, currentParallelepipeds) => {
                return result + currentParallelepipeds.total;
            },
            0
        );

        setCartItems(
            spheres.length + cylinders.length + parallelepipeds.length
        );

        setTotal(totalSpheres + totalCylinders + totalParallelepipeds);
    }, [spheres, cylinders, parallelepipeds]);

    const [isExploding, setIsExploding] = React.useState(false);

    const handleCartSubmit = () => {
        setIsExploding(true);
        const totalWeightSpheres = spheres.reduce((result, currentSphere) => {
            return result + currentSphere.weight;
        }, 0);
        const totalWeightCylinders = cylinders.reduce(
            (result, currentCylinder) => {
                return result + currentCylinder.weight;
            },
            0
        );
        const totalWeightParallelepipeds = parallelepipeds.reduce(
            (result, currentParallelepiped) => {
                return result + currentParallelepiped.weight;
            },
            0
        );

        setTotalWeight(
            totalWeightSpheres +
                totalWeightCylinders +
                totalWeightParallelepipeds
        );
    };

    const handleReturn = () => {
        setTotalWeight(0);
        setIsExploding(false);
    };

    return (
        <main>
            <div className="App">
                {isExploding && totalWeight > 0 && (
                    <div className="all">
                        <div className="confetti">
                            <h2>Congrats!</h2>
                            <p>
                                You built a{' '}
                                {(Math.round(totalWeight * 100) / 100).toFixed(
                                    2
                                )}
                                kg statue!
                            </p>
                            <ConfettiExplosion duration={5000} />
                            <button
                                title="Return"
                                onClick={() => handleReturn()}
                            >
                                <GiReturnArrow />
                            </button>
                        </div>
                    </div>
                )}
                ;
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
                    <ParallelepipedForm
                        handleParallelepiped={handleParallelepiped}
                        parallelepiped={parallelepiped}
                        setParallelepiped={setParallelepiped}
                    />
                </div>
                <div className="right">
                    <h1>Ronaldinho Statue</h1>

                    <h2 className="sc">Shopping Cart</h2>
                    <span>
                        {cartItems} item{cartItems === 1 ? '' : 's'} in cart
                    </span>
                    <div className="shopping-cart">
                        <div className="objects-cart">
                            <h3>Sphere</h3>
                            <h2>
                                <ImSphere />
                            </h2>
                            {spheres.map((item) => (
                                <Item
                                    key={item.id}
                                    units={item.units}
                                    material={item.material}
                                    weight={item.weight}
                                    total={item.total}
                                    id={item.id}
                                    handleDelete={handleDeleteSphere}
                                />
                            ))}
                        </div>
                        {/* <div className="line"></div> */}
                        <div className="objects-cart">
                            <h3>Cylinder</h3>
                            <h2>
                                <BiCylinder />
                            </h2>
                            {cylinders.map((item) => (
                                <Item
                                    key={item.id}
                                    units={item.units}
                                    material={item.material}
                                    weight={item.weight}
                                    total={item.total}
                                    id={item.id}
                                    handleDelete={handleDeleteCylinder}
                                />
                            ))}
                        </div>
                        {/* <div className="line"></div> */}
                        <div className="objects-cart">
                            <h3>Parallelepiped</h3>
                            <h2>
                                <BsBox />
                            </h2>
                            {parallelepipeds.map((item) => (
                                <Item
                                    key={item.id}
                                    units={item.units}
                                    material={item.material}
                                    weight={item.weight}
                                    total={item.total}
                                    id={item.id}
                                    handleDelete={handleDeleteParallelepiped}
                                />
                            ))}
                        </div>
                        {/* <div className="line"></div> */}
                        <div className="object-total">
                            <h3>Total</h3>
                            <h2>
                                <FaSortAmountUpAlt />
                            </h2>
                            <div className="total">
                                ${(Math.round(total * 100) / 100).toFixed(2)}
                            </div>
                            <button
                                onClick={() => handleCartSubmit()}
                                className="btn-cart"
                                title="Orderer"
                            >
                                <BsCart4 />
                            </button>
                        </div>
                    </div>
                    {!cartItems ? (
                        <div className="message-empty-cart">
                            Your cart is empty. Keep shopping to build the
                            Ronaldinho Statue!
                        </div>
                    ) : null}
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default App;
