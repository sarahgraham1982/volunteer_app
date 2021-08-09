function ageFromDOB(dob) {
    const timeDifference = Date.now() - dob.getTime();
    let differenceDate = new Date(timeDifference);
    return Math.abs(differenceDate.getUTCFullYear() - 1970);
}

export {ageFromDOB};