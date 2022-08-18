import { 
  Entity, 
  Column, 
  PrimaryColumn,
  BaseEntity, 
  PrimaryGeneratedColumn, 
  ManyToOne, 
  OneToMany, 
  JoinColumn 
} from 'typeorm';

import { Model } from './Model';

new BaseEntity();

@Entity()
export class Provider extends BaseEntity{
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    type: 'varchar'
  })
  name: string;

  @Column({
    length: 15,
    unique: true,
    type: 'varchar'
  })
  cpf: string;

  @Column({
    unique: true,
    length: 30,
    type: 'varchar'
  })
  email: string;

  @Column({
    length: 50,
    type: 'varchar'
  })
  address: string;

  @Column({
    length: 50,
    type: 'varchar'
  })
  city: string;

  @OneToMany(() => Model, (model) => model.provider, {
    cascade: true
  })
  models: Model[]
}