
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract hello(): Nullable<string> | Promise<Nullable<string>>;

    abstract getAllCats(): Nullable<Nullable<Cat>[]> | Promise<Nullable<Nullable<Cat>[]>>;
}

export class User {
    id: string;
    name: string;
    age?: Nullable<number>;
}

export class Cat {
    id: string;
    name: string;
    age: number;
    breed?: Nullable<string>;
}

export abstract class IMutation {
    abstract createUser(name: string, age?: Nullable<number>): Nullable<User> | Promise<Nullable<User>>;

    abstract createCat(name: string, age: number): Nullable<Cat> | Promise<Nullable<Cat>>;
}

type Nullable<T> = T | null;
