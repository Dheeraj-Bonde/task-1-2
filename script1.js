var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var total_population = 0;

    for(let i in data)
    {
        total_population = total_population + +data[i].population;
    }
    console.log(total_population);
}
