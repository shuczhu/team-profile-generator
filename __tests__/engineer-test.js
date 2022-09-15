const Engineer = require('../lib/Engineer.js');

describe('Test Engineer Class', () => {
    it('should create a new Engineer object', () => {
        const me = new Engineer(1, "shuzhufilms@gmail.com", "Shu", "shuczhu");
    
        expect(typeof me).toBe('object');         
    })

    it('can set a name via constructor', () => {
        const me = new Engineer(1, "shuzhufilms@gmail.com", "Shu", "shuczhu");

        expect(me.name).toEqual("Shu")
    })

    it('can set an ID via constructor', () => {
        const me = new Engineer(1, "shuzhufilms@gmail.com", "Shu", "shuczhu");

        expect(me.id).toEqual(1)
    })

    it('can set an email via constructor', () => {
        const me = new Engineer(1, "shuzhufilms@gmail.com", "Shu", "shuczhu");

        expect(me.email).toEqual("shuzhufilms@gmail.com")
    })

    it('can set up gitHub via constructor', () => {
        const me = new Engineer(1, "shuzhufilms@gmail.com", "Shu", "shuczhu");

        expect(me.github).toEqual("shuczhu")
    })

    it('can get email via getEmail() method', () => {
        const me = new Engineer(1, "shuzhufilms@gmail.com", "Shu", "shuczhu");

        expect(me.getEmail()).toEqual("shuzhufilms@gmail.com")
    })

    it('can get name via getName() method', () => {
        const me = new Engineer(1, "shuzhufilms@gmail.com", "Shu", "shuczhu");

        expect(me.getName()).toEqual("Shu")
    })

    it('can get id via getId() method', () => {
        const me = new Engineer(1, "shuzhufilms@gmail.com", "Shu", "shuczhu");

        expect(me.getId()).toEqual(1)
    })

    it('can get school via getGithub() method', () => {
        const me = new Engineer(1, "shuzhufilms@gmail.com", "Shu", "shuczhu");

        expect(me.getGithub()).toEqual("shuczhu")
    })

    it('can get role via getRole() method', () => {
        const me = new Engineer(1, "shuzhufilms@gmail.com", "Shu", "shuczhu");

        expect(me.getRole()).toEqual("Engineer")
    })
})