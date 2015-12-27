var person;
(function (person) {
    var Person = (function () {
        function Person(fname, lname) {
            this.fname = fname;
            this.lname = lname;
        }
        Person.prototype.fullname = function () {
            return this.fname + " " + this.lname;
        };
        return Person;
    })();
    person.Person = Person;
})(person || (person = {}));
