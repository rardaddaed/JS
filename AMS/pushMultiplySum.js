function pushMultiplySum(vec,x) {
    vec.push(x);
    for (let i = 0; i < vec.length; i++){
        vec[i] = vec[i] * 2;
    }
    const reducer = (accumulator, curr) => accumulator + curr;
    return vec.reduce(reducer);
}
