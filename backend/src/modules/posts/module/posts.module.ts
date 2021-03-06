import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostsController } from '../controller/posts.controller';
import { Posts } from '../entity/posts.entity';
import { PostsService } from '../service/posts.service';

@Module({
  imports: [ TypeOrmModule.forFeature([Posts])],
  controllers: [ PostsController ],
  providers: [ PostsService ],
})
export class PostsModule {}