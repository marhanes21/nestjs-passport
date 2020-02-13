import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Roles} from "../entities/roles.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Roles])],
  exports: [TypeOrmModule],
  controllers: [],
  providers: []
})
export class RolesModule {}
