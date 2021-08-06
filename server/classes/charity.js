class Charity {
  constructor(name, activities) {
    this.name = name;
    this.activities = activities;
    this.applications = [];
  }

  receiveApplication(user_id, activity_id) {
    this.applications.push({
      user_id,
      activity_id,
      status: "pending",
    });
  }
}

module.exports = Charity;
