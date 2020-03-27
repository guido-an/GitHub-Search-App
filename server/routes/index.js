const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/search/repositories', (req, res) => {
  if (!req.query.q) {
    return
  }
  axios
    .get('https://api.github.com/search/repositories?q=' + req.query.q)
    .then(response => {
      res.status(200).json({ repositories: response.data.items })
    })
    .catch(err => {
      res.send(err)
    })
})

// router.get('/repos/:owner/:repo', (req, res) => {
//   axios
//     .get('https://api.github.com/repos/')
//     .then(response => {
//       res.status(200).json({ repo: response.data })
//     })
//     .catch(err => {
//       res.send(err)
//     })
// })

router.get('/repos/:owner/:repo', (req, res) => {
  const { owner, repo } = req.params
  axios
    .get(`https://api.github.com/repos/${owner}/${repo}`)
    .then(response => {
      res.status(200).json({ repo: response.data })
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router
