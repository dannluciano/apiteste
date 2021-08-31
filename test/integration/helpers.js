
import supertest from 'supertest';
import chai from 'chai';
import setupApp from '../../src/app.js';



//global.request = supertest(app);
global.setupApp = setupApp;
global.expect = chai.expect;
global.supertest = supertest;
