import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [],
  controllers: [],
  exports: [],
})
export class CategoriaModule {}
