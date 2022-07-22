export enum Color {
    rojo, negro, azul, verde, amarillo
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}