import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity('posts')
export class PostEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    
    @Column()
    text: string;
}