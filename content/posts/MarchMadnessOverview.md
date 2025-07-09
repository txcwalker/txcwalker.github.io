+++
title = 'March Madness Overview'
date = 2025-03-19T01:52:23-05:00
draft = false
weight = 2
+++


# March Madness Introduction

Every March college basketball captures the Country’s countries imagination. The tournament begins with 68 teams each of whom believe they can win the tournament and be crowned the best college basketball team in the country. The single elimination, win or go home, style of tournament creates excitement because anything can happen in one game. And it is true, anything can happen in one game. But what is the likelihood? Part of the reason this tournament has gained its fame is in pursuit of the perfect bracket. Correctly picking all 63 games, Warren Buffet has famously offered a substantial cash prize to the first person who can fill out a perfect bracket. Despite millions of attempts each year no one has really come close. So how can we try to be perfect? How can we get as close as possible? Realistically the perfect bracket is never going to happen but chasing it will also keep us entertained. 

In pursuit of perfection the approach laid out in the next handful of posts will use a simulation style analysis, where the tournament is simulated thousands of times and the results are summed to give us the best possible approximation of what is going to happen in a random tournament scenario, and this tournament is very random. Along the way metrics such as (over and underperformers, misseedings, region difficulty, overall odds) will be developed to better understand how the simulation is evaluating each the strength of each team.


## Historical Review

Some stories are easiest to understand when starting at the end and working backwards from a known or potential end result. I think the march madness tournament is an excellent example of that so lets start our analysis at the end and work back to the beginning. Included is a graph of the total number of Championship wins each team has over 10000 simulations. 

![2025 Simulated National Champion](/images/March_Madness/championship_wins.png)

This is just one piece of the puzzle but there is quite a bit of information to work with here.

This is really a race between the one seeds. Yeah Tennessee and Alabama are winning enough of the sims to get a mention but that is about it. Duke and Florida are the clear favroites which is represented in the public and the betting markets. Auburn and Houston also are winning over 14% of the time but they each have more difficulties and hit roadblocks earlier than Duke and Florida. Seven of the last ten tournaments have been one by a one seed and this year it looks like that trend will continue. In fact we have only seen a final four of all one seeds once in 2008 (Interestingly enough that final four was also in San Antonio) this year is a great candidate for history to repeat itself in this respect.

![2025 Top 4 Seeds Sweet Sixteen Appearances](/images/March_Madness/sweet_sixteen_apps.png)

There are a few key takeaways here as well which help support our findings from the previous graph.

The top teams are the top teams. There is basically no change in the top six from Championship wins to Sweet Sixteen appearence (Duke and FLorida swapped and Tennessee and Alabama swapped spots). The big call outs here are Maryland (this is both an indictment of Memphis and praise of Maryland). Additionally Purdue, TAMU and Kentucky are struggling relative to their seeds to make it to the Sweet Sixteen. A few of these teams will be discussed later but the jist is seen here. The tournmanet has strong top contenter, some of the strongest teams in recent college basketball history. While the rest of the field is well behind these top 6 they are not far behind each other with the next 30 or so teams being seperated by a small margin.


## Overview

**Winners**

The tournament is extremely top heavy this year ( as discussed at length previously), this combined with the fact a one seed has won 8 of the last 10 tournaments means that realistically one of these four teams will be winning it this year. In the model’s interpretation it was only a six horse race anyway but even Tennessee and Alabama are winning often enough in the simulation to be considered for any bracket pool. Duke and Florida stand above Auburn and Houston with Duke being slightly more intriguing than Florida. Florida has probably the toughest path having to beat potentially Maryland Texas Techt o get to the final four before setting up a theoretically rematch with Auburn. Where as Duke’s toughest opponent would be Alabama in the Elite 8 and then either Houston or Tennessee in the Final Four. While both teams are favored from their respective regions Duke has it a bit easier. As for the other one seeds they both really tough potential Second round games where the 8 Seeds are closer to the strength of 3 or 4 seeds. Both Auburn and Houston are heavily favored over Louisville and Gonzaga winning nearly 80% of the time but both Duke and Florida are favored to beat either 8 or 9 seed they would play 90% of the time. This is a massive difference. Having to play essentially a second sweet sixteen game is both more physically and mentally demanding. The model has the ranking as follows

Duke
Florida
Auburn
Houston

The big difference between the bottom two being Houston has the toughest two seed in Tennessee and then would have to play and beat both Duke (most times) in the final four.

**Busts**


1. St. John’s: Every other 2 seed is well over 70% to make the sweet sixteen and well over 40% to make the Elite Eight while St. John’s is at 60 and 30% respectively. They have a difficult path having to play potentially Kansas, Texas Tech/Missouri and then Florida/Maryland. They are only favored against Kansas (-140) and Missouri (-121). They have had a great year and of course it is possible they find there way into the final four but they have the toughest draw of any two seed.

2. Memphis: This has been talked about extensively already. They are not favored against Colorado St. then would have to play Maryland and then Florida. It is not happening for the Tigers this year. That being said. There was a team also the Tigers last year in a similar spot. Clemson was underdogs to higher seeded New Mexico (also from the Mountain West) and the whole world seemingly had New Mexico making a deep tournament run when it ended up being Clemson making it to the Elite 8. Still it looks bleak for the Tigers.

