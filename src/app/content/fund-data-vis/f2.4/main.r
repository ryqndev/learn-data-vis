library(titanic)
library(dplyr)
library(ggplot2)

df <- titanic_train %>%
    filter(!is.na(Cabin))

ggplot(df, aes(x=Age)) + 
    geom_bar(color="#f68080", fill="#f68080")
