function Gigasecond(time) {
  this.date = function () {
    return new Date(time.getTime() + 1e12);
  };
};

module.exports = Gigasecond;
