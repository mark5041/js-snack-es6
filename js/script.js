// Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, 
// un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

function generateRanNumArray(maxNum)
{
    let num = [];
    for(let i = 0; i < maxNum; i++)
    {
        num.push(Math.floor(Math.random() * 100));
    }
    console.log(num);
    return num;
}

const Obj_1 = generateRanNumArray(20);

let numFiltred = arrayFiltred(3, 7, Obj_1);

function arrayFiltred(min, max, array) {
    let numFiltred = array.filter((element, index) => {
        return index >= min && index <= max;
    });
    return numFiltred;
}

console.log(numFiltred);