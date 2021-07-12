const moment = require('moment');

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().utcOffset(330).format()
  };
}

module.exports = formatMessage;
