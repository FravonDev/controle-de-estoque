import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products') //Nome do BD
export class Product{
    @PrimaryGeneratedColumn()//definir a primary key + autoIncremento
    id:number
    
    @Column({type: 'text', length: 100})//espeficar tipo texto + limite
    name:string

    @Column()//espeficar tipo texto
    price:number

    @Column()//espeficar tipo texto
    quantidade:number

}

