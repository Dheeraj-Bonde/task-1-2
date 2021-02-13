var expected = {foo: 5, bar: 6};
var actual = {foo: 8, bar: 6};

function assertObjectsEqual(act, exp, testcase){
    let elem1 = JSON.stringify(act);
    let elem2 = JSON.stringify(exp);
    if(elem1 == elem2){
        console.log('Passed');
    }
    else{
        console.log('Failed');
    }
}

assertObjectsEqual(actual, expected, 'detect that two objects are same');