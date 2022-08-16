import { 
  Entity,
  Column, 
  PrimaryColumn, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  OneToMany, 
  JoinColumn, 
  ManyToOne 
} from 'typeorm';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  id_equip: number;

  @Column({
    type: 'numeric'
  })
  invoice: number;

  @Column({
    unique: true,
    type: 'char',
    length: 17
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

}


