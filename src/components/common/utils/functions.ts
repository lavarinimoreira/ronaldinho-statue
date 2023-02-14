/** Total $ value $ function -------------------------------------------- */
export const totalValue = (material: string, weight: number) => {
    let value: number = 0;

    if (material === 'steel') value = 4.30;
    if (material === 'aluminium') value = 6.30;
    if (material === 'copper') value = 37;

    return weight * value
}

/** Sphere functions----------------------------------------------------- */
export const sphereWeight = (
    radiusStr: string,
    unitsStr: string,
    materialStr: string
) => {
    const radius: number = parseFloat(radiusStr);
    const units: number = parseFloat(unitsStr);

    const volume = (4 / 3) * Math.PI * (radius * radius * radius);

    let density: number = 0;
    if(materialStr === 'aluminium') density = 2.7
    if(materialStr === 'copper') density = 9
    if(materialStr === 'steel') density = 7.8

    return (density * volume * units)/1000;
};

/** Cylinder functions--------------------------------------------------- */
export const cylinderWeight = (
    radiusStr: string,
    unitsStr: string,
    heightStr: string,
    materialStr: string
) => {
    const radius: number = parseFloat(radiusStr);
    const units: number = parseFloat(unitsStr);
    const heigth: number = parseFloat(heightStr);

    const volume = Math.PI * (radius * radius) * heigth;

    let density: number = 0;
    if(materialStr === 'aluminium') density = 2.7
    if(materialStr === 'copper') density = 9
    if(materialStr === 'steel') density = 7.8

    return (density * volume * units)/1000;
};

/** Parallelepiped functions--------------------------------------------------- */
export const parallelepipedWeight = (
    unitsStr: string,
    heightStr: string,
    materialStr: string,
    widthStr: string,
    depthStr: string
) => {
    const units: number = parseFloat(unitsStr);
    const heigth: number = parseFloat(heightStr);
    const width: number = parseFloat(widthStr);
    const depth: number = parseFloat(depthStr);

    const volume = heigth * width * depth;

    let density: number = 0;
    if(materialStr === 'aluminium') density = 2.7
    if(materialStr === 'copper') density = 9
    if(materialStr === 'steel') density = 7.8

    return (density * volume * units)/1000;
};
