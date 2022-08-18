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
export class Stock_internal extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: 0
  })
  quant_in_stock: number;

  @OneToMany(() => Model, (model) => model.stock_internal, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  models: Model[]
}