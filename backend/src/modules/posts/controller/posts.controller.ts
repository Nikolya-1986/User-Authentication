import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { CreatePostDto } from "../dto/createPost.dto";
import { UpdatePostDto } from "../dto/updatePost.dto";
import { Posts } from "../entity/posts.entity";
import { PostsService } from "../service/posts.service";

@Controller('api_posts')
export class PostsController {

  constructor(
    private readonly postsService: PostsService,
  ) {}
  
  @Get()
  async getAllPosts(): Promise<Posts[]> {
    return this.postsService.getAllPosts();
  }
 
  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<Posts> {
    return this.postsService.getPostById(Number(id));
  }
 
  @Post()
  async createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.updatePost(Number(id), post);
  }
 
  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<void> {
    this.postsService.deletePost(Number(id));
  }

}