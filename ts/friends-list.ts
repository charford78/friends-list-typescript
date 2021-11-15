class Friend {
    name: string;
    age: number;
    email: string;
    bff: boolean;

    constructor(name: string, age: number, email: string, bff: boolean) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }

    static printHeader(): string {
        return "Name    | Age  | Email        | Bff      ";
    }

    print(): string {
        return `${this.name} | ${this.age} | ${this.email} | ${this.bff}`;
    }
}

let friends: Friend[] = [
    new Friend("Andy", 40, "andy@dcubed.com", true),
    new Friend("Beef", 35, "beef@dcubed.com", false),
    new Friend("Gwar", 52, "gwar@dcubed.com", false),
    new Friend("Bean", 38, "bean@dcubed.com", true),
    new Friend("Wolfbait", 43, "wolfbait@dcubed.com", false)    
];



console.log(Friend.printHeader());
for(let f of friends) {
    console.log(f.print());
}