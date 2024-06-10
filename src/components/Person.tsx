

interface PersonType {
    personId: number;
    personName: string;
    show(): string;
}

class Person {
    personId: number = 0;
    personName: string = "";

    constructor(personId: number, personName: string) {
        this.personId = personId;
        this.personName = personName;
    }

    public show(): string {
        return `${this.personId} - ${this.personName}`;
    }
}

// types: string, number, boolean, bigint, undefined, null, symbol
type fruitTypes = 'Apple' | 'Banana' | 'Mango' | 'Avocado' | 'Orange'
type numberTypes = 10 | 20 | 30 | 50 | 100;

// Generics
type stringArrayType = Array<string>;
type numberArrayType = Array<number>;


// Interface With Generic
interface MainType<SubType1, SubType2> {
    value1: SubType1;
    value2: SubType2;
}

export default () => {

    const person: PersonType = new Person(1, 'Wafa');

    const fruit: fruitTypes = 'Apple';
    const number: numberTypes = 100;
    const myArray: numberArrayType = [39939, 3992];


    let display = (obj: MainType<number, string>) => {
        return `${obj.value1} - ${obj.value2}`
    }

    //  union types array
    let scores: (string | number)[] = [399, 'Hi dear', 'How are you', 999];

    // Tuple Types
    let skills: [string, number, boolean];
    skills = ['33', 99, false];

    // enum
    enum constantsValue { Jan, Feb, Mar, Apr, May, Jun, Jul };

    // any type
    let anyType: any; anyType = { a: '3333', b: 999 };

    // void type
    let useless: void; useless = undefined;


    // never type
    function throwErrorMessage(message: string): never {
        throw new Error(message);
    }
    let loop = function forever() {
        while (true) {
            console.log('Hello');
        }
    }

    // union type
    let unionType: string | number | boolean;
    unionType = 400;
    unionType = 'Hi dear';
    unionType = true;
    // unionType = undefined; // error


    // TypeScript Type Aliases
    type aliasType = string | number;
    let phone: aliasType = "93939944";


    // TypeScript String Literal Types
    type literalType = 'Wafa' | 'Vafa';
    let wfa: literalType = 'Wafa';



    // TypeScript Function Types
    let add: (x: number, y?: number) => number;
    add = (a, b=10)=> {
        if (b !== undefined)
            return a+b;

        return a;
    }


    // TypeScript Rest Parameters
    let resParamFunc = (...rest: number[])=> {
        let allVal = rest.reduce((a, b)=> a+b);

        return allVal;
    }
    
    return (
        <div>
            {person.show()} - {display({ value1: 999, value2: 'Hi' })} - {scores[1]} - {skills[1]} <br />
            {constantsValue.May} {constantsValue.Jul} - {add(9, 100)} - {resParamFunc(5, 3, 2, 99, 11)}
        </div>
    );
}