+++
title = 'Phishing Prediction'
date = 2025-07-05T01:52:23-05:00
draft = false
weight = 1
hero = "images/posts/phishing.jpg"

[menu.sidebar]
parent = "Phishing"
weight = 1
+++

{{< toc >}}

## Introduction:

This project first started out as me getting a phishing message on LinkedIn. I was annoyed that I got my hopes up, however brief, and realized that I could probably make some sort of model to evaluate if messages were sent with benevolent or malign intent. After doing a bit of research, testing and finally some coding I was able to get a model and app (check that out here “ (https://gonephishing.streamlit.app) ”).

Pretty much everyone has received some kind of phishing message. Whether it be through your work, personal, school or any email. Odd text messages or DMs from random numbers or accounts. Normally they can be pretty easy to identify. The phrasing is weird, there are misspellings, the content is often times not of interest. There are still plenty of these kinds of messages out there, easy to identify, report and ignore. However there are actors that have improved phishing and made it more difficult to tell whether or not the message is real (Remember, you never have to click a link in an email or message you can also go to your accounts on your own!). Before getting into the the specifics of the analysis I want to go over both the data and model used for this exploration into phishing. 

Data: The dataset is concatenation of datasets from HuggingFace. They are listed below along with a brief description and explanation for their inclusion. There are many different kinds of data included and the final dataset comprises about 90% Human written messaging, emails and conversations. The data is so heavily skewed with Human messages for a couple of reasons. First Human written messages (for now) are much more common. There is already a baseline phishing filter set up on most messaging and email platforms. So the model should get used to most messages being human. Second, the presentation of information/communication comes in many different forms, tones and styles. The model needs to be aware of as many as possible. A work email to a colleague will look different than dialogue between two or more parties which is much different to a text you might send to a friend. They vary in word choice, length, tone, content and more. In order for the model to have as complete of an understanding as possible it should have access to the most diverse dataset possible. 


## Data:

### [SMS Spam](https://huggingface.co/datasets/ucirvine/sms_spam)
- **Description:** Regular and Spam emails  
- **Explanation:** Gives model insight into both kinds of messaging being tested in overall model

### [Persona](https://huggingface.co/datasets/bavard/personachat_truecased)
- **Description:** Dialogue-based dataset  
- **Explanation:** Gives model insight into how natural written (and even spoken) conversation looks

### [Phish1](https://huggingface.co/datasets/zefang-liu/phishing-email-dataset)
- **Description:** Closer to an even split of Phishing and Safe emails  
- **Explanation:** Gives model examples of both kinds of emails to be classified

### [Phish2](https://huggingface.co/datasets/yashpapa6969/phising_attacks)
- **Description:** Big dataset with about 2% Phishing emails  
- **Explanation:** Gives model examples of both kinds of emails to be classified

### [Daily Dialogue](https://huggingface.co/datasets/pixelsandpointers/better_daily_dialog)
- **Description:** Written/spoken dialogue-based dataset  
- **Explanation:** Gives model more examples of natural written and spoken conversation

### [CNN/DailyMail](https://huggingface.co/datasets/abisee/cnn_dailymail)
- **Description:** News article summaries  
- **Explanation:** Gives model a look at more formal and concise communication

### [Spam_DS](https://huggingface.co/datasets/distrib134/ultimate_spam_detection_2)
- **Description:** About a 60/40 Spam/Safe email split  
- **Explanation:** Adds the bulk of the phishing/spam messages for the model


## Model:

The model used for this investigation and findings is the Distilbert-Base-Uncased model. There are plenty of options out there each with their specialities. This one was not chosen for any specific reason and there might even be a better option. It is based off of the BERT model from Google but is more lightweight and faster than its parent model while sacrificing a small amount of the original's accuracy and rigor. You can read more about the model here: [https://huggingface.co/distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)  


*A quick editors note before we get into the analysis of the data and model. In this line of research Human written messages are often referred to as Ham and automated or bot written messages are often referred to as “spam”. Spam can consist of many things and in the findings below it generally means all non human written messaging.*  


## Exploratory Data Analyst:

One of the easiest ways we can get an idea if a message is malignant or not is taking a look at the word choice. If you have native level English speaking skills the sentence/message will “feel wrong”. If you do not then it can be a bit harder to detect. Not surprisingly the Phishing/Spam emails try to impress a sense of urgency and use hard action words, trying to prey on fear and uncertainty. On the complete opposite side of the spectrum, professional emails/ads/scripts, try to avoid a strong emotional response (Ads being an exception, they use a more subtle psychological approach). Included below is a list of the 25 most common words used in the Ham/Human written messages  

- The graph is measuring the number of times a word appears in the Ham or Spam emails. The number on the left is a percentage of all total words and the number on the right is the percentage of messages it appears in. If a word is used multiple times in a message it can have a higher appearance rate than other words despite being in less total emails (take for example the first two words will and from)

![Top Ham Words](/images/Linkedin_bot_detection/top_phrases_ham.png)

I want to call out a couple of words and ideas from the graph. 
- First there are a handful of conditional words on here that are not going to be common in the Spam/Phishing messages, Would is the fourth most common word and Should sneaks in to the bottom of the list at number 24. Professional or even casual emails have a prudent tone to them and even if something is important or urgent this is almost never communicated directly in an email. It is generally already known from previous context.
- Both What and When are included on this list which are both question words looking for clarification to move the conversation/project/relationship forward. Of course they can be used to ask extremely direct questions in - Phishing emails but as we will see later, this is not super common
- Basically every single one of these words is extremely generic and it is hard to get an exact idea of the specific context they are being used

Comparing this to the most common words in Spam emails there is a stark difference

![Top Spam Words](/images/Linkedin_bot_detection/top_phrases_spam.png)

- First notice how Please is nowhere to be found on this graph while it clocked in as third most common in standard emails
- The $ being first followed by free being second says pretty much everything it needs to. These are emails trying to entrap you and these two words are great “hooks”
- Speaking of hooks, there is a large group of words trying to communicate urgency including “Act, Important, Avoid, Urgent, Requires, Notice, Attention, Issues”. When things are super important we do not send emails we send direct messages, talk in person or over the phone. We might use an email to set up a conversation but almost never email on these topics. Additionally if there is something so urgent with say bank account information, there will be many different kinds of communication (Phone call, mail, other emails which will not have the urgency in them). These terms are relatively exclusive to Phishing and malignant communication.
- There is another set of words trying to communicate benevolence “Free, Exclusive, Enjoy, Benefits”. You are not that lucky, probably. Additionally companies are not in the habit of giving away anything for free. If there is some sort of free promotion going on there is always some find print and if they are giving something out for free that advertises itself, no need to send out emails urgent or exclusive messages about it
- Lastly a couple of “words” are com and http. This is always the end game for the a phishing email you have to click on the link to go to their site and given them your information. Links do not have to have either “http” or “com” in them, this serves as an excellent reminder that 99.99% of the time there are links in phishing messages.  NEVER CLICK ON LINKS IN SUSPICIOUS EMAILS. You can always just go to the company's website and login into your account.

To see some of these words in action I also have a couple of graphs showing the most common 2 - 5 word phrases used in both emails. Notice how the themes discussed for the most common words appear in the most common phrases which makes sense. This is particularly true in the spam/phishing emails which try to evoke an emotional response through intense fear or joy. On the opposite side the phrases most common in the Human sent emails dont real invoke any emotion at all they continue to be prudent and concise in their communication style. Both Graphs are pictured below.

![Top Ham Phrases](/images/Linkedin_bot_detection/top_phrases_ham.png)
![Top Spam Phrases](/images/Linkedin_bot_detection/top_phrases_spam.png)

The last characteristic examined was message length. There might be some small difference here but unfortunately both emails are trying to be as efficient as possible so shorter emails are the goal for both sides.

![Ham Word Count by Message](/images/Linkedin_bot_detection/ham_word_count_histogram.png)
![Spam Word Count by Message](/images/Linkedin_bot_detection/spam_word_count_histogram.png)

As mentioned previously there are about 10 times more ham than spam messages in the dataset. The important part here is that the shapes are pretty similar. The first spike for the Ham messages due to the conversational datasets included and not necessarily emails bit could be transcribed movie dialogue or messages submitted from direct messaging apps (conversational data). The second spike is what the more typical written message (email specifically) would entail. The Spam message look like the are lacking messages in this 30 - 80 word length relative to the Ham messages. While this is true this is a pretty flimsy way to look at the data. Remember the Ham has several different kinds of messaging and communication being analyzed including summaries of news articles which can be a bit longer than your standard email/DM.

Hopefully after just this brief word, phrase and message length analysis you can more easily identify emails that are spam/phishing and are coming from bad actors. Remember for any reputable company you can always go to their website on your own or find their phone number from the site. Never click on links or call numbers provided in emails especially if you are suspicious.

## Results:

After about 5 hours of training on a standard 5 year old GPU the model produced some pretty intense results. Having an accuracy and precision of 99%, Recall of 94% and an F1 Score of 96%. This is obviously incredibly high and a really good sign. However it does a pose a bit of a problem which is that the data might be… too different. This will be discussed in more detail later. But to be fair, genuine Human messaging and communication should be extremely different to spam and phishing messages. 


## Evaluation:

Taking a look at the Confusion matrix the results look great.

 ![Confusion Matrix](/images/Linkedin_bot_detection/confusion_matrix_seaborn.png)

So the model is accurate and that is that right? Well no, not so fast. The model needs to be evaluated in more than one way to understand how it will perform on new data. If we look at a calibration plot of the data there are some more concerning features present. If you are unfamiliar with a calibration plot it is a way of validating the data by checking how often the model predictions are correct. With pretty much any machine learning model it is not predicting a 0 or 1 but rather some percentage chance of one of the classes. When the model gives a 70% for class one, we want it to be right 70% of the time.

![Calibation Plot](/images/Linkedin_bot_detection/calibration_plot.png)

In an ideal or perfected calibrated model we would see the blue line completely cover the grey dashed line. That is not what we are seeing here. The model has a long way to go before it is accurate as the initial metrics and confusion metrics would suggest. One factor contributing to the awkward shape of the calibration plot is that the model does not have a lot of observations it is struggling to classify. Because there is a pretty big difference between a lot of the ham observations and the spam ones. The model has an easy time classifying each. So a relatively easy way for this to ‘self correct’ is to add more spam ads like emails such as my weekly reminder about the Nordstrom half annual sale which always seems to be next week. 

## Business Ideas:

As a stand alone tool this is great to use and can help anyone in a pinch figure out if they are being targeted by phishing and sort through genuine and spam emails. Taking a step back and looking at the big picture this idea has one application screaming out to be used, as a filter on Email and in the messaging/post function of apps. Pretty much every single one of those has some sort of Phishing protection but go check any of your emails or go check any of your messages or post history for any social media app and see how many of those were typed and sent by an actual human. The filtering has tremendous room for improvement and this is a step in the right direction. A perfect use for AI. Obviously the model has a long way to go to be implemented in a professional setting but the idea is ready to be nurtured. 


## Improvements and Next Steps

More data would be a great start but it is not the full story for improving this model. Having a greater diversity of messages is the biggest place for improvement. Being able to add Ads from friendly actors/companies/people so that the model can differentiate between a good and bad bot is going to be mandatory if this is to be implemented on a personal email. I want to see the emails about Bath and Body Works having their 7 for $27 sale on soap. What I do not want to see are the scam of the month and that “there are horny singles in my area”. So having the ability to introduce ads and subscribed to newsletters would be a huge step in the right direction. 

There was no feature engineering done on the data. That was on purpose for a couple of reasons, mostly because the dataset is not being saved locally or cached. This could lead to huge improvement in the model. Adding features such as if the email/message is a response or part of a larger chain, repeat of a previous email (or extremely similar). Additionally, being able to differentiate between good bots, bad bots, ads and scripts would lead to a more accurate script (probably best to use several models here). This is more of a data classification improvement and not so much an engineered feature. I am sure there are plenty more ideas for interesting engineered features which could also lead to noticeable or nontrivial improvements.

The last place for improvements is the hardware. Currently this is not very feasible, I am just a guy with a computer but a hardware improvement would go a long way for the model. 

Luckily in this case the next steps can just be to implement the above improvements. For me it has to start with the data diversity and quality. Currently it is fine but it could be better. Not using the whole dataset of any one of these and sampling a bunch of different datasets to get a sample from a wider array of conversations, writing styles, summaries, ads, scripts, phishing, spam, etc etc etc. After that finding a clever and efficient way to further classify the Spam and Ham would be great to make the model more accurate and applicable for its possible business applications. Lastly and perhaps the most important next step and improvement is getting feedback!


## Final Thoughts

This is an excellent start for a tool whose target audience is well everyone really, but aimed at people who are not super technically savvy. It can be intimidating getting demanding messages about your bank accounts, insurance, subscription services, mail, etc etc. I believe this model can really help the people who need it most. Some of us can tell a message/email is complete nonsense/phishing just by looking at it, not even reading it. But not everyone is chronically online, up to date with the latest scams, phishing or technology. Additionally not everyone who uses English regularly had the luxury of growing up as a native speaker. 

As with any AI based tool (or just any tool in general) this should be one part of the decision making process. Sometimes the model is wrong. As highlighted with both the calibration plot and confusion matrix. There is plenty of context the model does not have which goes into the final decision. Please use your best discretion when including the model in your decision making process and always always always err on the side of caution.

I believe in the idea for both as a stand alone tool and being incorporated into messaging platforms as a filter. I look forward to exploring improvements for this tool in the future.


