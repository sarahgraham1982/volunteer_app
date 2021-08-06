const assert = require('assert');
const User = require('../classes/user.js');
const Reward = require('../classes/reward.js');


describe('User', () => {
    let reward;
    let scott;
    beforeEach(() => {
        reward = new Reward("Starbucks", "BOGOF", "Free things", 200, new Date(2021, 8, 25))
        scott = new User("Scott Kivlin", new Date(1991, 1, 4), "I'm trying to help", 100, [reward], "s_kivlin@hotmail.com", "07777777777")
    })

    it('should be able to get an age from dob of birth', () => {
        const age = scott.age();
        assert.strictEqual(age, 30);
    })
})