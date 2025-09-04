+++
title = 'March Madness Region Strength'
date = 2025-03-19T01:52:23-05:00
draft = false
weight = 5
hero = "images/posts/regionstrength.jpg"

[menu.sidebar]
parent = "march-madness"
weight = 5
+++

{{< toc >}}

# Region Strength

Ideally we want our potential champion to come from the path of least resistance. That is to say the less competitive games our champion can play the more likely they are to win the championship. In an effort to quantify this path of least resistance (at least to the final four) the metric Region strength was created. It is comprised of three components, Total Region Championships, Seed Prediction and Fragility.

**Total Region Championships:** This is pretty straightforward how many times does each region win the championship in the simulation

**Fragility:** This is a percentage of the time one team is winning the region. This bound between 0 and 1. As it is approaches one the region is extremely fragile, there is one heavy favorite but if this team loses it is open season. As it approaches 0 the region is competitive. Regions can move from Competitive to Fragile and vice versa based on results in the early rounds of the tournament. In general we want our champion to come from a Fragile region where they are the favorite.

**Seed Prediction:** This is the last part of Region strength and relies on an algorithm to assign seeds to the teams in the tournament. If a region is perfectly balanced it should have on of each seed in the algorithm's opinion. Which would mean the average seed of the region is 8.5. The closer the value is to 1 the more strong teams are in the region and the more competitive/difficult the region will be to win. This will be discussed as an analysis point more in depth. 


The final step of the metric is to combine the parts so that each is approximately weighted the same. I'll spare you the actual math for this and the results for each part are displayed in the table below. 

{{< region_strength_table >}}

 1. East: As we can see the East is pretty clearly The most difficult region, it has the highest Region Championship Percentage and a competitive Average Seed Prediction of 7.25 Second only to the South. It is a relatively fragile region being won by Duke more than 55% of the time the most common winners after that Alabama at a respectable 22.62% and then Both Wisconsin and Arizona at around 8% of the time. Clearly this is a region Dominated by the top two seeds but really by Duke... this is going to be a theme.

 2. West: The west is the most Fragile of every Region with Florida winning almost 60% of the time (58.13%). In conjunction with their nearly 23% Championship percentage and the regions 25.6% Championship percentage we can see this one of the weaker regions. However if Florida were to lose the flood gates come open. Texas Tech (13%), Maryland (11%), St. John's (9%), Missouri (4.5%), and even Kansas (3%) all massively benefit. If Florida is to lose the region becomes what March Madness embraces: Chaos

 3. South: This region is simaltaneously the most competitive and overall weakest of the bunch. The seed prediction is so low because the seed model (different than the model for the sims) thinks UNC is drastically underseeded... we shall see on that. Auburn is winning this region nearly 20% of the time and the championship over 18% of the time which means a Non Auburn champion is coming out of the South less than 2% of the time, hence its weak rating. That being said there are some interesting factors at play here, a potential peaking UNC, Tom Izzo and Michigan St., A very loseable game for Auburn against Louisville (assuming the Cardinals win). If the Tigers are unable to make it out Michigan St and Iowa St are the two most liklely to replace them at 16% and 12% respectively.

 4. Midwest: According to the metric this is second strongest region on paper. Its has by far the lowest seed prediction at an average of 6.6 Thanks in large part to a drastically underseeded Gonzaga and strong seeds across the board (with the exception of both Purdue and Kentucky but they are within a reasonable range). While Houston is winning the region 46% of the time Tennessee is coming a relatively close second at 29%. It is highly likely that one of these teams is to win the region in the scenario where this not the case the Midwest becomes the West with Florida losing, full on armaggeden with Kentucky, Purdue, Illinois, Clemson, Gonzaga and even UCLA making a competitive claim to the regional crown. 