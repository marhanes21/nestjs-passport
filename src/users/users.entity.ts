import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 60})
    username: string;

    @Column('text')
    password: string;
}
