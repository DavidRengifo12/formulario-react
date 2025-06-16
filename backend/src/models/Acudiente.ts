import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { Estudiante } from './Estudiante';
import { EstudianteAcudiente } from './Estudiante_Acudiente';

@Table({ tableName: 'tbl_acudiente', timestamps: true })
export class Acudiente extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    id_acudiente!: number;

    @Column({ type: DataType.DECIMAL(10, 0), allowNull: false, unique: true })
    acudiente_cedula!: number;

    @Column({ type: DataType.STRING(100), allowNull: false })
    acudiente_nombre!: string;

    @Column({ type: DataType.ENUM('MADRE', 'PADRE', 'OTRO'), allowNull: false })
    acudiente_tipo!: string;

    @Column({ type: DataType.DECIMAL(10, 0), allowNull: false })
    acudiente_celular!: number;

    @Column({ type: DataType.DECIMAL(10, 0), allowNull: true })
    acudiente_tel_oficina!: number;

    @Column({ type: DataType.STRING(100), allowNull: false })
    acudiente_correoe!: string;

    @Column({ type: DataType.STRING(100), allowNull: false })
    acudiente_direccion!: string;

    @BelongsToMany(() => Estudiante, () => EstudianteAcudiente)
    estudiantes!: Estudiante[];
}

export default Acudiente;
