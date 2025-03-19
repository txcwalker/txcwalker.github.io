+++
title = 'Yelp and Zillow Housing Price Index'
date = 2024-07-29T01:52:23-05:00
draft = false
weight = 3
+++


# Zillow Analysis

## Housing Price Prediction

This analysis was motivated by the following question: Can the collected data from Yelp be used to approximate the average housing price of a zip code?

Data was collected from Yelp using its API and a model was created to try and predict the average cost of a house by zip code. If the model shows promise, it can be used to help predict future changes in housing price as the average price/rating/review count of a zip code's restaurants increase or decrease. This could help with improving city logistics, ease gentrification, provide investing opportunities, and much more. The core idea is popular restaurants could be a proxy variable representing an increase in interest in a particular area and thus an increase in the average price of housing.

## Data Constraints

The Yelp API, like most APIs, limits the number of times it can be "called" (data can be retrieved) in 24 hours. By data standards, a relatively limited amount can be called per day, say 5000 observations, which seems like a lot. However, after cleaning the data (removing observations with too few reviews or that is missing important data, duplicates, irrelevant data, etc.), the number of clean observations obtained daily comes down significantly. After collecting data over the combined time span of 6 weeks, there are only about 80,000 total observations with about 2100 of the over 41000 unique zip codes represented in the data. Once the data was further cleaned and combined with the Zillow data, there were exactly 2000 zip codes tested by the model. This is only about 5% of the total zip codes in the US. Additionally, not every restaurant on Yelp is in this data set, including some of the most popular, highly reviewed/rated restaurants in every city.

So the goal of the model is to try and help predict housing prices. If it is possible to do this, the next step would be to use the data to forecast future housing prices based on changes in the restaurant scene of a city.

## Variables

There are many variables to choose from and plenty more that would be useful but are inaccessible. Variables from both the Yelp data set and the Zillow data set were used. Below is a list of the variables and a brief description.

### Yelp

**Number of Reviews** - How many reviews an individual restaurant has received. Presumably, the reviews are monitored by Yelp and any obviously fake/bot reviews (overtly positive or negative) are removed and not considered by any part of the process on Yelp. The average, median, and sum of the number of reviews for a zip code are used in the model.

**Rating** - On the Yelp search page, this is a number in the form X.Y in a range from 1 to 5, with 1.0 being the worst and 5.0 being the best. Data received from the API limits the output to whole numbers and their halves. For example, 4.2 is rounded down to 4 and 4.3 is rounded up to 4.5. This means there are only 9 possibilities for rating, which results in a massive loss of information. The average and median rating are used in the model.

**Price** - This is a pretty imprecise measurement. Yelp uses dollar signs ($) to measure the price, and the only options are $, $$, $$$, $$$$ from cheapest to most expensive. What the measurement lacks in precision it makes up for in simplicity. The average and median rating are used in the model.

### Zillow

**Price** - The average price of a house in a given zip code.

**City** - City in which the zip code is located.

**State** - State in which the zip code is located.

**Metro** - Greater Metro area in which the zip code is located.

## Creating the Model

There are many ways to analyze and learn about the relationships between multiple variables. Machine learning algorithms are quickly becoming the most popular. Some of these models are simple, while others are complex; all of them aim to try and quantify the relationship between the chosen variables and hopefully better explain the world around us.

Machine learning can be broken down several ways. There are plenty of options to choose from when choosing a model type, and new options are constantly being introduced into the community. The model chosen to examine this data set is a random forest. There are pros and cons to every approach. Before discussing these, here is a quick description of a random forest. 

There is a simpler machine learning technique called "decision trees." A random forest is a collection of these trees analyzed together to reach a conclusion. A decision tree is similar to a game of twenty questions, where the computer is asked a yes or no question, and depending on the answer, a path (branch) is formed until the computer arrives at a final answer. This process is repeated multiple times until algorithm is confident in where a given branch will lead.

