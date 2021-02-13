var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(arr){
    var object = {};
    for(let i in arr){
        object[arr[i][0]] = arr[i][1];
    }
    console.log(object)
}

fromListToObject(array);