import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { runInstagram } from './client/Instagram';
import logger, { setupErrorHandlers } from './config/logger';
import { setup_HandleError } from './utils';
import { connectDB } from './config/db';

setupErrorHandlers();

dotenv.config();

const app: Application = express();

connectDB();



// Middleware setup
app.use(helmet({ xssFilter: true, noSniff: true })); // Security headers
app.use(express.json()); // JSON body parsing
app.use(express.urlencoded({ extended: true, limit: '1kb' })); // URL-encoded data
app.use(cookieParser()); // Cookie parsing

const runAgents = async () => {
    logger.info("Starting Instagram agent...");
    await runInstagram();
    logger.info("Instagram agent finished.");
};



runAgents().catch(error => {
    setup_HandleError(error , "Error running agents:");
});
export default app;

export default app;
