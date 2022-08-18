import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import { Provider } from './Provider';
import { Equipment } from './Equipment';
import { Stock_internal } from './Stock_internal';

new BaseEntity();

@Entity()
export class Model extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_model: number;

  @Column({
    type: 'varchar',
    length: 50
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true
  })
  type: string;

  @Column({
    default: 0
  })
  quant_min: number;

  @ManyToOne(() => Provider, (provider) => provider.models, {
    eager: true
  })
  provider: Provider;

  @OneToMany(() => Equipment, (equipment) => equipment.model, {
    cascade: true
  })
  equipments: Equipment[];

  @ManyToOne(() => Stock_internal, (stock_internal) => stock_internal.models ,{
    eager: true,
    onDelete: 'CASCADE'
  })
  stock_internal: Stock_internal;
}