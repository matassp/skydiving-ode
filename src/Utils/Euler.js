const getPointsEuler = (func, x, y, limit, step) => {
    const solution = [];
    while (x < limit) {
        solution.push([x, y]);
        y += step * func(x, y);
        x += step;
    }
    return solution;
}

export default getPointsEuler;