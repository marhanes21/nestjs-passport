// A DTO is an object that defines how the data will be sent over the network.
export class UserDto {
    readonly username: string;
    readonly password: string;
    readonly role: string;
}
