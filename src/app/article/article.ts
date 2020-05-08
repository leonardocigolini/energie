export class Article {
    title: string;
    subtitle: string;
    text: string;
    pic_url: string;

    constructor(t,t2,url: string) {
        this.title = t;
        if (t2.includes('<br>')) {
            const i = t2.indexOf('<br>');
            this.subtitle = t2.substring(0,i-1);
            this.text = t2.substring(i+4);

        } else {
            this.subtitle = '';
            this.text = t2;

        }
        this.pic_url = url;
    }
}
