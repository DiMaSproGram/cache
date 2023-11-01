// const express = require('express');
// const React = require('react');
import React from "react";
import express from "express";
import fs from "fs";
import ReactDOMServer from 'react-dom/server';
import App from './src/frontend/App.js';

// let renderReact = require('../src/renderReact.js');

const app = express();
app.use(express.static("public"))
// renderReact();

app.get('/cache', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(App, {}));
  // const html = renderToString(React.createElement(App));
  const robots = false && "noindex, nofollow";
  const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="idth=device-width, initial-scale=1/>
        <meta id="robots" content=${robots} />
        <meta name="description" content="Some description." />
        <link rel="stylesheet" type="text/css" href="src/frontend/App.css" />
        <title>Luma</title>
      </head>
      <body>
        <div id="root">
          <p>${html}</p>
        </div>
      </body>
      </html>
    `;
  console.log(html)
  const filePath = 'output.html';
  fs.writeFileSync(filePath, htmlContent);
  res.send(htmlContent);
});

app.post('/save', (req, res) => {
  const filePath = 'output.html';
  fs.writeFileSync(filePath, req.body.html);
});

app.listen(3030, () => {
  console.log('Server is running on port 3030');
});
