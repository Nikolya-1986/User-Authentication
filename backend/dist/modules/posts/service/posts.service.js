"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const posts_entity_1 = require("../entity/posts.entity");
let PostsService = class PostsService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    getAllPosts() {
        return this.postsRepository.find();
    }
    async getPostById(id) {
        const post = await this.postsRepository.findOne(id);
        if (post) {
            return post;
        }
        throw new common_1.HttpException(`Post with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
    }
    async searchTitle(title) {
        const userTitle = await this.postsRepository.findOne({ title });
        if (userTitle) {
            return userTitle;
        }
        throw new common_1.HttpException(`Post with this title ${userTitle} does not exist`, common_1.HttpStatus.NOT_FOUND);
    }
    async createPost(post) {
        const newPost = await this.postsRepository.create(post);
        await this.postsRepository.save(newPost);
        return {
            newPost,
            message: `You are successfully create new post: ${newPost.title}`
        };
    }
    async updatePost(id, post) {
        await this.postsRepository.update(id, post);
        const updatedPost = await this.postsRepository.findOne(id);
        if (updatedPost) {
            return {
                updatedPost,
                message: `You are successfully update post with id: ${id}`
            };
        }
        throw new common_1.HttpException(`Post with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
    }
    async deletePost(id) {
        const deletePost = await this.postsRepository.delete(id);
        if (!deletePost.affected) {
            throw new common_1.HttpException(`Post with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return {
            deletePost,
            message: `You are delete update post with id: ${id}`
        };
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(posts_entity_1.Posts)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map