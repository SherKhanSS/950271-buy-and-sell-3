'use strict';

const {Router} = require(`express`);
const mainRouter = new Router();

mainRouter.get(`/`, (req, res) => res.send(`main`));
mainRouter.get(`/register`, (req, res) => res.send(`sign-up`));
mainRouter.get(`/login`, (req, res) => res.send(`login`));
mainRouter.get(`/search`, (req, res) => res.send(`search-result`));

module.exports = mainRouter;

