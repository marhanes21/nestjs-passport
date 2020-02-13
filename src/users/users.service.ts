import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "../entities/users.entity";
import {Repository} from "typeorm";
import {UserDto} from "./user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users)
                private readonly usersRepository: Repository<Users>,) {
    }

    /**
     * Find all users
     */
    findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    /**
     * Find user by id
     * @param id -
     */
    findById(id): Promise<Users> {
        return this.usersRepository.findOne(id)
    }

    /**
     * Find user by username
     * @param username -
     */
    findByUsername(username): Promise<Users> {
        return this.usersRepository.findOne({username: username});
    }

    /**
     * Add new user
     * @param addUserDto
     */
    addUser(addUserDto: UserDto) {
        return this.usersRepository.insert(addUserDto);
    }
}
