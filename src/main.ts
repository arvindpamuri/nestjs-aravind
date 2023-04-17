import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000; // Get port from environment variable or use default 3000
  await app.listen(port, () => {
    console.log(`App is listening on port number ${port}`);
  });
}

bootstrap();
