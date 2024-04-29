# dv-extracredit

The readme file will contain the instructions for your created assignment. It should follow the format and style of the readme files for homeworks #2 and #3, and include the following:

A title for your assignment
Add a short introduction describing the purpose of the assignment. In other words: what D3-related things you will learn by completing this assignment?
Also add a bulleted list of the basic activities you'll do for the assignment.
If necessary, add a brief description of the dataset and any pre-processing or wrangling that is required.
Then, in detail, describe the specific steps that a student should take to complete the assignment. Each Step should have its own section (Step 1: blah blah, Step 2: blah blah, etc.). You can use homeworks #2 and #3 as a guide. In these Steps, you should write out the specific code modifications that are required to go from the starter code in the template file to the code in the completed folder.
You must have a minimum of four steps in your assignment.
If desired, you can include hints and reminders along the way.
You should also include a minimum of 3 screenshots of your assignment in the readme (as is done in Homework #2). Screenshots can be placed in the images/ folder and referenced in the readme file at the appropriate places.
Gifs that show interactions/animations are also allowed instead of static images.
One of your screenshots should be a picture of the completed/working assignment.
Make sure you reference your images in the readme correctly!


# Homework #6: Extra Credit
1. Title: Mapping unemployment rate across US states and crime rates for that state
2. Introduction: 
    This Visualisation represents how changes in unemployment rates relate to shifts in crime rates across various US states. By analyzing statistical data, it aims to uncover the socio-economic factors influencing crime dynamics and provide insights for policymakers.
    I will learn how to plot states using geojson file (chloropleth map) and filtering barplots based on user selections.
3. For following datasets, i referred to kaggle and following sites:
    a. US Crimes Data: https://www.kaggle.com/datasets/tunguz/us-estimated-crimes
    b. Unemployment rates in America: https://www.kaggle.com/datasets/justin2028/unemployment-in-america-per-us-state
    c. For US Geojson file: https://www2.census.gov/geo/tiger/GENZ2014/shp/
                            Using the above link, i downloaded zip file named: 	cb_2014_us_state_5m.zip
                            I got the zip file consisting of shp,shx,iso,prj,dbf,cpg. 
                            Then using https://mygeodata.cloud/converter/shp-to-json ,  i converted the downloaded files to geojson and json file.
4. Data pre-processing:
    a. in unemployment rates database, for every state, i aggregated the monthly data and took a mean for the whole year for every state.
        I also added a column of percentage of population unemployed by calculating (Total Unemployment in State/Area divided by Total Civilian Non-Institutional Population in State/Area) * 100
        In this database, we have 2 columns only -  state name and our calculated percentage
    
    b. In US geojson file, I excluded data pertaining to Alaska and Hawaii from both files to highlight the states within the contiguous USA.
    c. There were no changes done to Crimes database file

5. Steps for students:
    a. Using geojson file, start with plotting outline of the states and mainland USA. Adjust x and y coordinates along with the scale to achieve desired position of the map.
    b. Manipulate the unemployment dataset and use it to color code the states based on the unemployment rates. [HINT: Check the chloropleth map section on d3 js website to understand how to assign   color to every state]
    c. Using mouse events, plot the bar chart which shows number and categories of crimes committed in the state selected by the user.
    d. Once a user selects another state, the barplot should be refreshed/updated with crime data of the newly selected state.
    e. Add color legend in chloropleth map and proper axis labels in barplot.

6. Screenshots of the finished assignment 
    a. Chlorpleth Map finished:  /images/chloropleth map_dv.png
    b. barplot map finished:
    c. Full image of the image:
    d. GIF of the interaction: 
