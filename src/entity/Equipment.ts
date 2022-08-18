import { 
  Entity,
  Column,
  BaseEntity, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  OneToMany, 
  ManyToOne 
} from 'typeorm';

import { Model } from './Model';

new BaseEntity();
@Entity()
export class Equipment extends BaseEntity{
  @PrimaryGeneratedColumn()
  id_equip: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: false
  })
  serial_number: number;

  @Column({
    type: 'varchar',
    length: 17,
    default: ""
  })
  mac: string;

  @Column({
    unique: true,
    type: 'numeric'
  })
  patrimony: number;

  @CreateDateColumn()
  date: Date;

  @Column({
    type: 'char',
    length: 1
  })
  status: string;

  @ManyToOne(() => Model, (model) => model.equipments, {
    eager: true
  })
  model: Model
}
