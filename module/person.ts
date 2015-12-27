module person {
    export class Person {
        fname: string;
        lname: string;

        constructor(fname: string, lname: string) {
            this.fname = fname;
            this.lname = lname;
        }

        fullname() {
            return this.fname + " " + this.lname;
        }

    }
}