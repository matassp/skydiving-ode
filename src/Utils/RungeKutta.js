const rungeKutta = (func, x, y, limit, step) => {
    const solution = [];
    while (x < limit) {
        solution.push([x, y]);

        const k1 = step * func(x, y);
        const k2 = step * func(x + 0.5 * step, y + 0.5 * k1);
        const k3 = step * func(x + 0.5 * step, y + 0.5 * k2);
        const k4 = step * func(x + step, y + k3);

        y += (1.0 / 6.0) * (k1 + 2 * k2 + 2 * k3 + k4);
        x += step;
    }
    return solution;
}

const rungeKuttaHeight = (func, x, v, h, limit, step) => {
    const solution = [];
    while (x < limit) {
        solution.push([x, h]);

        const k1 = step * func(x, v);
        const k2 = step * func(x + 0.5 * step, v + 0.5 * k1);
        const k3 = step * func(x + 0.5 * step, v + 0.5 * k2);
        const k4 = step * func(x + step, v + k3);

        v += (1.0 / 6.0) * (k1 + 2 * k2 + 2 * k3 + k4);
        h -= step * v;
        x += step;
    }
    return solution;
}

export { rungeKutta, rungeKuttaHeight };