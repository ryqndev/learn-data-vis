library(titanic)
library(dplyr)
library(ggplot2)

df <- titanic_train %>% 
    select(-Name, -Ticket)

df <- df %>%
    filter(!is.na(Age))


# length(age_only)

# data.frame(df) %>% 
#     group_by(Age) %>% 
#     count(Age) %>%
#     ggplot(aes(x = Age, y = n)) + geom_bar(stat = "identity")
    
# df <- data.frame(
#     ages=ages,
#     names=namesd
# )
# table(df)

# knitr::kable(titanic_train)

# Basic histogram
# ggplot(df, aes(x=weight)) + geom_histogram()
# Change the width of bins
# ggplot(df, aes(x=age)) + 
#   geom_histogram(binwidth=1, color="black", fill="white")

