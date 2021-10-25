import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Producto)
    private productoModel: typeof Producto,
  ) {}
  async create(createProductoDto: Producto): Promise<Producto> {
    return this.productoModel.create(createProductoDto);
  }

  async findAll(): Promise<Producto[]> {
    return this.productoModel.findAll();
  }

  findOne(id: number): Promise<Producto> {
    return this.productoModel.findOne({
      where: {
        producto_id: id,
      },
    });
  }

  // update(id: number, updateProductoDto: UpdateProductoDto) {
  //   return `This action updates a #${id} producto`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} producto`;
  // }
}
