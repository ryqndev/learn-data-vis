library(titanic)
library(dplyr)
library(ggplot2)

df <- titanic_train %>%
    filter(!is.na(Age))

ggplot(df, aes(x=Age)) + 
    geom_histogram(binwidth=2, color="#f68080", fill="#f68080")