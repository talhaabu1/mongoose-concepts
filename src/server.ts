import app from './app';
import config from './app/config';
import mongoose from 'mongoose';
import { Server } from 'http';

let server: Server;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(config.database_url as string);
}

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});

process.on('unhandledRejection', () => {
  console.log('unhandledRejection is detected , Shutting down server.... 🦴');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log('uncaughtException is detected , Shutting server.... 🦴 ');
  process.exit(1);
});
