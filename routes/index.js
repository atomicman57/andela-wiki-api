import User from './user';


export default (app) => {
  app.use('/api/v1', User);
};