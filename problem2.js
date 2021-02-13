var object = {name : 'RajiniKanth', age : 25, hasPets : true}

function printAllKeys(obj){
    let keys = [];
    for(let i in obj){
        keys.push(i);
    }
    console.log(keys);
}

printAllKeys(object);
