import { Video } from './video';

export const VIDEOS: Video[] = createVideos();

/* var a = [
    new Video('2001 odissea nello spazio','','incredibile avventura spaziale'),
    new Video('PHYL percorso base','registrazione corso','asdf asdf asdf asdf'),
    new Video('PHYL percorso avanzato','registrazione corso','asdf asdf asdf asdf'),
    new Video('PHYL terapia con i cristalli','registrazione corso','asdf asdf asdf asdf'),
    new Video('Wesak 2019','registrazione evento','asdf asdf asdf asdf')
];

var b = [

  { id: 11, title: '2001 odissea nello spazio', description: 'incredibile avventura nello spazio', url: '', pic_url: '', subtitle: '', author: 'Stanley Kubrick', tags: 'fantascienza' },
  { id: 12, title: '2002 odissea nello spazio', description: '', url: '', pic_url: '' , subtitle: '', author: '', tags: ''},
  { id: 13, title: '2003 odissea nello spazio', description: '', url: '', pic_url: '', subtitle: '', author: '', tags: '' },
  { id: 14, title: '2004 odissea nello spazio', description: '', url: '', pic_url: '', subtitle: '', author: '', tags: '' },
  { id: 15, title: '2005 odissea nello spazio', description: '', url: '', pic_url: '', subtitle: '', author: '', tags: '' },
  { id: 16, title: '2006 odissea nello spazio', description: '', url: '', pic_url: '', subtitle: '', author: '', tags: '' },
  { id: 17, title: '2007 odissea nello spazio', description: '', url: '', pic_url: '', subtitle: '', author: '', tags: '' },
  { id: 18, title: '2008 odissea nello spazio', description: '', url: '', pic_url: '', subtitle: '', author: '', tags: '' },
  { id: 19, title: '2009 odissea nello spazio', description: '', url: '', pic_url: '' , subtitle: '', author: '', tags: ''},
  { id: 20, title: '2010 odissea nello spazio', description: '', url: '', pic_url: '', subtitle: '', author: '', tags: '' },
  { id: 21, title: '2011 odissea nello spazio', description: '', url: '', pic_url: '', subtitle: '', author: '', tags: '' },
  { id: 22, title: '2012 odissea nello spazio', description: '', url: '', pic_url: '', subtitle: '', author: '', tags: '' },
];

 */

function createVideos() : Video[] {
    var r = [];
    r.push( new Video('2001 odissea nello spazio','','incredibile avventura spaziale','#fantascienza','https://vimeo.com/399207656'));
    r.push( new Video('2010 ultima odissea','','una altra incredibile avventura spaziale','','https://vimeo.com/191730738'));

    r.push( new Video('PHYL percorso base','registrazione corso','asdf asdf asdf asdf','#phyl','https://vimeo.com/189642668'));
    r.push( new Video('2001 odissea nello spazio','','incredibile avventura spaziale','#fantascienza','https://vimeo.com/399207656'));
    r.push( new Video('2010 ultima odissea','','una altra incredibile avventura spaziale','','https://vimeo.com/191730738'));

    r.push( new Video('PHYL percorso base','registrazione corso','asdf asdf asdf asdf','#phyl','https://vimeo.com/189642668'));
    r.push( new Video('2001 odissea nello spazio','','incredibile avventura spaziale','#fantascienza','https://vimeo.com/399207656'));
    r.push( new Video('2010 ultima odissea','','una altra incredibile avventura spaziale','','https://vimeo.com/191730738'));

    r.push( new Video('PHYL percorso base','registrazione corso','asdf asdf asdf asdf','#phyl','https://vimeo.com/189642668'));

    console.log('createVideos r.size '+ r.length);
    for (let index = 0; index < r.length; index++) {
        const element = r[index];
        console.log( element.title);
        
    }
    return r;
}