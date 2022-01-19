library(ggplot2)
library(dplyr)
library(gapminder)

data <- gapminder %>% 
    # Only plot countries in Americas
    filter(continent == 'Americas') %>%

    # Calculate % population change over the years
    mutate(change=((pop / lag(pop) - 1) * 100)) %>%

    # Remove first year, no prev data to calc change
    filter(year!=1952)

chart <- 
    ggplot(
        data,
        aes(
            x=year, 
            y=reorder(country, change, sum), 
            fill=change,
        )
    ) +
    geom_tile() + 
    labs(x='', y='', fill='Population \nGrowth (%)') +
    scale_fill_viridis_c(option='magma')

chart <- chart + theme(
    panel.background = element_blank(),
    plot.background = element_blank(),
    panel.grid.major = element_blank(),
    legend.background = element_blank(), 
    legend.box.background = element_blank()
)

ggsave(chart, filename='chart.png',  bg='transparent')
