var number = [1, 3, 5, 9];

function sum(x) {
    var result = 0;
    
    for (var num of x) {
        result = result + num;
    }
    
    return result;
}

console.log(sum(number));