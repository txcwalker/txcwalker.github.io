+++
title = "Databaseball Overview"
date = 2025-08-13
draft = false
weight = 1                      
hero = "images/posts/databaseball.jpg"

[menu.sidebar]
parent = "Databaseball"            
weight = 1                        
+++

{{< toc >}}

## Introduction

I made an app that gives users the ability to query a real-time relational database of baseball statistics. This all started when a friend of mine expressed frustration that a tool like this did not exist. He asked me to make it my next project — and so I did.  

I feel I was able to produce something that is really interesting and useful (if you’re into baseball). But before getting into the end product, I’d like to discuss the setup and process that led to it.

---

## Database Creation and Maintenance

The first step was building a database of baseball stats. Ideally, this would include not just season-by-season data, but also game-by-game and even pitch-by-pitch data. While that’s the ultimate goal, the data I was able to quickly implement was season-by-season, including postseason stats, award winners, team results, and (for seasons starting in 2002) more advanced statistics.  

By combining data from the **Lahman project** and the **pybaseball package** (scraping FanGraphs), I created a relatively comprehensive database of season-long player statistics. The Lahman database even goes back to 1900 and further for some tables.  

The end goal is to eventually include as much pitch-by-pitch data as possible, but more on that later.

I decided to host the database in the cloud using **AWS**. This offered:

- A cost-effective way to store everything.
- Scalability and flexibility for future growth.
- Strong security.
- Seamless integration with my GitHub project for automatic updates.

**Daily updates:**  
The database updates at **8 AM EST** each morning, refreshing the FanGraphs portion of the database. This typically takes a few seconds (sometimes up to five minutes). Lahman updates only a few times a year and is a year behind on in-season stats, so those updates are handled manually.

---

## Setup

Database maintenance is the most important part of the app — without it, there’s no app.  

The other key component is the model that translates natural language questions into SQL (PostgreSQL in this case). For that, the app uses **Google Gemini**.  

Other available options include:

- OpenAI  
- AWS Bedrock  
- Azure OpenAI  
- Meta LLaMA 3  
- And many others.

These large language models cost **tens or hundreds of millions of dollars** to train, making custom training out of the question. The model here is leveraged purely for query translation.

---

## App

Using the app is straightforward:

1. Type your question into the text box.  
2. Click **"Generate SQL and Run"**.  

Even for complex queries involving multiple joins, the model should generate results quickly. If it takes more than a couple of minutes, try reloading and rephrasing your question.  

**Pro tip:** The more you use the app, the better you’ll get at phrasing questions in ways it understands.

---

## Usage Tips

Like any tool, this one takes practice. At first, it might feel clunky — here are some tips to improve results:

- Use **full names** when requesting specific player stats.  
- If you want multiple leaders, say so:  
  > Show me the batters who are the league leaders in home runs.  
- The default leaderboard size is 10 — but you can request any number.  
- Remove as much ambiguity as possible.  
- Rephrase the question if results aren’t as expected.  
- Be specific and concise.

---

## Restrictions

Due to the current setup, there are some limitations:

- **No game-by-game data:** The model cannot answer streak-related questions or queries about the last X days. Adding Statcast support is possible but challenging — it only goes back to ~2015 and involves massive daily data storage.
- **No team split for trades:** If a player was traded mid-season, their team will appear as `"---"`.  
- **Not every FanGraphs variable is included:** Currently, 116 hitting stats and 102 pitching stats are available. Missing variables are mostly pitch-level measurements, which may be added later.

---

## Next Steps

Future improvements could include:

- Enhancing the display and adding visualization support for query results.  
- Adding Statcast or other pitch-by-pitch data for deeper analysis.  
- Storing popular/basic queries for faster retrieval.  
- Preloaded pages for common queries (e.g., team stats, leaders, award candidates).  
- Feature engineering for more selective searches.  
- Adding gambling odds and related data.

---

## Conclusion

This was a fun project with the potential to remain useful far into the future. There’s plenty of room for improvement, but the underlying technology is the real star — **natural language translation** makes SQL accessible for those without database experience.

While this app is built for baseball stats, the same logic could apply to **any** database. Imagine querying Wikipedia with:  

> Show me pages with more than 250 words about Julius Caesar.  

Or:  

> Which pages discuss the aftermath of D-Day in detail?  

The possibilities are endless.  

Of course, there’s still a lot of manual analysis required after getting results — computers are great at following detailed instructions, but interpretation is still a human strength.

