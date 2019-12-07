const euler = (func, x, y, limit, step) => {
    const solution = [];
    while (x < limit) {
        solution.push([x, y]);
        y += step * func(x, y, step);
        x += step;
    }
    return solution;
}

const eulerHeight = (func, x, v, h, limit, step) => {
    const solution = [];
    while (x < limit) {
        solution.push([x, h]);
        v += step * func(x, v);
        h -= step * v;
        x += step;
    }
    return solution;
}

export { euler, eulerHeight };