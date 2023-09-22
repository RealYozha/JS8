let moment = require('moment');
let MyBirthday = moment(new Date(2013, 1, 26));
let MyNextBirthday = moment(new Date(2024, 1, 26));

console.log(`Ты родился ${MyBirthday}`);
console.log(`Тебе ${Math.abs(MyBirthday.diff(moment(), 'years'))} лет`);
console.log(`Через ${Math.abs(moment().diff(MyNextBirthday, 'days'))} дней тебе будет ${Math.abs(MyBirthday.diff(MyNextBirthday, 'years'))}`);