import knex from 'knex';

interface Resource {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

function getAll(knex: knex) {
  return (): Promise<Resource[]> =>
    new Promise<Resource[]>((resolve, reject) => {
      knex('resources')
        .select('*')
        .then(resolve)
        .catch(reject);
    });
}

function getById(knex: knex) {
  return (id: string): Promise<Resource> =>
    new Promise<Resource>((resolve, reject) => {
      knex('resources')
        .select('*')
        .where({ id })
        .then(res => resolve(res[0]))
        .catch(reject);
    });
}

export default (knex: knex) => ({
  getAll: getAll(knex),
  getById: getById(knex),
});
