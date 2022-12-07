import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products') //Nome do BD
export class Product{
    @PrimaryGeneratedColumn()//definir a primary key + autoIncremento
    id:number
    
    @Column({type: 'text'})//espeficar tipo texto + limite
    name:string

    @Column()
    price:number

    @Column()
    quantidade:number

}

