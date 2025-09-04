---
title: "March Madness Breakdown"
date: 2025-03-17T09:00:00-05:00
lastmod: 2025-03-18T18:30:00-05:00
---

# March Madness Introduction

Every March college basketball captures the Country’s imagination. The tournament begins with 68 teams each of whom believe they can win the tournament and be crowned the best college basketball team in the country. The single elimination, win or go home, style of tournament creates excitement because anything can happen in one game. And it is true, anything can happen in one game. But what is the likelihood? Part of the reason this tournament has gained its fame is the pursuit of the perfect bracket. Correctly picking all 63 games, Warren Buffet has famously offered a substantial cash prize to the first person who can fill out a perfect bracket. Despite millions of attempts each year no one has really come close. So how can we try to be perfect? How can we get as close as possible? Realistically the perfect bracket is never going to happen but chasing it will also keep us entertained. 

The pursuit of perfection: the approach laid out will use a simulation style analysis, where the tournament is simulated thousands of times and the results are summed to give us the best possible approximation of what is going to happen in a random tournament scenario, and this tournament is very random. Along the way metrics such as (over and underperformers, misseedings, region difficulty, overall odds) will be developed to better understand how the simulation is evaluating each the strength of each team.


## Historical Review

Some stories are easiest to understand when starting at the end and working backwards from a known or potential end result. I think the march madness tournament is an excellent example of that so lets start our analysis at the end and work back to the beginning. Included is a graph of the total number of Championship wins each team has over 10000 simulations. 

![2025 Simulated National Champion](/images/March_Madness/championship_wins.png)

This is just one piece of the puzzle but there is quite a bit of information to work with here.

This is really a race between the one seeds. Yeah Tennessee and Alabama are winning enough of the sims to get a mention but that is about it. Duke and Florida are the clear favroites which is represented in the public and the betting markets. Auburn and Houston also are winning over 14% of the time but they each have more difficulties and hit roadblocks earlier than Duke and Florida. Seven of the last ten tournaments have been won by a one seed and this year it looks like that trend will continue. In fact we have only seen a final four of all one seeds once in 2008 (Interestingly enough that final four was also in San Antonio) this year is a great candidate for history to repeat itself in this respect.

![2025 Top 4 Seeds Sweet Sixteen Appearances](/images/March_Madness/sweet_sixteen_apps.png)

There are a few key takeaways here as well which help support our findings from the previous graph.

The top teams are the top teams. There is basically no change in the top six from Championship wins to Sweet Sixteen appearence (Duke and FLorida swapped and Tennessee and Alabama swapped spots). The big call outs here are Maryland (this is both an indictment of Memphis and praise of Maryland). Additionally Purdue, TAMU and Kentucky are struggling relative to their seeds to make it to the Sweet Sixteen. A few of these teams will be discussed later but the jist is seen here. The tournmanet has strong top contenters, some of the strongest teams in recent college basketball history. While the rest of the field is well behind these top 6 they are not far behind each other with the next 30 or so teams being seperated by a small margin.


## Overview

**Winners**

The tournament is extremely top heavy this year (as discussed at length previously), this combined with the fact a one seed has won 7 of the last 10 tournaments means that realistically one of these four teams will be winning it this year. In the model’s interpretation it was only a six horse race anyway but even Tennessee and Alabama are winning often enough in the simulation to be considered for any bracket pool. Duke and Florida stand above Auburn and Houston with Duke being slightly more intriguing than Florida. Florida has probably the toughest path having to beat potentially Maryland and Texas Tech to get to the final four before setting up a theoretical rematch with Auburn. Where as Duke’s toughest opponent would be Alabama in the Elite 8 and then either Houston or Tennessee in the Final Four. While both teams are favored from their respective regions Duke has it a bit easier. As for the other one seeds they both have really tough potential Second round games where the 8 Seeds are closer to the strength of 3 or 4 seeds. Both Auburn and Houston are heavily favored over Louisville and Gonzaga winning nearly 80% of the time but both Duke and Florida are favored to beat either 8 or 9 seed they would play 90% of the time. This is a massive difference. Having to play essentially a second sweet sixteen game is both more physically and mentally demanding. The model has the ranking as follows

1. Duke
2. Florida
3. Auburn
4. Houston

The big difference between the bottom two being Houston has the toughest two seed in Tennessee and then would have to play and beat Duke (most times) in the final four.

**Busts**


1. St. John’s: Every other 2 seed is well over 70% to make the sweet sixteen and well over 40% to make the Elite Eight while St. John’s is at 60 and 30% respectively. They have a difficult path having to play potentially Kansas, Texas Tech/Missouri and then Florida/Maryland. They are only favored against Kansas (-140) and Missouri (-121). They have had a great year and of course it is possible they find there way into the final four but they have the toughest draw of any two seed.

