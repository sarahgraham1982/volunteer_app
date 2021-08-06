class User {
    constructor(fullName, dob, aboutMe, points, redeemedRewards, email, phoneNumber) {
        this.fullName = fullName;
        this.dob = dob;
        this.aboutMe = aboutMe;
        this.points = points;
        this.redeemedRewards = redeemedRewards;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    age() {
        const timeDifference = Date.now() - this.dob.getTime();
        let differenceDate = new Date(timeDifference);
        return Math.abs(differenceDate.getUTCFullYear() - 1970);
    }
}

module.exports = User;