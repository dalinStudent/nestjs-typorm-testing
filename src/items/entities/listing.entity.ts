import { AbstractEntity } from "../../database/abstract.entity";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Listing extends AbstractEntity<Listing>{

    @Column()
    desc: string;

    @Column()
    rating: number;

}