import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './entities/producto.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Res() response, @Body() createProductoDto: Producto) {
    const newProducto = await this.productosService.create(createProductoDto);
    return response.status(HttpStatus.CREATED).json({
      newProducto,
    });
  }

  @Get()
  async fetchAll(@Res() response) {
    const productos = await this.productosService.findAll();
    return response.status(HttpStatus.OK).json({
      productos,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const producto = await this.productosService.findOne(id);
    return response.status(HttpStatus.OK).json({
      producto,
    });
  }
}
