## Vertical Bar Charts

The most popular type of visualization - bar charts. This visualization shows the percentage of survivors on the titanic with respect to their passenger class.

#### Notes about Bar Charts

I would only look at the visualization code for this figure and learn how to draw bar charts. Not an expert in R code but the way this data is derived has some code smell and I want to relook it when I have the time. There should be a way to do this more efficiently and with less code but this current way works. 

To get the percentage of survivors by passenger class, I grouped the data set by **Pclass** first and then summed the totals. Then, I removed the rows where the **Pclass** did not survive.

### Code
