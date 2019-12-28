import knex, { Config } from 'knex';
import resources from './models/resources';
import reservations from './models/reservations';

class Connection {
  private knex = knex(exportConfig());
  public resources = resources(this.knex);
  public reservations = reservations(this.knex);
}

function exportConfig(): Config {
  const environment =
    !process.env.ENV || process.env.ENV === 'docker'
      ? 'development'
      : process.env.ENV;
  return require('../../knexfile')[environment];
}

export default new Connection();
