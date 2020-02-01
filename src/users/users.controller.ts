import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {AddUserDto} from "./add-user.dto";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    /**
     * Get All users
     */
    @Get()
    getAllUsers() {
        return this.usersService.findAll();
    }

    /**
     * Get user by id
     * @param id
     */
    @Get(':id')
    findUserById(@Param('id') id) {
        return this.usersService.findById(id);
    }

    /**
     * Get user by username
     * @param username
     */
    @Get('username/:username')
    findUserByUsername(@Param('username') username) {
        return this.usersService.findByUsername(username);
    }

    /**
     * Add new User
     * @param addUserDto
     */
    @Post()
    async create(@Body() addUserDto: AddUserDto) {
        const userId = await this.usersService.addUser(addUserDto);
        return {id: userId.identifiers[0].id, username: addUserDto.username};
    }


}
