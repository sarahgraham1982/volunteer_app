const assert = require('assert');
const { title } = require('process');
const Activity = require('../classes/activity.js')
const Charity = require('../classes/charity.js')
const User = require("../classes/user")


describe('charity', () => {
    let charity;
    beforeEach(() => {
        charity = new Charity("British Heart Foundation", "description");
        user = new User("Garry Hall ", (1993, 17, 3), "You know I also helped make this app ",
            450, [], "email@example.com", "07777777777")
    })
    it('should be able to get an name', () => {
        const name = charity.name;
        assert.strictEqual(name, charity.name);
    })
    it('should be able to get an description', () => {
        const description = charity.description;
        assert.strictEqual(description, charity.description);
    })


})