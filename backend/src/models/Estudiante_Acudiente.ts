// Modelo estudiante_acudiente
import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Estudiante } from './Estudiante';
import { Acudiente } from './Acudiente';

@Table({ tableName: 'tbl_estudiante_acudiente', timestamps: true })
export class EstudianteAcudiente extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id_estudiante_acudiente!: number;

  @ForeignKey(() => Estudiante)
  @Column({ allowNull: false })
  id_est_rel!: number;

  @ForeignKey(() => Acudiente)
  @Column({ allowNull: false })
  id_acud_rel!: number;
}

export default EstudianteAcudiente;