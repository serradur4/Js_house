function matrixProduct(a, nCols, nRows){
    let product = 1;
    for(let i = 0; i < nRows ; i++){
        for(let j = 0; j < nCols; j++){
            product *= a[j + i * nCols]
        }
    }
    return product;

}
