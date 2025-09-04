+++
title = "Yelp Introduction"
date = 2024-06-19T01:52:23-05:00
draft = false
weight = 1
hero = "images/posts/downtownseattle.jpg"

[menu.sidebar]
parent = "YelpZillow"
weight = 1
+++

### Summary  
This is an introduction to the analysis done on Yelp included on this site. It goes over some of the difficulties of the data as well as providing a brief overview of the process
taken to construct the project.

The Yelp API has its positives and negatives. It is relatively easy to get access and get started using. There are plenty of pages of documentation on how to use the API and its limitations. In its most basic form, it is a solid source of data from Yelp. These positives should not be understated; it is important that public data be easily available to the public. However, there are some negatives I would like to point out that I think should be addressed.

### Ratings

This is by far the biggest issue with the API. The ratings are rounded to the nearest half (4.3 is rounded to 4.5 and 4.2 is rounded to 4, etc.). Why? This leads to a lot of information being lost and greatly skews the mean and median (median now has an even more limited number of options). The stars are surely just an average of the ratings, so why are there only 9 options instead of the 400 possible if it were set to two decimal places? The information is already easily available and displayed on the site to one decimal place. What is being gained by sacrificing the accuracy of the rating to people looking at the data?

### Odd Observations

During the data acquisition process for this project, the API called US cities. Several non-US countries showed up. In some cases, this makes a lot of sense with Detroit, El Paso, and San Diego being large cities on international borders. It is expected to see some spillover as the cities on the other side of the border (Windsor, Juarez, and Tijuana) are only different names because of some arbitrary line. However, getting results for Argentina, Malaysia, the Philippines, etc., is bizarre. Again, it is easy to filter these out, but what were they doing there in the first place?

As an example:

{{< tables file="introex" key="Example" >}}

Where Virginia (VA) is listed as a state of the Virgin Islands (VI). All of the other information is correct: the zip code, coordinates, address. So why and how did the Virgin Islands end up as the country? As mentioned, these observations are easy enough to filter out. The reason it is a problem is because it is unclear whether the data observed in these is mislabeled on the front or back end (maybe both). Are these legitimate observations that should be included in the analysis? Or did these observations somehow slip through the cracks and should they be ignored? For this analysis, the latter was chosen.

### Mismatching Columns

This is a quality of life issue. For the most part, all of the columns came in the same order when using the API. However, in about 25% of cases, the price column was moved from being 7th in the table to second to last. Most cities had it 7th, but there were plenty of cities which had it in the second to last position. For example, San Antonio and Houston both had it second to last, but Dallas had it in its normal 7th position. Nashville had it second to last, but Memphis had its normal 7th position. San Francisco had it 7th and San Diego had it second to last. You get the idea. There was seemingly no way to predict which cities would be in which format. It was not by state, latitude, or longitude. The unpredictability is frustrating and makes this more difficult for the end user, especially for beginners.

### API Limitations

The last point to be addressed about this project’s interaction with the Yelp API is the limitations. This is not a criticism of the API, rather a statement on the dataset that was formed from the collection process. On the “standard” version of the API, there is a limitation to the number of ‘calls’ that can be made to the API. Essentially, one IP address/account can only make so many requests in a day/month so it does not crash the entire system. Makes sense; this is great on many levels. What is a bit more bizarre is there is no way (at least that was found for this project) to pick up at the last save point from the data retrieval. Take New York for example. The API is called and run for the first X (say 2000) observations. This data is received, saved, and processed. However, trying to get the next 2000 observations proved to be difficult. In fact, it was not able to be done. Impossible? Probably not, but many different approaches were tried and none of them were successful. All of this is to say this dataset is comprised of the first X amount of observations from each city that was called.

Again, nothing is perfect; no one is expecting this. Most of this data is scrapped from each vendor's website and if it is copied as it appears exactly. However, from an ease of use and analysis perspective, these are a few things that can be relatively easily cleaned up. In an ideal world, APIs could be used by anyone, not just those who can code.