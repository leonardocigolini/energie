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

    // dtitle(max_len : number) : string {
    //     return this.truncate(this.title, max_len);
    // }

    // ddescription(max_len : number) : string {
    //     return this.truncate(this.description, max_len);
    // }

    // dsubtitle(max_len : number) : string {
    //     return this.truncate(this.subtitle, max_len);
    // }


    // truncate(s: string, max_len: number) : string {
    //     return (s.length > max_len) ? s.slice(0, max_len-1)+'..' : s
    // }

}
