import Sequelize from 'sequelize';

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
  });
} else {
  sequelize = new Sequelize(
    process.env.TEST_DATABASE || process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
    },
  );
}

const models = {
  User: sequelize.import('./user'),
  Horse: sequelize.import('./horse'),
  Race: sequelize.import('./race'),
  Entry: sequelize.import('./entry'),
  Trend: sequelize.import('./trend'),
  Winner: sequelize.import('./winner'),
  Account: sequelize.import('./account'),
  Bet: sequelize.import('./bet'),
  Track: sequelize.import('./track'),
  Note: sequelize.import('./note'),
  Abbreviation: sequelize.import('./abbreviation'),
  Message: sequelize.import('./message'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
