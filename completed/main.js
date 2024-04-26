document.addEventListener("DOMContentLoaded",function(){
    Promise.all([
        d3.csv('/dataset/Minimum Wage Data.csv'),
        d3.csv('/dataset/Unemployment in America Per US State.csv'),
        d3.csv('/dataset/cb_2014_us_state_5m.geojson'),
        d3.csv('/dataset/estimated_crimes_1979_2019.csv')
]).then(function(values){
        
    min_wage_data = values[0];
    unemploy_data = values[1];
    crime_data = values[3];
    us_state = values[2];

    console.log('wage',min_wage_data);
    console.log('unem',unemploy_data);
    console.log('crime',crime_data);
    console.log('us',us_state);


    })
})