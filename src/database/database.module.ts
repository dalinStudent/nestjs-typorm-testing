import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (_ConfigService: ConfigService) => ({
                type: 'mysql',
                host: _ConfigService.getOrThrow('MYSQL_HOST'),
                port: _ConfigService.getOrThrow('MYSQL_PORT'),
                username: _ConfigService.getOrThrow('MYSQL_USERNAME'),
                password: _ConfigService.getOrThrow('MYSQL_PASSWORD'),
                database: _ConfigService.getOrThrow('MYSQL_DATABASE'),
                autoLoadEntities: true,
                synchronize: _ConfigService.getOrThrow('MYSQL_SYNCHRONIZE'),
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
