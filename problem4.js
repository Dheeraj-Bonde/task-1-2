var array = ['GUVI', 'I', 'am', 'Geek'];

function transformFirstAndLast(arr){
    var object = {};
    arrlength = arr.length;
    object[arr[0]] = arr[arrlength-1];
    console.log(object);
}

transformFirstAndLast(array);