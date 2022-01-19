library(titanic)
library(dplyr)
library(ggplot2)

df <- titanic_train %>%
    filter(!is.na(Age))

chart <- ggplot(df, aes(x=Age), fill="transparent") + 
    geom_histogram(binwidth=2, color="#f68080", fill="#f68080")

ggsave(chart, filename="chart.png",  bg="transparent")