2. Memphis: This will be extensively talked about throughout the analysis. They are not favored against Colorado St. then would have to play Maryland and then Florida. It is not happening for the Tigers this year. That being said. There was a team also the Tigers last year in a similar spot. Clemson was underdogs to higher seeded New Mexico (also from the Mountain West) and the whole world seemingly had New Mexico making a deep tournament run when it ended up being Clemson making it to the Elite 8. Still it looks bleak for the Tigers.

3. Kentucky: Somehow again Kentucky has conned their way into a three seed. In what looks like the softest region in the tournament their potential second round matchups are only barely in their favor. And then having to face Either Tennessee which is hard losing at +242 or even UCLA which at -150. They are not making deep runs often enough in the sims to justify a three seed. The fact they have already beat Tennessee twice might even work against them since Tennessee will have made adjustments to fix the areas that were exposed in the previous games. Whatever Kentucky is selling this year, the model is not buying it.

4. The SEC: Speaking of which this conference as whole is due to underperform. Fourteen of the Sixteen teams are in the tournament (Yes even you Texas). They have been drastically over seeded due the power of Florida, Auburn, Tennessee and Alabama. But these middling Teams that have found themselves in March Madness for the first time in forever. Are likely one and done candidates. Miss St., Arkansas, Vanderbilt, Georgia and Oklahoma are all underdogs according to the model with only Miss St. being favored by Vegas and Ole Miss and TAMU have tough games according to model (relative to seeds) with UNC being favored over Ole Miss. Just because the top of this conference is extremely strong does not make these Tertiary teams are also strong. Just by random chance and volume some of these teams will have multiple impressive wins over the likes of Florida and Auburn, who cares, a team has not gone undefeated in the regular season since in a power Conference since Kentucky in 2014 (Sorry Gonzaga).


**Dark Horses**

1. Missouri: This is the team that has the best chance of throwing a wrench into the tournament. They have a really manageable path to the Elite 8 and should they make it they have a rubber match against Florida whom they have split the previous two encounters. The big worry here is they have the strongest 3 seed to deal with and despite the model heavily favoring them in their frist game it is no cake walk. The sims give them a 17% chance (+467) of making it to the Elite 8 which is the highest of any team outside of a top 4 seed and higher than both Texas A&M and Purdue who are both four seeds. Path: Drake (-646), Texas Tech (+162), Kansas (-127), St Johns (+121)

2. Maryland: This is the best performing 4 seed in the model and has a better chance than Kentucky to make the Elite 8 (+370 vs +383). Additionally if they win they get the winner of Memphis and Colorado St. they have a the 7th best Sweet Sixteen chance. Part of what makes this such an attractive team is their talent but they also have the easiest non one or two seed path to the Sweet Sixteen. There they would run into Florida (probably) and that would not be ideal but anything can happen in one game. At +360 the model gives them the 11th best odds in the tournament to beat Florida

3. Gonzaga: As we will discuss at length this is a team that is drastically underseeded. Having the strength closer to a 3 or 4. They were preseason top 5 for most people and have played relatively well out of the WCC. They do not have the gaudy W-L like they normally do and went 1-2 vs Saint Mary’s this year. If they can beat Houston where they are (+400) underdogs, they are favored against the rest of their opponents in until San Antonio with the exception of Tennessee (+260) and Kentucky (+116). 

4. Louisville: This is the exact same concept as Gonzaga. They are significantly underseeded and have an extremely tough match up against Auburn in their second round (assuming both teams win which they are favored to do). However if they can get through their first two games (this means beating Auburn as a +614 underdog) Their toughest potential matchup would be +223 against Michigan St. They would be underdogs against Iowa St (+200), Texas A&M (+140), and Michigan (+114).

Historical Note - The Louisville and Gonzaga situations feel incredibly similar to the 2014 tournament where a number 8 Kentucky who was definitely underseeded relative to their strength was able to beat the number one seed Wichita Shockers back when they had their two year run in the tournament. A lot of people were on Kentucky in that game and Wichita was not quite as good as Either Auburn or Houston but the historical precedent is something to keep in mind. 

5. Illinois: This is a similar story to Maryland, part of why the model likes Illinois so much is if they win their first game they would get Kentucky the weakest three seed in the tournament in the worst case scenario for game 2. Additionally If UCLA or Utah St. makes it to the Sweet Sixteen over Tennessee they matchup well vs both teams. The South is the weakest region as a whole with the weakest 1,3 and 4 seeds. This is the region that is mostly likely to implode and send a team that is not a top 2 seed to the final four. If something goes awry in the South look for Illinois and Gonzaga to pick up the pieces

