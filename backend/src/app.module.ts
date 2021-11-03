import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Posts } from './modules/posts/entity/posts.entity';
import { PostsModule } from './modules/posts/module/posts.module';
import { Users } from './modules/users/entity/users.entity';
import { UsersModule } from './modules/users/module/users.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'registration_database',
      entities: [Users],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Posts, Users]),
    JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn: '1d'}
    }),
    UsersModule,
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
