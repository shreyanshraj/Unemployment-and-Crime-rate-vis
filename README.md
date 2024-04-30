

# Homework #6: Extra Credit
1. Title: Mapping unemployment rate across US states and crime rates for that state for the year 2019
2. Introduction: 
    This Visualisation represents how changes in unemployment rates relate to shifts in crime rates across various US states. By analyzing statistical data, it aims to uncover the socio-economic factors influencing crime dynamics and provide insights for policymakers.
    I will learn how to plot states using geojson file (chloropleth map) and filtering barplots based on user selections.
    
3. Basic activites that i will do in this assignment:
    •	Learn how to plot map of countries and state using geojson file
    •	Understand the intricacies of plotting chloropleth map
    •	Learn more about filtering data based on mouse events and user selection

4. For following datasets, i referred to kaggle and following sites:
    a. US Crimes Data: https://www.kaggle.com/datasets/tunguz/us-estimated-crimes
    b. Unemployment rates in America: https://www.kaggle.com/datasets/justin2028/unemployment-in-america-per-us-state
    c. For US Geojson file: https://www2.census.gov/geo/tiger/GENZ2014/shp/
                            Using the above link, i downloaded zip file named: 	cb_2014_us_state_5m.zip
                            I got the zip file consisting of shp,shx,iso,prj,dbf,cpg. 
                            Then using https://mygeodata.cloud/converter/shp-to-json ,  i converted the downloaded files to geojson and json file.
5. Data pre-processing:
    a. in unemployment rates database, for every state, i aggregated the monthly data and took a mean for the whole year for every state.
        I also added a column of percentage of population unemployed by calculating (Total Unemployment in State/Area divided by Total Civilian Non-Institutional Population in State/Area) * 100
        In this database, we have 2 columns only -  state name and our calculated percentage
    
    b. In US geojson file, I excluded data pertaining to Alaska and Hawaii from both files to highlight the states within the contiguous USA.
    c. There were no changes done to Crimes database file

6. Steps for students:
    a. Using geojson file, start with plotting outline of the states and mainland USA. Adjust x and y coordinates along with the scale to achieve desired position of the map.
    b. Manipulate the unemployment dataset and use it to color code the states based on the unemployment rates. [HINT: Check the chloropleth map section on d3 js website to understand how to assign   color to every state]
    c. Using mouse events, plot the bar chart which shows number and categories of crimes committed in the state selected by the user.
    d. Once a user selects another state, the barplot should be refreshed/updated with crime data of the newly selected state.
    e. Add color legend in chloropleth map and proper axis labels in barplot.

7. Screenshots of the finished assignment 
    a. Chlorpleth Map finished:  /images/chloropleth map_dv.png
    b. barplot map finished: /images/bar_graph.png
    c. Full image of the visualisation page: /images/full page vis.png
    d. GIF of the interaction: /images/interaction.gif