6. Kansas: Another top 10 team in the preseason (If that kind of thing matters to you). What definitely does matter is that the Jayhawks are one of a few teams that has a massive coaching edge in the tournament. Bill Self wins a lot in March and that matters. They are pretty heavily favored against Arkansas where they are (-202) and then have a really winnable game against St. Johns as slight underdogs (+141). If they are able to win both games they would most likely play Texas Tech (+188) or Missouri (+127), both teams the model likes but they have reasonable chances against each. They grade out as the third highest non top 4 seed to make the Elite 8 behind Missouri and Illinois who have already discussed.

7. North Carolina: It is really bleak out there for the double digit seeds (worst than most years) In fact the sims calculate about a 2% chance for a 10 seed or higher to make the final four. That is 5 times lower than last years chances and historically it happens 1 in every 5 tournaments. It looks like it is not the year for Cinderella. If it is going to happen North Carolina easily has the best chance. Another team that was rated highly in the preseason and has failed to meet expectations. They even had to win a play in game to make the lsat 64 of the tournament. For an 11 seed they have quite a reasonable chance against most teams in their region and are even favored by Vegas in their game against Ole Miss (the model has them as comfortable underdogs at +167). Then they would most likely have to play Iowa St. (+292) and winning that would give them Michigan St (+313) but they aren't even favored against Marquette (+132) and barely against New Mexico (-140) if the Madness of March is in full effect. If they are able to find away to make the Elite Eight they would almost certainly be facing Auburn whom they have the worst odds of any possible game so far at (+900). It is definitely a long shot but is by far the best of a bunch of bad options.

### Region Strength

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

### Round Odds Explorer

Below is a table with the odds for every Team to make it to the following rounds Sweet Sixteen, Elite Eight, Final Four and Championship Winner. Simpley Select which team(s) you would like to view and hit "Show Selected Teams". Please keep in mind that these odds will not perfectly match Vegas. These odds are calculated on 10,000 tournaments being simulate and each teams placements being summed. So there can only every be 10,000 championship winners, 40,000 Final Four teams, etc etc. So if a team never makes it to a round in the tournament they have functionally +infinity odds and if they are winning 1000 of the 10000 times they have a probabiltiy of 10% which translates to 9/1 or +900. Las Vegas odds do not operate this way, it is close but not exact they are not in the business of correct predictins (sort of it is more complicated than that and something out of the scope of this discussion).

{{< round_odds_table >}}

### Seed Display Table
# Seed Prediction

It feels like every year the committee intentionally misseeds a couple of teams just to farm engagement and get people talking about the tournament. This year is unfortunately no different and perhaps even worse than most. Of course the primary body of work are the games you played in the regular season but that does not mean the conference tournaments should count for nothing. Below are the most egregious examples of teams that were over or underseeded.

1. Auburn: I get it they won the regular season SEC title, the strongest conference in college basketball this year and perhaps of any year. But they lost to Tennessee in the conference semifinals and Florida who is also a one seed and just as good as Auburn won the conference tournament. Additionally Duke was the number team in the country for the last month of the season. The differentiation between the regular season rankings and the tournament seeds is going to be a common theme here. Auburn is still a great team and no doubt deserving of a one seed. They could easily still win the entire thing but thye are definitely not the best team in the tournament.

2. Louisville: This one makes the least sense of anything to be addressed, ending the season as the tenth overall team in the country via the AP poll and only losing to Duke in the ACC conference tournament final. They beat Clemson twice who they have the same record as and Clemson got a 5 seed (which is a little under where they should have been). What we are going to see is that the SEC is going to have a lot of teams much much higher than they should because of the perceived strength of the conference. While it is true this was the best conference in college basketball in a long time, possibly ever, the middling and bottom team strengths being are inflated and carried by the strength of Auburn, Florida, Tennessee and Alabama.

3. Kentucky: While they have some impressive wins this season they lost 11 games this year and ended the season 18th overall in the AP poll. They lost to Alabama 3 times including in the Conference tournament. Their early season win over Duke and there double over Tennessee in a two week time period is doing a lot of heavy lifting with this seeding. Troy is not joke and Kentucky lost their first round game to 14 seed Oakland last year. Do not be surprised by early exit from the Wildcats again this year.

4. Gonzaga and Saint Mary’s: Both teams ended the season in the top 25 this year. Obviously they played in one of the weakest conferences in college basketball but they both played competitive non conference schedules. By nearly every advanced metric both of these teams are in the top 20 teams in the country with Gonzaga being close to the top 10. If Gonzaga did not have such a nasty potential second matchup against Houston they would be a favorite to make the final four as an non 1 or 2 seed. Even now they can still make a deep run. 

