let moment = require('moment');
let Now = moment()
let MyBirthday = moment(new Date(2013, 1, 26));
let MyNextBirthday = moment(new Date(2024, 1, 26));

let Result = moment().diff(MyNextBirthday, 'days');
let NextBirthdayAge = MyBirthday.diff(MyNextBirthday, 'years');
let Age = MyBirthday.diff(Now, 'years');

console.log(`Ты родился ${MyBirthday}`);
console.log(`Тебе ${Math.abs(Age)} лет`);
console.log(`Через ${Math.abs(Result)} дней тебе будет ${NextBirthdayAge}`);