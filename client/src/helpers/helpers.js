function ageFromDOB(dob) {
    const timeDifference = Date.now() - dob.getTime();
    let differenceDate = new Date(timeDifference);
    return Math.abs(differenceDate.getUTCFullYear() - 1970);
}



function userRedeemRewards(user, reward ) {
    if (user.noOfPoints < reward.points){
        return "insufficient funds"
      }
      const newUser = { redeemedRewards:user.redeemedRewards };
      newUser.noOfPoints = user.noOfPoints - reward.points
      newUser.redeemedRewards = newUser.redeemedRewards.map(
        (reward) => reward._id
      );
      newUser.redeemedRewards.push(reward._id);
      console.log(newUser)
      return newUser
}

export {ageFromDOB, userRedeemRewards};