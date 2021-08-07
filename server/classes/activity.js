class Activity {
  constructor(title, charity, description, duration, location, points, applications) {
    this.title = title;
    this.charity = charity;
    this.description = description;
    this.duration = duration;
    this.location = location;
    this.points = points;
    if (!applications){
      this.applications = []
    } else{
      this.applications = applications;
    }
    
  }
  receiveApplication(user) {
    this.applications.push({
      user,
      status: "pending",
    });
  }
}

module.exports = Activity;
