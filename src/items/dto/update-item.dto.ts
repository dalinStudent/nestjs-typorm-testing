import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';
import { CommentDto } from './create-comment.dto';

export class UpdateItemDto {
    public: boolean;
    comments: CommentDto[];
}
