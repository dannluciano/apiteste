import express from 'express'; 
import routes  from './routes/index.js';
import database from './config/database.js';

const app = express();

const configureExpress = ()=>{
	app.use(express.json());
	app.use('/',routes);
	app.database = database;

	return app;
}

export default async ()=>{
	const app = configureExpress();
	await app.database.connect();

	return app;
}


