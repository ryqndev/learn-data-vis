library(ggplot2)
library(dplyr)
library(titanic)        # where data sourced from

# filter out passengers without "Age"
df <- titanic_train %>%
    filter(!is.na(Age))

chart <- 
    ggplot(df, aes(x=Age)) + 
    geom_bar(color="transparent", fill="#56B4E9") + 
    scale_x_continuous(breaks=c(0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80))

chart <- chart + theme(
    panel.background = element_rect(fill="transparent"),
    plot.background = element_rect(fill="transparent", color = NA),
    panel.grid.major = element_blank(),
    panel.grid.minor = element_blank(),
    legend.background = element_rect(fill="transparent"), 
    legend.box.background = element_blank()
)

ggsave(chart, filename="chart.png",  bg="transparent")
