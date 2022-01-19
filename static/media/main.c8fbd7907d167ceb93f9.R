library(ggplot2)
library(dpylr)
library(gapminder)
library(rnoaa)

out <- isd(usaf='724030', wban = '93738', year=2018)

names(out)
out <- out %>%
    select("temperature", "date", "time", "KB2_temp", "KB2_avg_temp", "KB1_temp", "KG1_avg_temp", "KA2_temp")
head(out, 50) %>% print(n=50)
nrow(out)
data <- gapminder %>% 
    filter(continent == "Americas")

chart <- 
    ggplot(
        data,
        aes(x=reorder(country, lifeExp, function(x){x[length(x)]}),y=year, fill=lifeExp)
    ) +
    geom_tile() + 
    coord_flip() + 
    labs(x="", y="Year", fill="temperature (F)") +
    scale_fill_viridis_c(option="magma")

chart <- chart + theme(
    panel.background = element_rect(fill="transparent"),
    plot.background = element_rect(fill="transparent", color = NA),
    panel.grid.major = element_blank(),
    panel.grid.minor = element_blank(),
    legend.background = element_rect(fill="transparent"), 
    legend.box.background = element_blank()
)

ggsave(chart, filename="chart.png",  bg="transparent")
