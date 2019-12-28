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
const getDocs = async (ctx: koa.Context, next: Function) => {
  ctx.body = { data: 'reservation docs' };
};

/***********************************
 *  Routing
 ***********************************/
export const path = '/docs';
export const routing = [['GET', '/', getDocs]];

export default { path, routing };
