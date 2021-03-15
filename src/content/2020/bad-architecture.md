---
slug: "/blog/bad-architecture"
date: "2021-02-04"
thumbnail: "https://res.cloudinary.com/bahachammakhi/image/upload/v1592999088/1_g_Gf_Wgs_GB_5x_H2_Gt9_GP_pkm_Vw_2x_aff8b814be.jpg"
title: "Bad architecture"
tag: code-quality architecture
popular: false
author: Baha eddine chammakhi
---

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ti2g0v92x7htjxkij30t.png =600x600)



I’ve been lately working on a mobile application backend I am gonna talk on the next posts the problems I faced, things I learned.
👇👇👇👇


In this post, I'm gonna talk about one of the problems I faced is mainly using Redis as a database for those who don't know **Redis**.👨🏻‍💻

Its a memory database used mainly on caching.👨🏻‍💻

As we said its a caching database so we cant use it as the main database for our social or chat app.👨🏻‍💻

So I was obliged to redesign the database again using MongoDB creating models.

**Making choices was the hardest part.**

So what I got from this experience.

👇

- Before you start coding think,

- write down the main functionalities you gonna build, design them, analyze, and read more about your choices  so you don't get blocked after.