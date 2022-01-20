library(dplyr)
library(ggplot2)
library(titanic)

data <- titanic_train %>%
    filter(!is.na(Age))

chart <- data %>%
    ggplot(aes(x=Age)) + 

    # if boundary not at 0, x axis starts before 0 which makes no sense
    geom_histogram(binwidth=5, color="#ffecec", fill="#f68080", boundary=0) +
    labs(x='', y='') +

    # Set the origin to be 0,0 - otherwise you get padding
    scale_x_continuous(expand = c(0.005, 0.005)) +
    scale_y_continuous(expand = c(0.005, 0.005))

chart <- chart + theme(
    panel.background = element_blank(),
    plot.background =  element_rect(fill='#ffecec', color='transparent'),
    panel.grid.major =  element_blank(),
    panel.border = element_blank(),
    axis.line =  element_line(color='#aaaaaa'),
    panel.grid.minor = element_blank(),
)

ggsave(chart, filename="chart.png",  bg="transparent")
