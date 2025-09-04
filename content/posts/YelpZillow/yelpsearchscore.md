+++
title = "Yelp Search Score"
date = 2024-06-19T01:52:23-05:00
draft = false
weight = 2
hero = "images/posts/pasteldenata.jpg"

[menu.sidebar]
parent = "YelpZillow"
weight = 2
+++

{{< toc >}}

# Search Score

After using Yelp to find the best restaurants ‘near me’ for more than a decade, I have seen a decline in the accuracy and validity of their search algorithm. Too often the search results seemed random and incomplete. So after years of confusion, I finally decided to try and take a look under the hood. See if I could understand their search algorithm and results. Then finally take a stab at my own search algorithm and see how closely my results compare to Yelp's.

This started by using the Yelp API and accessing as much data as possible. The API has daily call limit (about 10 max calls) and a call limit of about 2000 observations per call. So after gathering data over several weeks, the dataset was defined. After cleaning close to 100,000 total observations from over 50 major metropolitan areas around the United States. This is a small percentage of the total observations that Yelp has but it is big enough to run an analysis on, develop a model, and evaluate the results to form a few conclusions on the overall validity of both search algorithms.

When accessing data from the Yelp API, there are plenty of variables that can be selected to accompany each observation. For the purposes of this discussion, there are two: Number of Reviews and Rating. With just these two variables, we should be able to understand the current Yelp algorithm and create a simple approximation of it as long as the current search algorithm is relatively unbiased.

Let’s start with creating a version of Yelp's search algorithm. It should show the user the best restaurants near them in an objective, unbiased order. The metric should rate the restaurant’s quality and have some verification component. The two variables mentioned earlier (Reviews and Rating) are a perfect and concise way to accomplish this task. The Rating is the measure of quality (on a scale of 1-5, where 5 is best) and the Number of Reviews is an easy way to verify the rating; the more reviews a place has, the more accurate the rating.

It would be a dream to be able to multiply these numbers together, arrive at a score, and then sort our results on this number, but the scales of these numbers prevent this from being accurate. The Number of Reviews would have significantly more impact; imagine the following example:

Recommendation Score = Rating * Number of Reviews

Restaurant Score 1: 5 * 50 = 250

Restaurant Score 2: 4 * 100 = 400

Obviously, Restaurant 1 should have a way higher ranking, but it is nearly half of Restaurant 2. To accommodate for this, each number will be scaled in the following way. The Rating is the most important part of evaluating the restaurant. Lower values should be punished and higher values should be rewarded, so this number will be squared. As for the Number of Reviews, this is important but after a certain amount of reviews, the rating is going to become stable. So this number is important but should have diminishing returns. A perfect way to scale this down is a log function, in this case, the natural log. The scaling can be seen below, and now the algorithm is as follows: 

**Recommendation Score = Rating {{< sup "2" >}} * ln(Number of Reviews)**


<!-- x vs ln(x) -->
{{< tables file="search_score_tables" key="Natural Log Scaling" >}}


<!-- x vs x2 -->
{{< tables file="search_score_tables" key="Exponential Scaling" >}}

Now that we have a simple version of how a search score and recommendation algorithm looks, let's test it out and evaluate both it and the version that Yelp uses!

<!-- Example -->
{{< tables file="search_score_tables" key="Example" >}}

A couple of quick notes before the conclusions. First, a reminder, as the API only gave the rating in half-number intervals. So the Wurstkuche is rounded down from 4.2 to 4.0. Additionally, there is a small difference in the number of reviews for Wurstkuche because these results were not taken at the same time (few days difference). The Green Highlighted observation is what both models agree on, the purple highlighted observations are ones that would be in the model's top ten if they were in the data set and red highlighted observations are red flags.

<!-- Yelp Search table -->
{{< tables file="search_score_tables" key="Yelp Search" >}}

<!-- Model Search table -->
{{< tables file="search_score_tables" key="Model Search" >}}

Unfortunately, this is not a one-off occurrence. This was the case for all of the zip codes researched. Below is the same search functionality used to create the model’s top ten list. Go ahead and select any zip code from the dropdown and compare it to the Yelp Results. Obviously, not every zip code was checked. There are over 2000 of them in the data set, and if the researched ones are the outliers, then that is great! But if you don’t believe me, try for yourself below. Pick any zip code, then run a Yelp search using the recommended search setting and compare it to the results that appear on this page!

So where did the model go wrong? It is only getting two pieces of information versus the tens if not hundreds the Yelp algorithm uses. Of the two pieces of information, it is getting one of them (the one more heavily weighted in the model) has significant information loss because it is rounded (no idea why it is still transmitting the same amount of information one place past the decimal).

The biggest place of improvement for the model is the number of reviews itself. After a certain number of reviews, there is going to be no real change in the restaurant’s rating. There is some critical number of reviews where, for the sake of the math, they become irrelevant. What new information is being communicated from review 1000 to 2000 or 3000 to 5000? Where is that critical mass point? It is probably different for every restaurant. Some generalization should be made, maybe at 1000, but more research would be required to know. However, it is possible that the excess reviews are communicating something outside of the rating. For example, maybe the restaurant has a unique concept which makes the experience one of a kind? Or perhaps this is the first/only restaurant of a certain cuisine in a city and while the rating is stable, it is something worth trying.

On Yelp’s end, how is it that in the top ten for one of many zip codes in Downtown Los Angeles, there are three restaurants with 60 or fewer reviews and two with fewer than 15? Are some reviews worth more than others? Does the location of the search or location of the zip code influence the type of restaurant that will show up in searches? For example, part of this zip code is an area known as Little Tokyo, so are Japanese restaurants more likely to populate? Are the searches considering data from the user's computer? For example, when these searches were run across multiple accounts and web browsers, different results were seen. There is no guarantee that the person running the Yelp search is the same person who uses the device most of the time. Accounts/computers are often shared between families, kids, couples, roommates, companies, etc. Is there a point where a review is no longer used in the algorithm? For example, if a review was left longer than x years ago, is it disregarded by the algorithm? If so, then why does it still show on the site if it is not being used? Is there marketing being considered by the search? Are these three restaurants prolific advertisers on social media or elsewhere, which is being considered by the algorithm? A most recommended list should surely be agnostic of advertising and marketing.

Both algorithms have their strengths and weaknesses. Clearly, neither is perfect and both are in need of improvement, which makes sense, as it is difficult to quantify human preferences when each of us has a slightly different opinion. The best algorithm probably lies somewhere in between the simple model created here and the more complex version Yelp has been using.   


# Find Top Restaurants by ZIP Code

{{< search_form >}}