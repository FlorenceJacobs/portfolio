export default class Project {
    // 1. Typage des propiétés d'un projet.
    id: number;
    name: string;
    picture: string;
    techno: Array<string>;
    link: string;
    created: string;
     
    // 2. Définition des valeurs par défaut des propriétés d'un projet.
    constructor(
     id: number,
     name: string = 'name',
     picture: string = 'http://...',
     techno: Array<string> = ['Normal'],
     link: string = 'http://...',
     created: string = 'date'
    ) {
     // 3. Initialisation des propiétés d'un projet.
     this.id = id;
     this.name = name;
     this.picture = picture;
     this.techno = techno;
     this.link = link;
     this.created = created;
    }
   }