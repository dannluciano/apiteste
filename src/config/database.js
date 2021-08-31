import mongoose  from 'mongoose';

const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/test';

const connect = ()=>
	mongoose.connect(mongoUrl,{
		useNewUrlParser:true,
		useUnifiedTopology:true
	});



export default {
	connect,
	connection:mongoose.connection
}

