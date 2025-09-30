import { IsNotEmpty, IsOptional } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from './../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn() // gera o ID automaticamente.
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsOptional()
  @Column({ length: 255, nullable: true })
  descricao: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  preco: number;

  @IsOptional()
  @Column({ type: 'int', nullable: true })
  estoque: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  categoria: Categoria;
}
