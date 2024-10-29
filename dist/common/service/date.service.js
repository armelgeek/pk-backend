"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformTokenExpiryToDate = exports.isDateBeforeNow = exports.getStartWeekDate = exports.getWeek = exports.dayFromNow = exports.toDate = exports.formatDateToLocale = exports.formatDateToLocaleWithHour = exports.formatToShortFormat = exports.formatToSQLFormat = exports.shortFormat = void 0;
const dayjs = require("dayjs");
require('dayjs/locale/fr');
const format = 'YYYY-MM-DDTHH:mm:ss.sssZ';
exports.shortFormat = 'YYYY-MM-DD';
const sqlFormat = 'YYYY-MM-DDTHH:mm:ss.sssZ';
// eslint-disable-next-line no-confusing-arrow
const formatToSQLFormat = (date, last = false) => {
    let dayjsDate = typeof date === 'string' ? dayjs(date, exports.shortFormat) : dayjs(date);
    dayjsDate = last ? dayjsDate.add(1, 'days') : dayjsDate;
    return dayjsDate.format(sqlFormat);
};
exports.formatToSQLFormat = formatToSQLFormat;
const formatToShortFormat = (date) => dayjs(date).format(exports.shortFormat);
exports.formatToShortFormat = formatToShortFormat;
const formatDateToLocaleWithHour = (dateHour) => dayjs(dateHour, format).format('DD/MM/YYYY, à HH[h]mm');
exports.formatDateToLocaleWithHour = formatDateToLocaleWithHour;
// eslint-disable-next-line no-confusing-arrow
const formatDateToLocale = (date, currentFormat = format) => date ? dayjs(date, currentFormat).format('DD/MM/YYYY') : dayjs().format('DD/MM/YYYY');
exports.formatDateToLocale = formatDateToLocale;
const toDate = (date) => {
    const [day, month, year] = date.split('/');
    return dayjs(`${year}-${month}-${day}`).toDate();
};
exports.toDate = toDate;
const dayFromNow = (dateHour) => dayjs(dateHour, format).fromNow(true);
exports.dayFromNow = dayFromNow;
const getWeek = (today) => {
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};
exports.getWeek = getWeek;
const getStartWeekDate = (date) => dayjs(new Date(date.setDate(date.getDate() - date.getDay()))).format('DD/MM/YYYY');
exports.getStartWeekDate = getStartWeekDate;
const isDateBeforeNow = (date) => typeof date === 'string'
    ? dayjs(date, format).isBefore(new Date())
    : dayjs(date).isBefore(new Date());
exports.isDateBeforeNow = isDateBeforeNow;
const transformTokenExpiryToDate = (expiresIn) => dayjs()
    // Marge de 5minutes
    .add(expiresIn - 300, 'seconds')
    .toDate();
exports.transformTokenExpiryToDate = transformTokenExpiryToDate;
//# sourceMappingURL=date.service.js.map