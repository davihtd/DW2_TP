export class docente{
    constructor(id,name,last,email,tell,date,materia){ 
        this.id = id
        this.name = name
        this.last = last
        this.email = email
        this.tell = tell
        this.date = date
        this.materia = materia
    }
}

export class materia {
    constructor(idmt, carreid, id, mateName, mateCodi, mateAnho) {
        this.idmt = idmt;
        this.carreid = carreid;
        this.id = id;
        this.mateName = mateName;
        this.mateCodi = mateCodi;
        this.mateAnho = mateAnho;
    }
}