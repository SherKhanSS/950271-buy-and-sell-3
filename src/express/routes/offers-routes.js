'use strict';

const {Router} = require(`express`);
const offersRouter = new Router();

offersRouter.get(`/category/:id`, (req, res) => res.render(`/offers/category/:id`));
offersRouter.get(`/add`, (req, res) => res.render(`/offers/add`));
offersRouter.get(`/edit/:id`, (req, res) => res.render(`/offers/edit/:id`));
offersRouter.get(`/:id`, (req, res) => res.render(`/offers/:id`));

module.exports = offersRouter;
