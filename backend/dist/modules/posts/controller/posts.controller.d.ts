import { CreatePostDto } from "../dto/createPost.dto";
import { UpdatePostDto } from "../dto/updatePost.dto";
import { Posts } from "../entity/posts.entity";
import { PostsService } from "../service/posts.service";
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAllPosts(): Promise<Posts[]>;
    getPostById(id: string): Promise<Posts>;
    createPost(post: CreatePostDto): Promise<{
        newPost: Posts;
        message: string;
    }>;
    updatePost(id: string, post: UpdatePostDto): Promise<{
        updatedPost: Posts;
        message: string;
    }>;
    deletePost(id: string): Promise<void>;
}
