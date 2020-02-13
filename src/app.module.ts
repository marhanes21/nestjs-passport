import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsersModule} from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {JwtStrategy} from "./auth/jwt.strategy";
import {LocalStrategy} from "./auth/local.strategy";
import {PassportModule} from "@nestjs/passport";
import {RolesModule} from "./users/roles.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UsersModule,
        RolesModule,
        AuthModule,
        PassportModule
    ],
    controllers: [AppController],
    providers: [AppService, JwtStrategy, LocalStrategy],
})
export class AppModule {
}
