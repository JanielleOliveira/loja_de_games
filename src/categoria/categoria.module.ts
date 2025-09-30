import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './controllers/categoria.controller';
import { Categoria } from './entities/categoria.entity';
import { CategoriaService } from './services/categoria.service';
import { ProdutoModule } from '../produto/produto.module';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria]), ProdutoModule],
  providers: [CategoriaService],
  controllers: [CategoriaController],
  exports: [],
})
export class CategoriaModule {}
