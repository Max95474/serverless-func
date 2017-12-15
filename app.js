'use strict';

const express = require('express');
const multer = require('multer');
const fs = require('fs');
const {exec} = require('child_process');

const upload = multer({ dest: 'actions/' })

const app = express();

const PORT = 3000;

app.post('/action', upload.single('action'), (req, res) => {
  console.log('File: ', req.file)
  fs.rename(`actions/${req.file.filename}`, `actions/${req.file.filename}.${req.query.type}`, err => {
    if(err) return console.log('Rename error: ', err)
  })
  res.status(200).json(`http://localhost:3000/action/${req.file.filename}.${req.query.type}`)
})

app.get('/action/:actionId', (req, res) => {
  const params = req.query
  const {actionId} = req.params
  if(actionId.match('js')) {
    res.status(200).json(require(`./actions/${actionId}`)(params))
  } else if(actionId.match('bin')) {
    exec(`cd actions && chmod +x ${actionId} && ./${actionId} ${params.param1} ${params.param2}`,
      (err, stdout, stderr) => {
        if(err) return res.status(500).json(err)
        return res.status(200).send(stdout || stderr)
      })
  } else if(actionId.match('tar')) {
    res.sendStatus(200)
  }
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`))