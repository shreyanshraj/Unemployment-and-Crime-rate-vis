var cat_array=['violent_crime','homicide','sexual_assault','robbery','aggravated_assault','property_crime','burglary','larceny','motor_vehicle_theft']


document.addEventListener("DOMContentLoaded",function(){
    Promise.all([
        d3.csv('/dataset/Unemployment in America Per US State.csv'),
        d3.json('/dataset/cb_2014_us_state_5m.geojson'),
        d3.csv('/dataset/estimated_crimes_1979_2019.csv')
]).then(function(values){
        
    
    unemploy_data = values[0];
    crime_data = values[2];
    us_state = values[1];

    crime_data.map(function(f){
        f['aggravated_assault'] = +f['aggravated_assault']
        f['violent_crime'] = +f['violent_crime']
        f['sexual_assault'] = +f['sexual_assault']
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
    console.log('us',us_state);

    // cat_option = document.getElementById("cat-dd");
    //     // cat_option.innerHTML=""
    // for (var i=0; i< cat_array.length; i++){
    //     header = cat_array[i]
    //     var el = document.createElement("option");
    //     el.textContent = header;
    //     el.value=  header;
    //     cat_option.appendChild(el)
    // }


    // dataFilter();
    mapPlot()
    })
})

function dataFilter(){
    
    
}

const margin = { top: 10, right: 10, bottom: 10, left: 10 };
        width = 1000 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

// initial chloropleth map is based on state employment figures for year 2019
//based on state selected by user, we will generate bar graph showing different crimes in that city
function mapPlot(){
    // console.log('ca');
    const data = new Map();
    const colorScale = d3.scaleThreshold([1, 1], ["red", "white", "blue"]);
    const path = d3.geoPath();
    const projection = d3.geoMercator()
      .scale(700)
      .center([-450,35])
      .translate([width / 2, height / 2]);
    var svg_hm = d3.select("#svg_main")
    let topo = us_state
    // console.log(topo);
    svg_hm.append("g")
        .selectAll("path")
        .data(topo.features)
        .enter()
        .append("path")
          // draw each country
          .attr("d", d3.geoPath()
            .projection(projection)
          )
          // set the color of each country
          .attr("fill", function (d) {
            d.total = data.get(d.id) || 0;
            return colorScale(d.total);
          })
          .style("stroke", "transparent")
          .attr("class", function(d){ return "States" } )
          .style("opacity", 1)
        //   .on("mouseover", mouseOver )
        //   .on("mouseleave", mouseLeave )
        //   .on("click",mouseclick)
}