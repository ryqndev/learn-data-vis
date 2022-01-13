library(titanic)
library(dplyr)
library(ggplot2)

df <- titanic_train %>%
    filter(!is.na(Cabin))

chart <- ggplot(df, aes(x=Age), fill="transparent") + 
    geom_bar(color="#f68080", fill="#f68080")

ggsave(chart, filename="chart.png",  bg="transparent")
