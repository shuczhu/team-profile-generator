const Intern = require('../lib/Intern.js');

describe('Test Intern Class', () => {
    it('should create a new Intern object', () => {
        const me = new Intern(1, "shuzhufilms@gmail.com", "Shu", "UCLA");
    
        expect(typeof me).toBe('object');         
    })

    it('can set a name via constructor', () => {
        const me = new Intern(1, "shuzhufilms@gmail.com", "Shu", "UCLA");

        expect(me.name).toEqual("Shu")
    })

    it('can set an ID via constructor', () => {
        const me = new Intern(1, "shuzhufilms@gmail.com", "Shu", "UCLA");

        expect(me.id).toEqual(1)
    })

    it('can set an email via constructor', () => {
        const me = new Intern(1, "shuzhufilms@gmail.com", "Shu", "UCLA");

        expect(me.email).toEqual("shuzhufilms@gmail.com")
    })

    it('can set up school via constructor', () => {
        const me = new Intern(1, "shuzhufilms@gmail.com", "Shu", "UCLA");

        expect(me.school).toEqual("UCLA")
    })

    it('can get email via getEmail() method', () => {
        const me = new Intern(1, "shuzhufilms@gmail.com", "Shu", "UCLA");

        expect(me.getEmail()).toEqual("shuzhufilms@gmail.com")
    })

    it('can get name via getName() method', () => {
        const me = new Intern(1, "shuzhufilms@gmail.com", "Shu", "UCLA");

        expect(me.getName()).toEqual("Shu")
    })

    it('can get id via getId() method', () => {
        const me = new Intern(1, "shuzhufilms@gmail.com", "Shu", "UCLA");

        expect(me.getId()).toEqual(1)
    })

    it('can get school via getSchool() method', () => {
        const me = new Intern(1, "shuzhufilms@gmail.com", "Shu", "UCLA");

        expect(me.getSchool()).toEqual("UCLA")
    })

    it('can get role via getRole() method', () => {
        const me = new Intern(1, "shuzhufilms@gmail.com", "Shu", "UCLA");

        expect(me.getRole()).toEqual("Intern")
    })
})