![Decision Tree](https://miro.medium.com/v2/resize:fit:720/format:webp/1*E2br87UjCErSE2eqJ56DWQ.png)

In the above example, if x(0) is less than or equal to 5.5, the tree goes left; otherwise, it goes right. If it goes left, it arrives at its final answer. If it goes right, it asks another yes or no question (less than or equal to 11.5) and then arrives at its answer. This branching process is done as many times as needed (based on the number of variables) until each branch reaches an endpoint.

The benefits of using a random forest include:

- Good with non-linear relationships
- Good for higher-dimensional space (good with lots of variables)
- Not prone to overfitting
- Feature scaling generally not needed
- Feature importance can be obtained

The cons to using a random forest are as follows but in this case the pros outweigh the cons:

- For large data sets, it can be resource-intensive (only 2000 observations for this data set)
- It is a "black box model," making it more difficult to understand the decision-making process
- Random forests are known as "greedy algorithms," meaning they can't see past the two options in front of them when faced with a decision. So it will choose the better path based on the options immediately in front of it and not necessarily the best overall option

The variables in the model are listed above, with Zillow Price being the dependent variable (what is being predicted). The data set is relatively small, so the model was trained on 75% of the data set (exactly 1500 observations) and tested on the remaining 500 observations. As a reminder, this data set consists of 2000 rows of summary statistics (mostly averages and medians), with about 80,000 Yelp observations funneling into 2000 unique zip codes.

## Evaluating the Model

Two of the more common  quantitative evaluation techniques for random forests are: Mean Squared Error (MSE) and R{{< sup "2" >}} (coefficient of determination). MSE measures the average difference between the true and predicted values by the model, squared to make it positive and to more heavily penalize extreme misses. The squares are then summed and averaged to produce the final MSE. R{{< sup "2" >}} provides a numerical value between 0 and 1, indicating how much of the variance in the dependent variable is explained by the independent variables.

**Mean Squared Error (MSE):** 80,007,257,500.25774  
**R {{< sup "2" >}}>:** 0.5229242919073203

The MSE initially appears quite high, and the square root of this number, $282,855.54, is still concerning. Several factors may contribute to this, which will be discussed later.

The R{{< sup "2" >}} is actually quite adequate approaching good. For a real-world scenario, having more than half the variance in housing prices explained by the mostly Yelp data provided is encouraging for the prospect of the model moving forward.

As mentioned, random forests are black box models, making it challenging to understand exactly what the model is "thinking" or what is happening in its decision-making process. Fortunately, there are tools that provide some insights into how it arrived at its conclusions.

Two types of residual analysis were conducted to examine where the model was most and least accurate. The first shows the True vs. Predicted values, and the second shows the differences by index.

The following graph indicates that the model is relatively accurate when the average house price is less than $750,000. There is a breakdown from $750,000 to $1.00MM, and anything after that is problematic. The model never predicts anything over $1.76MM, and only one other prediction exceeds $1.5MM. It struggles with higher-priced houses while being relatively accurate with lower-priced houses.

![True vs Prediction](/images/Housing_Price/True_vs_Prediction_YelpZillow_HousingPrice.png)

Since the model loses accuracy as the price of houses increases, it significantly hinders its ability to predict increasing housing prices based on Yelp activity (recall that is the end goal). This is reinforced by the seemingly hard cap at around $1.75MM. By placing lines at y and x = 750K, the graph looks like the following:

![True vs Prediction with Green Lines](/images/Housing_Price/True_vs_Prediction_YelpZillow_HousingPrice_GreenLines.png)


The table below details the number of points in each of the quadrants in the above graph.

{{< tables file="search_score_tables" key="Quadrants" >}}

This is another encouraging sign. If the model can be better trained for more expensive houses, then potentially it can have applications.

This second residual analysis shows the differences (residuals) by index number, and it looks pretty good. A decent portion of the differences are within the absolute value of 200K, and nearly all of them are within 400K. It is, of course, by no means ideal, but it is a place to start. The remaining 25 outliers are what are really punishing the MSE (as they should).

![Residual Analysis](/images/Housing_Price/ResidualAnalysisRFR_YelpZillow_HousingPrice.png)

This, in conjunction with the True vs. Predict value graph, shows that the model is almost being double punished by the outliers and might be suffering from overfitting. The outliers have massive squared errors which contribute to the high MSE. Additionally, it seems the model has a cap at 1.75M and is more reluctant to guess increasingly high numbers. So, the issue that needs to be solved is accuracy for more expensive houses.

The final piece of visualization is looking at which variables the model most highly prioritized when using the data to predict housing price. In the graph below, no one variable has a dominant percentage.

![Feature Importance](/images/Housing_Price/Feature_Importantce_RFR_YelpZillow_HousingPrice.png) 

The mean number of reviews was the most important feature, but it capped out just above 25%, with two additional variables (review count median and mean price) coming in at just below 15%, and state coming in just behind the two of them at about 13%. These four variables are doing most of the work.

A bit surprising, challenging the initial thought process behind the idea that spurred this analysis, is that restaurant rating looks to be essentially useless in the model evaluation of relative importance. This could be due to the serious loss of information from the rounding when the data was received via the Yelp API. Even though these are averages and medians on a 1-5 scale, the small differences can make a big difference. In the downloaded data, 4.3 is viewed the same as 4.7, and there is a massive difference between 4.7 and 4.8 (4.5 vs 5.0). Orit might be too random to help with the prediction.

Here are three graphs to show the biggest misses, closest predictions, and the final one shows all of the data plotted on a map of the United States. The top map is all of the residuals plotted at the average coordinates of its zip code. The size and color scale with the size of the difference. The color scale is pictured on the right, and as the circles get bigger, so does the size of the miss. Size scale is based on the absolute value, so negative values are not the smallest.


## Residuals Plot

{{< YelpZillow id="residuals-plot" json="/images/Housing_Price/residuals_plot.json" >}}


The second map shows the least accurate predictions from the model. These are the biggest circles from the map just above. The size scaling is less important on these since they are the worst predictions. This is just an easy way to visualize the worst of the worst.


## Least Accurate Residuals

{{< YelpZillow id="least-accurate-plot" json="/images/Housing_Price/least_accurate_plot.json" >}}


The final map shows the most accurate predictions from the model. These are the smallest circles from the first map. Again, as with the least accurate map, the size and scaling are all relative and not as important. This is just an easy way to visualize the best of the best.


## Most Accurate Predictions

{{< YelpZillow id="most-accurate-plot" json="/images/Housing_Price/most_accurate_plot.json" >}}


## Conclusions

There is some promise to this model. It definitely is not perfect due to the combination of skewed data and the overall lack of data. It is unclear how much of the total Yelp data is included in the data set, but it is surely less than 10% and probably significantly less than that. Only 2000 of the 41,000 US zip codes are included. So, there is room for significant improvement in this department. Unfortunately, it is easy to identify this problem but not so easy to rectify.

A 52% R{{< sup "2" >}} is not bad on its own, and with all of the learnings from this process, it is encouraging for the next steps that can be taken with a more complete version of the data set. Of course, it can be improved, and the change in these variables can be monitored month to month to help predict a change in housing price. This data has plenty of use cases, many of which have not been conceived.

The biggest roadblock to the model is its performance for the more expensive housing prices. Obviously, more data would help, but based on its sporadic performance when the price was greater than 750K, there need to be more adjustments to help this part of the model. The data might respond better to a different type of analysis, or maybe just the housing prices greater than 750K (or some other value) should be evaluated by a different model (sort of like a piecewise function). The analysis has shown that this is an idea worth pursuing, even if the initial thought behind using the Yelp data seems to be irrelevant.





