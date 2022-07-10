function sumCubes(n){
    // ...
    let sumn = 0;
  
    for (let i = 1; i <= n; i++) {
      //sumn += Math.pow(i, 3);
      sumn += i ** 3
    }
    return sumn;
  }