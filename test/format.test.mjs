import { formatCustomDateTime, formatDate, formatTime, formatMoney } from '../core/format.js';

describe('formatCustomDateTime', () => {
    test('formatCustomDateTime方法应该返回正确的日期格式', () => {
        // 测试不同格式的日期输出
        expect(formatCustomDateTime('2024-04-22 15:17:55', 'YYYY-MM-DD')).toBe('2024-04-22');
        expect(formatCustomDateTime('2024-04-22 15:17:55', 'YY-MM-DD')).toBe('24-04-22');
        expect(formatCustomDateTime('1713770275053')).toBe('2024-04-22 15:17:55');
        expect(formatCustomDateTime(1713770275053)).toBe('2024-04-22 15:17:55');
    });

    test('formatCustomDateTime方法应该在无效日期时返回空字符串', () => {
        // 测试在无效日期对象上调用 format 方法的行为, 期望返回空字符串
        expect(formatCustomDateTime('invalid date', 'YYYY-MM-DD')).toBe('');
    });
});

describe('formatDate', () => {
    test('formatDate方法应该返回正确的日期格式', () => {
        // 测试不同格式的日期输出
        expect(formatDate('2024-04-22 15:17:55')).toBe('2024-04-22');
        expect(formatDate('2024-04-22 15:17:55', 'YY-MM-DD')).toBe('24-04-22');
        expect(formatDate('2024-04-22 15:17:55', 'MMMM D, YYYY')).toBe('April 22, 2024');
        expect(formatDate('2024-04-22 15:17:55', 'MMM D, YYYY')).toBe('Apr 22, 2024');
        expect(formatDate('2024-04-22 15:17:55', 'dddd, MMMM D, YYYY')).toBe('Monday, April 22, 2024');
        expect(formatDate('2024-04-22 15:17:55', 'ddd, MMM D, YYYY')).toBe('Mon, Apr 22, 2024');
        expect(formatDate('1713770275053', 'YYYY-MM-DD')).toBe('2024-04-22');
        expect(formatDate(1713770275053, 'YYYY-MM-DD')).toBe('2024-04-22');
    });
});

describe('formatTime', () => {
    test('formatTime方法应该返回正确的日期格式', () => {
        // 测试不同格式的日期输出
        expect(formatTime('2024-04-22 15:17:55')).toBe('15:17:55');
        expect(formatTime('2024-04-22 15:17:55', 'hh:mm:ss')).toBe('03:17:55');
        expect(formatTime('1713770275053', 'HH:mm:ss')).toBe('15:17:55');
        expect(formatTime(1713770275053, 'HH:mm:ss')).toBe('15:17:55');
    });
});

describe('formatMoney', () => {
    test('将数字转换为正确的金钱格式', () => {
        // 测试不同金额的格式化输出
        expect(formatMoney(1000)).toBe('1,000.00');
        expect(formatMoney(12345.67)).toBe('12,345.67');
        expect(formatMoney(987654321.99)).toBe('987,654,321.99');
    });

    test('将非数字参数转换为正确的金钱格式', () => {
        // 测试非数字参数的行为
        expect(formatMoney('1000')).toBe('1,000.00');
        expect(formatMoney('12345.67')).toBe('12,345.67');
        expect(formatMoney('987654321.99')).toBe('987,654,321.99');
        expect(formatMoney('not a number')).toBe('NaN');
    });
});