ciudades = ["Paris", "Madrid", "Montreal", "Lisboa", "Estambul"];

ciudades.sort((a,b) => {
 
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;
})

console.log(ciudades);