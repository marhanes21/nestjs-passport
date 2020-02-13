import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./users.entity";

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id: number;


}
