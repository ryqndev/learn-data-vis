library(ggplot2)
library(dplyr)
library(gapminder)

data <- gapminder %>%
    # Only plot countries in America with data from 2007
    filter(
        year == 2007,
        continent == 'Americas'
    )

chart <- data %>%
    ggplot(aes(x=lifeExp, y=reorder(country, lifeExp))) + 
    geom_point(color='#0072B2', size=3) + 
    labs(x='life expectancy (years)', y='')

chart <- chart + theme(
    panel.background = element_blank(),
    plot.background = element_rect(fill='#ffecec', color = NA),
    panel.grid.major = element_line(colour='#888888', size=0.3),
    panel.grid.minor = element_blank(),
)

ggsave(chart, filename='chart.png')
