var cat_array=['violent_crime','homicide','rape_revised','robbery','aggravated_assault','property_crime','burglary','larceny','motor_vehicle_theft']


document.addEventListener("DOMContentLoaded",function(){
    Promise.all([
        d3.csv('/dataset/Minimum Wage Data.csv'),
        d3.csv('/dataset/Unemployment in America Per US State.csv'),
        d3.csv('/dataset/cb_2014_us_state_5m.geojson'),
        d3.csv('/dataset/estimated_crimes_1979_2019.csv')
]).then(function(values){
        
    
    unemploy_data = values[1];
    crime_data = values[3];
    us_state = values[2];

    crime_data.map(function(f){
        f['aggravated_assault'] = +f['aggravated_assault']
        f['violent_crime'] = +f['violent_crime']
        f['rape_revised'] = +f['rape_revised']
        f['homicide'] = +f['homicide']
        f['robbery'] = +f['robbery']
        f['property_crime'] = +f['property_crime']
        f['burglary'] = +f['burglary']
        f['larceny'] = +f['larceny']
        f['motor_vehicle_theft'] = +f['motor_vehicle_theft']
        f['year'] = +f['year']
    })

    unemploy_data.map(function(u){
        u['Year']= + u['Year']
        u['unemployed percent'] =  +u['unemployed percent']
    })

    // console.log('unem',unemploy_data);
    // console.log('crime',crime_data);
    // console.log('us',us_state);

    cat_option = document.getElementById("cat-dd");
        // cat_option.innerHTML=""
    for (var i=0; i< cat_array.length; i++){
        header = cat_array[i]
        var el = document.createElement("option");
        el.textContent = header;
        el.value=  header;
        cat_option.appendChild(el)
    }


    // dataFilter();
    // mapPlot()
    })
})

function dataFilter(){
    
    
}


function mapPlot(){

}