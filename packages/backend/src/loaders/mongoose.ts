import { connect } from 'mongoose';
import env from '../config';

export default async () => {
  let mongodbUrl = `mongodb://${env.mongo_server}/${env.mongo_dbname}`;
  if(env.production){
    mongodbUrl = `mongodb://${env.mongo_user}:${env.mongo_pass}@${env.mongo_server}/${env.mongo_dbname}`;
  }

  try {
    await connect(
      mongodbUrl, 
      { useUnifiedTopology : true, useNewUrlParser : true }
    ); 
  } catch (error) {
    console.log(error);
  }
}