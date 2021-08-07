const assert = require('assert');
const { title } = require('process');
const Activity = require('../classes/activity.js')
const Charity = require('../classes/charity.js');
const Reward = require('../classes/reward.js');
const User = require("../classes/user")


describe('reward', () => {
    let reward;
    beforeEach(() => {
        reward = new Reward("steam",
            "get 20% off next steam sale",
            "terms and conditions",
            500,
            new Date(2022, 3, 14, 17, 30),
            "digital");
    })
    it('should be able to get an company', () => {
        const company = reward.company;
        assert.strictEqual(company, "steam");
    })
    it('should be able to get an title', () => {
        const title = reward.title;
        assert.strictEqual(title, "get 20% off next steam sale");
    })
    it('should be able to get an description', () => {
        const description = reward.description;
        assert.strictEqual(description, "terms and conditions");
    })
    it('should be able to get points', () => {
        const points = reward.points;
        assert.strictEqual(points, 500);
    })
    it('should be able to get an expiryDate', () => {
        const expiryDate = reward.expiryDate;
        assert.strictEqual("expiryDate", (2022, 3, 14, 17, 30));
    })
    it('should be able to get an category', () => {
        const category = reward.category;
        assert.strictEqual(category, "digital");
    })


})