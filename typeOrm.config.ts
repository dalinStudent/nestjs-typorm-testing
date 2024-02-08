import { DataSource } from "typeorm";
import { config } from "dotenv";
import { ConfigService } from "@nestjs/config";
import { Item } from "./src/items/entities/item.entity";
import { Listing } from "./src/items/entities/listing.entity";
import { Comment } from "./src/items/entities/comment.entity";
import { Tag } from "./src/items/entities/tag.entity";

config();

const _CondigService = new ConfigService();

export default new DataSource({
    type: 'mysql',
    host: _CondigService.getOrThrow('MYSQL_HOST'),
    port: _CondigService.getOrThrow('MYSQL_PORT'),
    username: _CondigService.getOrThrow('MYSQL_USERNAME'),
    password: _CondigService.getOrThrow('MYSQL_PASSWORD'),
    database: _CondigService.getOrThrow('MYSQL_DATABASE'),
    migrations: ['migration/**'],
    entities: [Item, Listing, Comment, Tag],
});