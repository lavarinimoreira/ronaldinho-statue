export const sphereWeight = (
    radiusStr: string,
    unitsStr: string,
    materialStr: string
) => {
    const radius: number = parseFloat(radiusStr);
    const units: number = parseFloat(unitsStr);

    const volume = (4 / 3) * Math.PI * radius;

    let density: number = 0;
    if(materialStr === 'aluminium') density = 2.7
    if(materialStr === 'copper') density = 9
    if(materialStr === 'steel') density = 7.8

    return (density * volume * units)/1000;
};

export const sphereTotal = (material: string, weight: number) => {
    let value: number = 0;

    if (material === 'steel') value = 4.30;
    if (material === 'aluminium') value = 6.30;
    if (material === 'copper') value = 37;

    return weight * value
}