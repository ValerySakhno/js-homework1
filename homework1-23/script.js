var term = {
    Belarus: 0,
    Israel: 30,
    Japan: 15,
    Spain: 20,
    Ukraina: 5.
}

var i = 0;
var sum = 0;
for(var country in term){
    sum += term[country] 
    i++;
}
console.log(sum/i);


function Maximum(obj){
    var max;
    for(var key in obj){
        if(max < obj[key] || max === undefined){
            max = obj[key];
        }
    }
    return max;
}

console.log(Maximum(term));