import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/createPost.dto';
import { UpdatePostDto } from '../dto/updatePost.dto';
import { Posts } from '../entity/posts.entity';
export declare class PostsService {
    private readonly postsRepository;
    constructor(postsRepository: Repository<Posts>);
    getAllPosts(): Promise<Posts[]>;
    getPostById(id: number): Promise<Posts>;
    searchTitle(title: string): Promise<Posts>;
    createPost(post: CreatePostDto): Promise<{
        newPost: Posts;
        message: string;
    }>;
    updatePost(id: number, post: UpdatePostDto): Promise<{
        updatedPost: Posts;
        message: string;
    }>;
    deletePost(id: number): Promise<{
        deletePost: import("typeorm").DeleteResult;
        message: string;
    }>;
}
