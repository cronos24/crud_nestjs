import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Producto extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  producto_id: number;

  @Column
  numeroLote: string;

  @Column({ allowNull: false })
  nombre: string;

  @Column({ allowNull: false })
  precio: number;

  @Column({ allowNull: false })
  stock: number;

  @Column({ allowNull: false })
  fechaIngreso: Date;
}
