import express from 'express';

/**
 * Adding middlewares to the express application.
 * @param {express.Express} api The Express application.
 */
const injectMiddlewares = (api) => {
  api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
