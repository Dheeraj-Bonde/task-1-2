var array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

function transformEmployeeData(arr){
    let tranformEmployeeList = [];
    for(let i in arr){
        tranformEmployeeList[i] = {};
        for(let j in arr[i]){
            tranformEmployeeList[i][arr[i][j][0]] = arr[i][j][1];
        }
    }
    return tranformEmployeeList;
}

console.log(transformEmployeeData(array))
