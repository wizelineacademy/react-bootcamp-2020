import express from 'express';
import path from 'path';
import React from 'react';
import ReactDom from 'react-dom/server';

import Routes from '../src/routes';
import store from './store';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const PORT = process.env.port || 3000;

const fs = require('fs');

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', 'build', 'static')));

app.get('/*', (req, res) => {
    const context = {};
    const app = ReactDom.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <Routes />
            </StaticRouter>
        </Provider>
    );

    const indexFile = path.resolve(path.join(__dirname, '../build/index.html'));
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.listen(PORT, () => {
    console.log(`server started: http://localhost:${PORT}`);
});
