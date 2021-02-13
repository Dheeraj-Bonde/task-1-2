var object = {name: 'RajiniKanth', age: 33, hasPets : false};

function printAllValues(input){
    let arr = [];
    for(let i in input){
        arr.push(input[i]);
    }
    console.log(arr);
}
printAllValues(object);