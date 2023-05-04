import { Controller, Post, Get, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { PostEntity } from './post.entity';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  create(@Body() post: PostEntity): Promise<PostEntity> {
    return this.postService.createPost(post);
  }
  
  @Get()
  async findAll(): Promise<PostEntity[]> {
    return this.postService.findAllPosts();
  }
}
