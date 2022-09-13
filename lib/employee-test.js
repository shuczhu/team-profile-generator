const Employee = require('./assets/employee');

describe('Test Employee Class', () => {
    it('should create a new employee object', () => {
        const me = new Employee(1, "shuzhufilms@gmail.com", "Shu");
    
        expect(typeof me).toBe(obj);         
    })

    it('can set a name via constructor', () => {
        const me = new Employee(1, "shuzhufilms@gmail.com", "Shu");

        expect(me.name).toEqual("Shu")
    })

    it('can set an ID via constructor', () => {
        const me = new Employee(1, "shuzhufilms@gmail.com", "Shu");

        expect(me.id).toEqual("1")
    })

    it('can set an email via constructor', () => {
        const me = new Employee(1, "shuzhufilms@gmail.com", "Shu");

        expect(me.email).toEqual("shuzhufilms@gmail.com")
    })
})