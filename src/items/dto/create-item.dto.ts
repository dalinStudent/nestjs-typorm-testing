import { CommentDto } from "./create-comment.dto";
import { CreateListingDto } from "./create-listing.dto";
import { TagDto } from "./create-tag.dto";

export class CreateItemDto {
    name: string;
    public: boolean;
    listing: CreateListingDto;
    comment: CommentDto;
    tags: TagDto[];
}
