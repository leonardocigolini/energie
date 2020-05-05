export class Video {
    id: number;
    title: string;
    subtitle: string;
    author: string;
    tags: string;
    description: string;
    url: string;
    pic_url: string;

    constructor(t,t2?,desc?,tg?,url1?: string) {
        this.title = t;

        this.subtitle = t2 ? t2 : '';
        this.description = desc ? desc : '';
        this.tags = tg ? tg : '';
        this.url = url1 ? url1 : '';
    }
}
