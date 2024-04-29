

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
        // u['Year']= + u['Year']
        u['unemployed percent'] =  +u['unemployed percent']
    })

    console.log('unem',unemploy_data);
    // console.log('crime',crime_data);
    console.log('us',us_state);

    // dataFilter();
    mapPlot()
    })
})


const margin = { top: 10, right: 10, bottom: 10, left: 10 };
        width = 1000 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;
var cat_array=['violent_crime','homicide','sexual_assault','robbery','aggravated_assault','property_crime','burglary','larceny','motor_vehicle_theft']
// initial chloropleth map is based on state employment figures for year 2019
//based on state selected by user, we will generate bar graph showing different crimes in that city
function mapPlot(){
    // console.log('ca');
   
    var svg_hm = d3.select("#svg_main")
    let topo = us_state
    // console.log(topo);

    let mouseleave = function(d) {
      d3.selectAll("States")
        .transition()
        .duration(200)
        .style("opacity", .8)
      d3.select(this)
        .transition()
        .duration(200)
        .style("stroke", "transparent")
      // d3.selectAll('#svg_sec>*').remove()
    }
  
    let mouseclick = function(event, d){
      // console.log('test',d);
      bargraph_data=[]
      d3.select(this)
        .transition()
        .duration(200)
        .style("stroke", "red")
      barGraph(d)
    }

    let mouseover = function(d) {
      d3.selectAll("States")
        .transition()
        .duration(200)
        .style("opacity", .5)
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "black")
    }

    svg_hm.append("g")
        .selectAll("path")
        .data(topo.features)
        .enter()
        .append("path")
          // draw each state
          .attr("d", d3.geoPath()
            .projection(projection)
          )
          // set the color of each state
          .attr("fill", function (d) {
            d.total = get_val(d.properties.NAME)
            return colorScale(d.total);
          })
          .style("stroke", "transparent")
          .attr("class", function(d){ return "States" } )
          .style("opacity", 1)
          .on("mouseover", mouseover )
          .on("mouseleave", mouseleave )
          .on("click",mouseclick)

    // add color legend
      svg_hm.selectAll(".firstrow")
      .data([2,2.5,3,3.5,4,4.5,5,5.5])
      .enter()
      .append("circle")
      .attr("cx", function(d,i){return 600 + i*30})
      .attr("cy", 20)
      .attr("r", 10)
      .attr("fill", function(d){return colorScale(d) })
    
        svg_hm.append('text')
        // .attr('transform','rotate(90)')
        .attr('y',45)
        .attr('class', 'label_lt1')
        .attr('x',width/2+110)
        .style('text-anchor','middle')
        .text('2.1' )

        svg_hm.append('text')
        // .attr('transform','rotate(90)')
        .attr('y',45)
        .attr('class', 'label_lt1')
        .attr('x',width/2+290)
        .style('text-anchor','middle')
        .text('5.5' )

        svg_hm.append('text')
        // .attr('transform','rotate(90)')
        .attr('y',25)
        .attr('class', 'label_t')
        .attr('x',width/2-120)
        .style('text-anchor','middle')
        .text('Chloropleth Map of unemployment in 2019' )

        svg_hm.append('text')
        // .attr('transform','rotate(90)')
        .attr('y',45)
        .attr('class', 'label-lt')
        .attr('x',width/2+200)
        .style('text-anchor','middle')
        .text('(Range of unemployment)' )
}

const data = new Map();
const colorScale = d3.scaleThreshold()
  .domain([2,2.5,3,3.5,4,4.5,5,5.5])
  .range(d3.schemeBlues[7]);
const path = d3.geoPath();
const projection = d3.geoMercator()
  .scale(700)
  .center([-450,35])
  .translate([width / 2, height / 2]);

  
function get_val(name){
  for (let i = 0;i<unemploy_data.length ; i++){
    if (unemploy_data[i]['State/Area'] == name){
      // console.log('yes',unemploy_data[i]['unemployed percent']);
      return unemploy_data[i]['unemployed percent']
    }
    
    
  }
}
var state_name;
var bargraph_data=[]
function barGraph(data){
  // console.log(data);


  const margin = {top: 20, right: 30, bottom: 40, left: 60},
    width_bc = 450 - margin.left - margin.right,
    height_bc = 400 - margin.top - margin.bottom;

  
  state_name = data.properties.NAME
  // console.log(state_name);


  crime_data.forEach(element => {
    // console.log(element['state_name']);
    if (element['state_name'] == state_name){
      bargraph_data.push(element)
    }
  });

  d3.selectAll('#svg_sec>*').remove()
  // console.log(bargraph_data[0]);
  svg_bg = d3.select('#svg_sec')

  var bargraph_data_arr = Object.entries(bargraph_data[0])
  
  // console.log(bargraph_data_arr);
  let bg_rect_arr = [];
  var bp_crime ;
  var bp_crime_n ;
  let tot_count = 0
  let max_val =0;
  bargraph_data_arr.forEach(function(f){
    // console.log(f);
    if (cat_array.includes(f[0])){
      // console.log(f[1]);
      tot_count += f[1]
      if (f[1]>= max_val){
        max_val = f[1]
      }
    }
  })

  for(var i=2;i<bargraph_data_arr.length;i++){
    // console.log(bargraph_data_arr[i][1]);
    bp_crime = bargraph_data_arr[i][0]
    // bp_crime_n = (bargraph_data_arr[i][1]/tot_count)*100
    bp_crime_n = bargraph_data_arr[i][1]
    bg_rect_arr.push({'Name':bp_crime, value : bp_crime_n})
  }

  // bg_rect_arr = barg
  const x = d3.scaleBand()
  .range([ 0, width_bc ])
  .domain(bg_rect_arr.map(d => d.Name))
  .padding(0.2)


  // console.log(bargraph_data_arr);
  // console.log('max',max_val);
  var y = d3.scaleLinear()
  .domain([0, max_val+5000])
  .range([ height_bc,0])
  .nice()

  svg_bg.append("g")
        .attr("transform", `translate(150, ${height_bc+50})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

  svg_bg.append("g")
  .call(d3.axisLeft(y))
  .attr("transform", `translate(150, 50)`)
  
  // console.log('bg',bg_rect_arr);

  svg_bg.selectAll("rect")
        .data(bg_rect_arr)
        .join("rect")
            .attr("x", d=>x(d.Name)+150 )
            .attr("y", d=>y(d.value)+150 )
            .attr("width",  x.bandwidth())
            .attr("height", d=>y(height_bc) - y(d.value))
            .attr("fill", '#69b3a2')


  svg_bg.append('text')
  .attr('transform','rotate(-90)')
  .attr('y',height_bc/2-75)
  .attr('class', 'label_axis')
  .attr('x',width_bc/2-400)
  .style('text-anchor','middle')
  .text('Number of Incidents' )

  svg_bg.append('text')
        .attr('y',height_bc/2+300)
        .attr('class', 'label_axis')
        .attr('x',width_bc/2+180)
        .style('text-anchor','middle')
        .text('Type of Crime' )

  var textg_b = 'Total number of crimes in ' + state_name + ' : ' + tot_count.toString()
  svg_bg.append('text')
  // .attr('transform','rotate(90)')
  .attr('y',height_bc/2-150)
  .attr('class', 'label_bg')
  .attr('x',width_bc/2+180)
  .style('text-anchor','middle')
  .text(textg_b)

}

