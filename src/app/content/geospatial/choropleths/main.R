library(ggplot2)
library(dplyr)
library(usmap)

data <- read.csv("../../../assets/data/fex_2008-2022.csv")

data <- data %>%
    select(Cand_State, Total_Contribution)

data <- data %>%
    filter(Cand_State != "") %>%
    group_by(Cand_State) %>%
    summarise(
        Contributions = sum(Total_Contribution),
    )

# rename column name "Cand_State" to "state"
colnames(data)[which(names(data) == "Cand_State")] <- "state"

chart <-
    plot_usmap(data = data, values = "Contributions", regions = "states") +
    scale_fill_continuous(
        low = "#ffecec",
        high = "#f68080",
    )

chart <- chart + theme(
    panel.background = element_blank(),
    plot.background = element_blank(),
    panel.grid.major = element_blank(),
    legend.background = element_blank(), 
    legend.box.background = element_blank()
)

ggsave(chart, filename = "chart.png")
