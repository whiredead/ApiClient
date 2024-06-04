import { MenuDto } from "./MenuDto";

export class BarDto{
    id: number;
    title: string;
    isClicked:boolean=false;
    menusDto: MenuDto[];
} 