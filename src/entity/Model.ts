import { 
  Entity, 
  BaseEntity, 
  Column, 
  PrimaryColumn, 
  PrimaryGeneratedColumn, 
  OneToMany, 
  ManyToOne, 
  JoinColumn 
} from 'typeorm';

import { Provider } from './Provider';
import { Equipment } from './Equipment';

@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  id_model: number;

  @Column({
    type: 'varchar',
    length: 50
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 50
  })
  manufacturer: string;

}