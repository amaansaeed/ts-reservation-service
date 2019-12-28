import knex from 'knex';
import uuid from 'uuid';

export const resId1 = uuid();
export const resId2 = uuid();
export const resId3 = uuid();

exports.seed = function(knex: knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('resources').insert([
        { id: resId1, name: 'room 1', created_at: new Date() },
        { id: resId2, name: 'room 2', created_at: new Date() },
        { id: resId3, name: 'room 3', created_at: new Date() },
      ]);
    });
};
