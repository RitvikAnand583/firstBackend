require('dotenv').config()

// import express from "express"
const express = require('express')
const app = express()
const port = 3000


const githubData = {
  "login": "RitvikAnand583",
  "id": 128292481,
  "node_id": "U_kgDOB6WWgQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/128292481?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/RitvikAnand583",
  "html_url": "https://github.com/RitvikAnand583",
  "followers_url": "https://api.github.com/users/RitvikAnand583/followers",
  "following_url": "https://api.github.com/users/RitvikAnand583/following{/other_user}",
  "gists_url": "https://api.github.com/users/RitvikAnand583/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/RitvikAnand583/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/RitvikAnand583/subscriptions",
  "organizations_url": "https://api.github.com/users/RitvikAnand583/orgs",
  "repos_url": "https://api.github.com/users/RitvikAnand583/repos",
  "events_url": "https://api.github.com/users/RitvikAnand583/events{/privacy}",
  "received_events_url": "https://api.github.com/users/RitvikAnand583/received_events",
  "type": "User",
  "site_admin": false,
  "name": "ritvikanand",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2023-03-19T11:03:04Z",
  "updated_at": "2023-09-30T20:47:17Z"
}


app.get('/', (req, res) => {
  res.send('JAI SHREE RAM')
})

app.get('/shreeRam', (req, res) => {
    res.send('<h1>SHIYA VAR RAM CHANDRA KI JAI </h1> <br /> <h1> Haa Bolo PAWANSHUT HANUMAN KI JAI  </h1>')
  })
  
app.get('/shivJi', (req , res) => {
    res.send('<h1>Om Namah Shivaya</h1>')
  })

app.get('/github' , (req , res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})