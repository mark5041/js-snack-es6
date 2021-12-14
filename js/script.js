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

function filterArray(min, max, num)
{
    if(num > min && num < max)
    {
        return num;
    }
    else
    {
        return null
    }
}

let numFiltred = Obj_1.filter((element) => {
    let ObjEl = filterArray(10, 20, element);
    if(ObjEl != null)
        return ObjEl;
});

console.log(numFiltred);