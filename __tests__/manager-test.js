const Manager = require('../lib/Manager.js');

describe('Test Manager Class', () => {
    it('should create a new Manager object', () => {
        const me = new Manager(1, "shuzhufilms@gmail.com", "Shu", "3");
    
        expect(typeof me).toBe('object');         
    })

    it('can set a name via constructor', () => {
        const me = new Manager(1, "shuzhufilms@gmail.com", "Shu", "3");

        expect(me.name).toEqual("Shu")
    })

    it('can set an ID via constructor', () => {
        const me = new Manager(1, "shuzhufilms@gmail.com", "Shu", "3");

        expect(me.id).toEqual(1)
    })

    it('can set an email via constructor', () => {
        const me = new Manager(1, "shuzhufilms@gmail.com", "Shu", "3");

        expect(me.email).toEqual("shuzhufilms@gmail.com")
    })

    it('can set up office number via constructor', () => {
        const me = new Manager(1, "shuzhufilms@gmail.com", "Shu", "3");

        expect(me.officeNumber).toEqual("3")
    })

    it('can get email via getEmail() method', () => {
        const me = new Manager(1, "shuzhufilms@gmail.com", "Shu", "3");

        expect(me.getEmail()).toEqual("shuzhufilms@gmail.com")
    })

    it('can get name via getName() method', () => {
        const me = new Manager(1, "shuzhufilms@gmail.com", "Shu", "3");

        expect(me.getName()).toEqual("Shu")
    })

    it('can get id via getId() method', () => {
        const me = new Manager(1, "shuzhufilms@gmail.com", "Shu", "3");

        expect(me.getId()).toEqual(1)
    })

    it('can get school via getOffice() method', () => {
        const me = new Manager(1, "shuzhufilms@gmail.com", "Shu", "3");

        expect(me.getOffice()).toEqual("3")
    })

    it('can get role via getRole() method', () => {
        const me = new Manager(1, "shuzhufilms@gmail.com", "Shu", "3");

        expect(me.getRole()).toEqual("Manager")
    })
})