import { AbstractEntity } from "../../database/abstract.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Item } from "./item.entity";

@Entity()
export class Comment extends AbstractEntity<Comment>{
    @Column()
    content: string;

    @ManyToOne(() => Item, (item) => item.comments)
    item: Item;
}