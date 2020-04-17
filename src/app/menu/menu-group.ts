import { MenuItem } from './menu-item';

export class MenuGroup {
    title: string;
    items: MenuItem[];

    constructor( t : string, mm: any) {
        this.title = t;
        this.items = [];
        mm.forEach( (e) => { 
            this.items.push( new MenuItem(e[0], e[1], e[2]))
        })
    }
}
