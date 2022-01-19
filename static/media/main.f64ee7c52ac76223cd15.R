library(ggplot2)
library(dplyr)
library(rjson)
library(lubridate)
library(gapminder)


df <- data.frame(fromJSON(file='../../../assets/data/personal_boba_consumption/personal_drink_data.json'))
colnames(df) <- c("date")

df <- df %>%
    transform(date=ymd_hms(date)) 
    
df <- df %>%
    mutate(
        dayOfWeek=wday(df$date),
        # convert UTC time to PST and then order it in reverse
        timeOfDay=(7 - hour(df$date)) %% 24,
    )
df <- rename(count(df, dayOfWeek, timeOfDay), count=n)

df[is.na(df)] <- 0
chart <- 
    ggplot(
        df,
        aes(
            x=reorder(
                wday(dayOfWeek, label = TRUE, abbr = TRUE),
                dayOfWeek,
            ),
            y=reorder(
                paste(
                    12 - (timeOfDay %% 12),
                    ifelse(timeOfDay/12 >= 1 , "AM", "PM")
                ), 
                timeOfDay
            ), 
            fill=count
        )
    ) +
    coord_fixed() + 
    geom_tile(
        color="transparent",
        lwd=0.5,
        linetype=1,
    ) + 
    labs(x="", y="", fill="Count", title="Heatmap of drinks \npurchased with \nrespect to time") +
    scale_fill_viridis_c(option="viridis") 


chart <- chart + theme(
    panel.background = element_rect(fill="#370C59"),
    plot.background = element_rect(fill="white", color = NA),
    plot.title = element_text(face = "bold", size = (15), margin=margin(1, 0, 0.5, 0, "cm")),
    panel.grid.major = element_blank(),
    panel.grid.minor = element_blank(),
    
    legend.background = element_rect(fill="transparent"), 
    legend.box.background = element_blank()
)

ggsave(chart, filename="chart.png",  bg="white")
