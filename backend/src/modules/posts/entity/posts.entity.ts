import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('posts')
export class Posts {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    title: string;

    @Column()
    body: string;

    @Column()
    membership: string;

    @Column('date')
    date: Date;
}