3. Kentucky: Somehow again Kentucky has conned their way into a three seed. In what looks like the softest region in the tournament their matchups potential second round matchup are only barely in their favor. And then having to face Either Tennessee which is hard losing at +242 or even UCLA which at-150. They are not separating enough they are not making deep runs often enough in the sims to justify a three seed. The fact they have already beat Tennessee twice night even work against them since Tennessee will have made adjustments to fix the areas that were exposed in the previous games. Whatever Kentucky is selling this year, the model is not buying

4. The SEC: Speaking of which this conference as whole is due to underperform. Fourteen of the Sixteen teams are in the tournament (Yes even you Texas). They have drastically over seeded Due the power of Florida, Auburn, Tennessee and Alabama. But these middling Teams that have found themselves in March Madness for the first time in forever. Are likely one and done candidates. Miss St., Arkansas, Vanderbilt, Georgia and Oklahoma are all underdogs according to the model with only Miss St. being favored by Vegas and Ole Miss and TAMU have tough games according to model (relative to seeds) with UNC being favored over Ole Miss. Just because the top of this conference is extremely strong does not make these Tertiary teams also strong. Just by random chance and volume some of these teams will have multiple impressive wins over the likes of Florida and Auburn, who cares, a team has not gone undefeated in the regular season since in a power Conference since Kentucky in 2014 (Sorry Gonzaga)


**Dark Horses**

1. Missouri: This is the team that has the best chance of throwing a wrench into the tournament. They have a really manageable path to the Elite 8 and should they make it they have a rubber match against Florida whom they have split the previous two encounters. The big worry here is they have the strongest 3 seed to deal with and despite the model heavily favoring them in their frist game it is no cake walk. The sims give them a 17% chance (+467) of making it to the Elite 8 which is the highest of any team outside of a top 4 seed and higher than both Texas A&M and Purdue who are both four seeds. Path Drake (-646), Texas Tech (+162), Kansas (-127), St Johns (+121)

2. Maryland: This is the best performing 4 seed in the model and has a better chance than Kentucky to make the Elite 8 (+370 vs +383). Additionally if they win they get the winner of Memphis and Colorado St. they have a the 7th best Sweet Sixteen chance. Part of what makes this such an attractive team is their talent but they also have a the east non one seed or two seed path to the Sweet Sixteen. There they would run into Florida (probably) and that would not be ideal but anything can happen in one game. At +360 the model gives them the 11th best odds in the tournament to beat Florida

3. Gonzaga: As we discussed previously this is a team that is drastically underseeded. Having the strength closer to a 3 or 4. They were preseason top 5 for most people and have played relatively well out of the WCC. They do not have the Gaudy W-L like they normally do and went 1-2 vs Saint Mary’s this year. If they can beat Houston where they are (+400) underdogs, they are favored against the rest of their opponents in until San Antonio with the exception of Tennessee (+260) and Kentucky (+116). 

4. Louisville: This is the exact same concept as Gonzaga. They are significantly underseeded and have an extremely tough match up against Auburn in their second round (assuming both teams win which they are favored to do). However if they can get through their first two games (this means beating Auburn as a +614 underdog) Their toughest potential matchup would be +223 against Michigan St. They would be underdogs against Iowa St (+200), Texas A&M (+140), and Michigan (+114).

Historical Note - The Louisville and Gonzaga situations feel incredibly similar to the 2014 tournament where a number 8 Kentucky who was definitely underseeded relative to their strength was able to beat the number one seed Wichita Shockers back when they had their two year run in the tournament. A lot of people were on Kentucky in that game and Wichita was not quite as good as Either Auburn or Houston but the historical precedent is something to keep in mind. 

5. Illinois: This is a similar story to Maryland, part of why the model likes Illinois so much is if they win their first game they would get Kentucky the weakest three seed in the tournament in the worst case scenario for game 2. Additionally If UCLA or Utah St. makes it to the Sweet Sixteen over Tennessee they matchup well vs both teams. The South is the weakest region as a whole with the weakest 1,3 and 4 seeds. This is the region that is mostly likely to implode and send a team that is not a top 2 seed to the final four. If something goes awry in the South look for Illinois and Gonzaga to pick up the pieces

6. Kansas: Another top 10 team in the preseason (If that kind of thing matters to you). What definitely does matter is that the Jayhawks are one of a few teams that has a massive coaching edge in the tournament. Bill Self wins a lot in March and that matters. They are pretty heavily favored against Arkansas where they are (-202) and then have a really winnable game against St Johns as slight underdogs (+141). If they are able to win both games they would most likely play Texas Tech (+188) or Missouri (+127), both teams the model likes but they have reasonable chances against each. They graDe out as the third highest non top 4 seed to make the Elite 8 behind Missouri and Illinois who have already discussed.

7. North Carolina: It is really bleak out there for the double digit seeds (worst than most years) In fact the sims calculate about a 2% chance for a 10 seed or higher to make the final four. That is 5 times lower than last years chances and historically it happens 1 in every 5 tournaments. It looks like it is not the year for Cinderella. If it is going to happen North Carolina easily has the best chance. Another team that was rated highly in the preseason and has failed to meet expectations. They even had to win a play in game to make the lsat 64 of the tournament. For an 11 seed they have quite a reasonable chance against most teams in their region and are even favored by Vegas in their game against Ole Miss (the model has them as comfortable underdogs at +167. Then they would most likely have to play Iowa St. (+292) and winning that would give them Michigan St (+313) but they aren't even favored against Marquette (+132) and barely against New Mexico (-140) if the Madness of March is in full effect. If they are able to find away to make the Elite Eight they would almost certainly be facing Auburn whom they have the worst odds of any possible game so far at (+900)It is definitely a long shot but is by far the best of a bunch of bad options
