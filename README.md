1. Title: Mapping unemployment rate across US states and crime rates for that state for the year 2019
2. Introduction:
   This Visualisation represents how changes in unemployment rates relate to shifts in crime rates across various US states. By analyzing statistical data, it aims to uncover the socio-economic factors influencing crime dynamics and provide insights for policymakers.

3. For following datasets, i referred to kaggle and following sites:
   a. US Crimes Data: https://www.kaggle.com/datasets/tunguz/us-estimated-crimes
   b. Unemployment rates in America: https://www.kaggle.com/datasets/justin2028/unemployment-in-america-per-us-state
   c. For US Geojson file: https://www2.census.gov/geo/tiger/GENZ2014/shp/
   Using the above link, i downloaded zip file named: cb_2014_us_state_5m.zip
   I got the zip file consisting of shp,shx,iso,prj,dbf,cpg.
   Then using https://mygeodata.cloud/converter/shp-to-json , i converted the downloaded files to geojson and json file.
4. Data pre-processing:
   a. in unemployment rates database, for every state, i aggregated the monthly data and took a mean for the whole year for every state.
   I also added a column of percentage of population unemployed by calculating (Total Unemployment in State/Area divided by Total Civilian Non-Institutional Population in State/Area) \* 100
   In this database, we have 2 columns only - state name and our calculated percentage

   b. In US geojson file, I excluded data pertaining to Alaska and Hawaii from both files to highlight the states within the contiguous USA.
   c. There were no changes done to Crimes database file
