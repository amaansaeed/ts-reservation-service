import uuid from 'uuid';
import knex from 'knex';
import { resId1, resId2 } from './resources_seed';

exports.seed = function(knex: knex) {
  // Deletes ALL existing entries
  return knex('reservations')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('reservations').insert([
        {
          id: uuid(),
          resource_id: resId1,
          user_id: 'a61b52a5-6905-4de4-b17e-494436187c6a',
          start_time: new Date('2015-03-25'),
          end_time: new Date('2015-03-30'),
          created_at: new Date(),
        },
        {
          id: uuid(),
          resource_id: resId2,
          user_id: '2cd42796-33ec-48dd-b6ba-a391ee600877',
          start_time: new Date('2015-12-25'),
          end_time: new Date('2015-12-27'),
          created_at: new Date(),
        },
        {
          id: uuid(),
          resource_id: resId2,
          user_id: '2cd42796-33ec-48dd-b6ba-a391ee600877',
          start_time: new Date('2019-03-25'),
          end_time: new Date('2019-03-27'),
          created_at: new Date(),
        },
      ]);
    });
};
