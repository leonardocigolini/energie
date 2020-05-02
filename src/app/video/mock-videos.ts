import { Video } from './video';

export const VIDEOS: Video[] = createVideos();
export const VIDEOS2: Video[] = createVideos2();


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
    r.push( new Video('Pier Mario Biava','','L\'universo è un sogno','','https://vimeo.com/403651476'));
    r.push( new Video('Alessandra Perotti','','Presentazione','','https://vimeo.com/403406427'));
    r.push( new Video('Richard Romagnoli','','Richard si presenta al pubblico','','https://vimeo.com/403401675'));
    r.push( new Video('Richard Romagnoli','','Intervista Energie Magazine','','https://vimeo.com/400610348'));



 //   console.log('createVideos r.size '+ r.length);
 //   for (let index = 0; index < r.length; index++) {
 //       const element = r[index];
 //       console.log( element.title);     
 //   }
    return r;
}

function createVideos2() : Video[] {
    var r = [];
   
    r.push( new Video('EIFIS EDITORE','','Presentazione','','https://vimeo.com/403378040'));
    r.push( new Video('Radhanath Swami','','Presentazione','','https://vimeo.com/403327063'));
    r.push( new Video('Richard Romagnoli','','Un tè con l\'autore','','https://vimeo.com/404074665'));

   



 //   console.log('createVideos r.size '+ r.length);
 //   for (let index = 0; index < r.length; index++) {
 //       const element = r[index];
 //       console.log( element.title);     
 //   }
    return r;
}