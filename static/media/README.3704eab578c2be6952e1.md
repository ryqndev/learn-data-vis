## Histograms

This visualization shows the passengers of the titanic with respect to their age. Since we are visualizing distributions, I set a bin width of 5 meaning that we are counting the passengers by 5 year intervals - this type of graph's purpose is show the distribution of the population, rather than display exact figures.

#### Conclusions from the data

By briefly looking at the chart, we can see a bimodal distribution where many of the passengers are either infants or in their 30's.

#### Notes about histograms

Ggplot2 histograms don't normally have spacing between the bars (as bar charts normally do - keep in mind bar charts are different from histograms) and to have some separation between the bins, I had to add an different colored outline to every bin that matched with the background to give off the impression that the bars are separated.

The generated histogram also put the first bin at **[-2.5, 2.5]** which makes no sense since you can't have an age group of -2.5 years to 2.5 years. To remedy this, I added a **boundary=0** on line 12 to **geom_histogram()** object to force it to start at 0.

Furthermore, the origin of the chart didn't start at (0, 0) but rather something like (-0.5, -0.5). Line 16 and 17 put the origin at **(0.005, 0.005)**. I didn't do 0 because I wanted a tiny bit of padding.

### Code