5. Memphis: This is a team that ended the year in the top 25 for the AP, cruised through their conference and conference tournament. Played one of the best non conference schedules in the country, has wins over  Michigan State, Clemson, Ole Miss and UConn and... is still drastically over seeded. They did everything they were suppose to but the advance metrics for this team fall extremely short. So short in fact that as 5 seed they are underdogs to 12 seed Colorado State. This is a team that sort of has to be a five seed based on their record but has the strength of an 8 or 9 seed, possibly lower. 


# Fairytales

Every tournament has its over and underperformers. The teams that keep winning despite the odds (the cinderella stories) overperformer their seed expectation and the teams that exit early (the frogs) despite their hype underperform their seed expectation. This metric comparing the average wins a team has in the simulated tournaments and comparing it to their seeds historical accomplishments. This information can be found here:

https://bracketodds.cs.illinois.edu/seedadv.html 

These are some teams who are not winning or losing as often as their seed might suggest. Both of the below graphs synergize with the concepts we discussed earlier about the tournament being top heavy and top 30 being one of the best 30s in tournament history (except for maybe you Memphis).

## Underperformers

![Underperformers](/images/March_Madness/underperformers.png)


Speaking of which Memphis leads the way in underperforming as both Vegas and the Model used for the sims has Colorado St. favored in the games. A couple of other teams worth noting from the graph below.

1. Drake: This is a strong team. They only lost 3 games this year and have several power conference wins. However, their path is the most difficult of any 11 seed having to face the best 6 seed and then if they win potentially having to face the best 3 seed in the tournament. This is not a case of Drake not winning their first round game enough. This Drake not winning their sweet sixteen game enough. Historically 11 seeds win more games in the tournament than than both 9 and 10 seeds because they don't have to face a one or two in the next round. In fact of the Cinderella final four teams over the last decade there have been three 11 seeds to make it to the final four meanwhile only one 8, 9 and 10 seed have each made it respectively. This is a case of the model loving Missouri and Texas Tech not hating Drake. 

2. Georgia: This is one of those weaker SEC teams that in a normal year probably wouldnt be in the tournament but the conference hype allowed them to sneak in and they got gifted a top ten advance metric team in Gonzaga. For an 8-9 matchup this as about as one sided as it gets With both Vegas and the model heavily favoring the Zags (-260 and -200 respectively)

3. UC San Diego: This is a tough one. A team that sort of came out of nowhere but ranks relatively well for their weaker conference in the advanced metrics. Unfortunately they have to play a red hot Michigan team. This is one of the first round games where the model and Vegas are in a sizeable disagreement. Vegas has Michigan at -145 while the model has it a -300. This is a proceed with caution sign coming out from the model.


On the flip side here are the projected overperformers for the tournament

## Overperformers

![Overperformers](/images/March_Madness/overperformers.png)


Two of the five teams on this graph (Maryland and Colorado St.) are taking advantage of the fact that Memphis is one of the weakest single digit seeds in the tournament. Be careful with Maryland, they have potential sweet sixteen matchup with Florida where they would be +361 according to the model. However if they can win that game they would be favored against St John’s and Missouri and slight underdogs against Texas Tech (+125) in a potential Elite 8 matchup. A couple of other teams worth calling out.

1. Missouri: We spoke briefly about them above in the context of their first round matchup with Drake the model loves this team relative to its seed being only slight underdogs against St. Johns, Texas Tech and Maryland while being significant favorites at -650 against Drake this outpaces the -275 line that Vegas currently is giving. 

2. Gonzaga: This is a case of the Bulldogs beating Georgia alot. We discussed them a bit already above and their story is similar to Maryland’s just one round earlier. They have a tough potential matchup against Houston if they can beat Georgia but after that they are competitive with every other team in the region being favored over both Clemson and Purdue in a theoretical Sweet Sixteen game and only slight underdogs to both Kentucky and Illinois in an eventual Elite Eight (although Tennessee is heavily favored and most likely to get there).  


### Final Four Finder

After the bracket comes out on selection Sunday, the first and second question most people will ask you when comparing brackets is “Who is your national champion?” and “Who is in your final four?” Below is the sims 20 most common final fours. All of them have at least seeds one number one seed most of them at least 2. Notably the most common final four is all four one seeds happening a little over 8% of the time which is about 4 times more than it was projected last year. The one seeds are extremely powerful this year and if the sims are suggesting anything it is that we could have only all one seeds in the final four for the first time since 2008 and only second time ever. 

Included on this page is also a ‘Final Four Finder”. You can enter one to four teams and it will find the most common final fours with the selected teams.

![2024 Most Common Simulated Final Four](/images/March_Madness/top_20_final_fours.png)

[Open the interactive page »](/posts/marchmadness/marchmadnessfinalfour)
