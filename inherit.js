
class parent{
    constructor(){
        this.father='ali ahmed';
    }
}
class child extends parent{
    constructor(sName){
        super();
        this.child=sName;
    }
    doIt(){
         return`${this.child} & his father name ${this.father}`;
    }
}


const child1=new child('fahim');
const child2=new child('farabi');
console.log(child1.doIt(),child2.doIt());