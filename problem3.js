var object = {name: 'ISRO', age: 35, role: 'Scientist'};

function convertListToObject(obj){
    let arrofarr = [];
    for(let i in obj){
        arrofarr.push([i,obj[i]]);
    }
    console.log(arrofarr);
}

convertListToObject(object);