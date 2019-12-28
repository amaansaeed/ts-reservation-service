/***********************************
 *  Dependencies
 ***********************************/
// import Router from 'koa-router';
import koa from 'koa';
import debug from 'debug';
import db from '../db';
import uuid from 'uuid';

/***********************************
 *  Variables & Initializations
 ***********************************/
const logger = debug('reservations-service:');

/***********************************
 *  Controllers
 ***********************************/
const getAllReservations = async (ctx: koa.Context, next: Function) => {
  const reservations = await db.reservations.getAll();
  ctx.body = reservations;
};

const getReservationById = async (ctx: koa.Context, next: Function) => {
  const { scope, id } = ctx.params;
  if (!scope || scope != 'id' || !id) return next();

  try {
    ctx.body = await db.reservations.getById(id);
  } catch (error) {
    console.log(error);
  }
};

const getReservationsByUserId = async (ctx: koa.Context, next: Function) => {
  const { scope, id } = ctx.params;
  if (!scope || scope != 'u' || !id) return next();

  const reservations = await db.reservations.getByUserId(id);
  ctx.body = reservations;
};

const getReservationsByResourceId = async (
  ctx: koa.Context,
  next: Function
) => {
  const { scope, id } = ctx.params;
  if (!scope || scope != 'r' || !id) return next();

  const reservations = await db.reservations.getByResourceId(id);
  ctx.body = reservations;
};

const addReservation = async (ctx: koa.Context, next: Function) => {
  const userId = uuid();
  const resourceId = '5820cb86-ad3d-40cd-8af6-ec218375c3ea';
  const startTime = new Date('2017-05-09');
  const endTime = new Date('2017-06-09');

  const reservations = await db.reservations.newReservation(
    userId,
    resourceId,
    startTime,
    endTime
  );
  ctx.body = reservations;
};

const deleteReservation = async (ctx: koa.Context, next: Function) => {
  ctx.body = 'hello darkness my old frond';
};

const updateReservation = async (ctx: koa.Context, next: Function) => {
  ctx.body = 'hello darkness my old frond';
};

/***********************************
 *  Routing
 ***********************************/
export const path = '';
export const routing = [
  ['GET', '/', getAllReservations],
  [
    'GET',
    '/:scope/:id',
    [getReservationById, getReservationsByUserId, getReservationsByResourceId],
  ],
  ['POST', '/', addReservation],
  ['PUT', '/id/:id', updateReservation],
  ['DEL', '/id/:id', deleteReservation],
];

export default { path, routing };
