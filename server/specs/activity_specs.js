const assert = require('assert');
const { title } = require('process');
const Activity = require('../classes/activity.js')
const Charity = require('../classes/charity.js')
const User = require("../classes/user")

describe('activity', () => {
    let activity, user;
    beforeEach(() => {
        activity = new Activity("clean up the shops", 101, "clean out our store rooms and maybe have a cup of tea",
            "two and a half hours", "136 Lothian Rd Edinburgh", 20);
        user = new User("Garry Hall ", (1993, 17, 3), "You know I also helped make this app ",
            450, [], "email@example.com", "07777777777")
    })

    it('should be able to get an description', () => {
        const description = activity.description;
        assert.strictEqual(description, "clean out our store rooms and maybe have a cup of tea");
    })
    it('should be able to get an title', () => {
        const title = activity.title;
        assert.strictEqual(title, "clean up the shops");
    })
    it('should be able to get an duration', () => {
        const duration = activity.duration;
        assert.strictEqual(duration, "two and a half hours");
    })
    it('should be able to get an location ', () => {
        const location = activity.location;
        assert.strictEqual(location, "136 Lothian Rd Edinburgh");
    })
    it('should be able to get an charity', () => {
        const charity = activity.charity;
        assert.strictEqual(charity, 101);
    })
    it('should be able to get an points', () => {
        const points = activity.points;
        assert.strictEqual(points, 20);
    })
    it('should be able to get applications', () => {
        const applications = activity.applications;
        assert.deepStrictEqual(applications, []);
    })
    it("should be able to get the user", () => {
        activity.receiveApplication(user);
        assert.deepStrictEqual(activity.applications, [{ user, status: "pending" }]);
    })
})