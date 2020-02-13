import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne} from 'typeorm';
import {Roles} from "./roles.entity";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 60})
    username: string;

    @Column('text')
    password: string;

    @ManyToOne(type => Users)
    @JoinColumn()
    role: string;

}
