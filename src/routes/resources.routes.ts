/***********************************
 *  Dependencies
 ***********************************/
// import Router from 'koa-router';
import koa from 'koa';
import debug from 'debug';
import db from '../db';

/***********************************
 *  Variables & Initializations
 ***********************************/
const logger = debug('reservations-service:');

/***********************************
 *  Controllers
 ***********************************/
const getResourceById = async (ctx: koa.Context, next: Function) => {
  const { id } = ctx.params;
  if (!id) return next();
  const resources = await db.resources.getById(id);
  ctx.body = resources;
};

const getResources = async (ctx: koa.Context, next: Function) => {
  ctx.body = await db.resources.getAll();
  next();
};

const addResource = async (ctx: koa.Context, next: Function) => {
  ctx.body = 'hello darkness my old frond';
  next();
};

const deleteResource = async (ctx: koa.Context, next: Function) => {
  ctx.body = 'hello darkness my old frond';
  next();
};

const updateResource = async (ctx: koa.Context, next: Function) => {
  ctx.body = 'hello darkness my old frond';
  next();
};

/***********************************
 *  Routing
 ***********************************/
export const path = '/resources';
export const routing = [
  ['GET', '/', getResources],
  ['GET', '/id/:id', getResourceById],
  ['POST', '/', addResource],
  ['PUT', '/id/:id', updateResource],
  ['DEL', '/id/:id', deleteResource],
];

export default { path, routing };
