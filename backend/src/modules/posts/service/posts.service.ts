import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePostDto } from '../dto/createPost.dto';
import { UpdatePostDto } from '../dto/updatePost.dto';
import { Posts } from '../entity/posts.entity';


@Injectable()
export class PostsService {
    
  constructor(
    @InjectRepository(Posts) 
    private readonly postsRepository: Repository<Posts>
  ) {}
  
  getAllPosts() {
    return this.postsRepository.find();
  }

  async getPostById(id: number) {
    const post = await this.postsRepository.findOne(id);
    if (post) {
      return post;
    }
    throw new HttpException(`Post with id ${id} not found`, HttpStatus.NOT_FOUND);
  }

  async searchTitle(title: string) {
    const userTitle = await this.postsRepository.findOne({ title });
    if (userTitle) {
      return userTitle;
    }
    throw new HttpException(`Post with this title ${userTitle} does not exist`, HttpStatus.NOT_FOUND);
  }
 

  async createPost(post: CreatePostDto) {
    const newPost = await this.postsRepository.create(post);
    await this.postsRepository.save(newPost);
    
    return {
      newPost,
      message: `You are successfully create new post: ${newPost.title}`
    };
  }


  async updatePost(id: number, post: UpdatePostDto) {
    await this.postsRepository.update(id, post);
    const updatedPost = await this.postsRepository.findOne(id);
    if (updatedPost) {
      return {
        updatedPost,
        message: `You are successfully update post with id: ${id}`
      }
    }
    throw new HttpException(`Post with id ${id} not found`, HttpStatus.NOT_FOUND);
  }

  async deletePost(id: number) {
    const deletePost = await this.postsRepository.delete(id);
    if (!deletePost.affected) {
      throw new HttpException(`Post with id ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return {
      deletePost,
      message: `You are delete update post with id: ${id}`
    }
  }
  // I'm learning Angular
}