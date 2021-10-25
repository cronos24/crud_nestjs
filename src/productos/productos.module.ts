import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Producto } from './entities/producto.entity';

@Module({
  imports: [SequelizeModule.forFeature([Producto])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
