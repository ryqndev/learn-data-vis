library(ggplot2)
library(dplyr)
library(titanic)

data <- titanic_train %>%
    # Count survivors based on Passenger class
    count(Pclass, Survived, name='Total') %>% 
    group_by(Pclass) %>%

    # Aggregate survivors and non-survivors
	summarise(
        Survivors=Total, 
        Passengers=sum(Total), 
        S=Survived
    ) %>%

    # Remove rows with non-survivors
    filter(S == 1) 

chart <- data %>% 
    ggplot(aes(
        x=reorder(Pclass, Pclass, function(x) -x),
        y=Survivors * 100/Passengers
    )) + 
    geom_bar(stat='identity', fill='#f68080') + 
    scale_y_continuous(labels=function(x) paste0(x, "%")) +
    coord_flip() +
    labs(x='', y='')

chart <- chart + theme(
    panel.background = element_blank(),
    plot.background =  element_blank(),
    panel.grid.major =  element_blank(),
    panel.grid.minor = element_blank(),
)

ggsave(chart, filename='chart.png')
