// Modelo Estudiante
import { Table, Column, Model, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Moto } from './Moto';
import { Acudiente } from './Acudiente';
import { EstudianteAcudiente } from './Estudiante_Acudiente';

@Table({ tableName: 'tbl_estudiante', timestamps: true })
export class Estudiante extends Model {
  @Column({primaryKey: true, autoIncrement: true})
  id_estudiante!: number;

  @Column({ type: DataType.DECIMAL(10, 0), allowNull: false, unique: true})
  estudiante_documento!: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  estudiante_nombre!: string;

  @Column({ type: DataType.ENUM('MASCULINO', 'FEMENINO'), allowNull: false })
  estudiante_sexo!: string;

  @Column({ type: DataType.DATE, allowNull: false})
  estudiante_fechaNac!: Date;

  @Column({ type: DataType.STRING(100), allowNull: false})
  estudiante_direccion!: string;

  @HasMany(() => Moto)
  Motos!: Moto[];

  @BelongsToMany(() => Acudiente, () => EstudianteAcudiente)
  acudientes!: Acudiente[];
}

export default Estudiante;