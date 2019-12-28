import * as knex from 'knex';
import uuid from 'uuid';

interface Reservation {
  id: string;
  resourceId: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

function getAll(knex: knex) {
  return (): Promise<Reservation[]> =>
    new Promise<Reservation[]>((resolve, reject) => {
      knex('reservations')
        .select('*')
        .then(resolve)
        .catch(reject);
    });
}

function getById(knex: knex) {
  return (id: string): Promise<Reservation> =>
    new Promise<Reservation>((resolve, reject) => {
      knex('reservations')
        .select('*')
        .where({ id })
        .then(res => resolve(res[0]))
        .catch(reject);
    });
}

function getByUserId(knex: knex) {
  return (id: string): Promise<Reservation[]> =>
    new Promise<Reservation[]>((resolve, reject) => {
      knex('reservations')
        .select('*')
        .where({ user_id: id })
        .then(resolve)
        .catch(reject);
    });
}

function getByResourceId(knex: knex) {
  return (id: string): Promise<Reservation[]> =>
    new Promise<Reservation[]>((resolve, reject) => {
      knex('reservations')
        .select('*')
        .where({ resource_id: id })
        .then(resolve)
        .catch(reject);
    });
}

function newReservation(knex: knex) {
  return (
    userId: string,
    resourceId: string,
    startTime: Date,
    endTime: Date
  ): Promise<Reservation> =>
    new Promise((resolve, reject) => {
      const reservation: Reservation = {
        id: uuid(),
        userId: userId,
        resourceId: resourceId,
        startTime: startTime,
        endTime: endTime,
      };
      knex('reservations')
        .insert({
          id: reservation.id,
          user_id: reservation.userId,
          resource_id: reservation.resourceId,
          start_time: reservation.startTime,
          end_time: reservation.endTime,
        })
        .then(() => resolve(reservation))
        .catch(reject);
    });
}

export default (knex: knex) => ({
  getAll: getAll(knex),
  getById: getById(knex),
  getByResourceId: getByResourceId(knex),
  getByUserId: getByUserId(knex),
  newReservation: newReservation(knex),
});
