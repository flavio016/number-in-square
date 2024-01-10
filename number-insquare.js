square()
function square(nr) {//function declaration mundt te thirret ne fillim dhe me pas te krijohet Hoisting
    return nr * nr
}

var valute = square(5)
console.log(valute)




let ngritNeKatror = function(nr) {//function expression deklarohet si nje vler e shprehjes dhe num mund te thiret ne fillim
    return nr * nr;
};


let rezultati = ngritNeKatror(3);
console.log(rezultati); 
