// Modelo Moto
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Estudiante } from './Estudiante';

@Table({ tableName: 'tbl_moto', timestamps: true })
export class Moto extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id_moto!: number;

  @Column({
    type: DataType.STRING(6),
    allowNull: false,
    unique: true,
  })
  moto_placa!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  moto_color!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  moto_fechaSoat!: Date;

  @ForeignKey(() => Estudiante)
  @Column({ allowNull: false })
  id_estudiante!: number;

  @BelongsTo(() => Estudiante)
  estudiante!: Estudiante;
}

export default Moto;