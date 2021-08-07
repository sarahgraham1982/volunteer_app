class Activity {
  constructor(title, charity, description, duration, location, points, date, time) {
    this.title = title;
    this.charity = charity;
    this.description = description;
    this.duration = duration;
    this.location = location;
    this.points = points;
    this.date = date;
    this.time = time;
    this.applications = [];
  }
  receiveApplication(user) {
    this.applications.push({
      user,
      status: "pending",
    });
  }
}

module.exports = Activity;
