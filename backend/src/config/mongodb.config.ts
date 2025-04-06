import * as dotenv from 'dotenv';
dotenv.config();

export const mongodbRoot = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.APP_NAME}.h2v5z.mongodb.net/?retryWrites=true&w=majority&appName=develop-nestjs-study`;
