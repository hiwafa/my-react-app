

interface PersonType{
    personId: number;
    personName: string;
    show(): string;
}

class Person  {
    personId: number = 0;
    personName: string = "";

    constructor(personId: number, personName: string){
        this.personId = personId;
        this.personName = personName;
    }

    public show(): string{
        return `${this.personId} - ${this.personName}`;
    }
}




export default ()=> {

    const person: PersonType = new Person(1, 'Wafa')

    return (
        <div>
            {person.show()}
        </div>
    );
}