"use strict";
exports.__esModule = true;
var Project = /** @class */ (function () {
    // 2. Définition des valeurs par défaut des propriétés d'un projet.
    function Project(id, name, picture, techno, link, created) {
        if (name === void 0) { name = 'name'; }
        if (picture === void 0) { picture = 'http://...'; }
        if (techno === void 0) { techno = ['Normal']; }
        if (link === void 0) { link = 'http://...'; }
        if (created === void 0) { created = 'date'; }
        // 3. Initialisation des propiétés d'un projet.
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.techno = techno;
        this.link = link;
        this.created = created;
    }
    return Project;
}());
exports["default"] = Project;
