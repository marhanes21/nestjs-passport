import {Body, Controller, Get, Param, Post, SetMetadata, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {UserDto} from "./user.dto";
import {AuthGuard} from "@nestjs/passport";
import {RolesGuard} from "../guards/roles.guard";
import {Roles} from "../decorators/roles.decorator";


@Controller('users')
@UseGuards(AuthGuard('jwt'))
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
    @UseGuards(RolesGuard)
    @Roles('admin')
    async create(@Body() addUserDto: UserDto) {
        const userId = await this.usersService.addUser(addUserDto);
        return {id: userId.identifiers[0].id, username: addUserDto.username};
    }


}
