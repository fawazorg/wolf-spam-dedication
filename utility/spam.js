const Users = new Map();
const BandedUsers = new Map();

const TOTAL_MESSAGES = 5;
const PER_MINUTES = 1;
const BAND_TIME = 10;

const userHit = (id) => {
  if (Users.has(id)) {
    let user = Users.get(id);
    user.hit++;
    return;
  }
  let IntervalID = setInterval(clearFromSpam, PER_MINUTES * 60 * 1000, id);
  Users.set(id, { id, hit: 1, IntervalID });
};

const isSpam = (id) => {
  userHit(id);
  const user = Users.get(id);
  if (user.hit <= TOTAL_MESSAGES) {
    return false;
  }
  let IntervalID = setInterval(clearFromBand, BAND_TIME * 60 * 1000, id);
  BandedUsers.set(id, { IntervalID });
  return true;
};

const isBanded = (id) => {
  isSpam(id);
  return BandedUsers.has(id);
};

const clearFromSpam = (id) => {
  let user = Users.get(id);
  console.log(`Clear ${id} form spam`);
  clearInterval(user.IntervalID);
  Users.delete(id);
};

const clearFromBand = async (id) => {
  let user = BandedUsers.get(id);
  console.log(`Clear ${id} form Band`);
  clearInterval(user.IntervalID);
  BandedUsers.delete(id);
};

module.exports = { isBanded };
