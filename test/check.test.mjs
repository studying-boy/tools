import { checkEmail, checkIdCard, checkPhone } from '../../core/check.js'

describe('checkIdCard', () => {
    test('正确的身份证号码应该通过验证', () => {
        expect(checkIdCard('110101202404168110')).toBe(true);
        expect(checkIdCard('11010120240416681X')).toBe(true);
        expect(checkIdCard('11010120240416681x')).toBe(true);
        expect(checkIdCard('110101202404168719')).toBe(true);
        expect(checkIdCard('110101202404167716')).toBe(true);
    });

    test('错误的身份证号码应该不通过验证', () => {
        expect(checkIdCard('123456789012345678')).toBe(false); // 格式不正确，长度不够
        expect(checkIdCard('110105198807020018')).toBe(false); // 校验码错误
        expect(checkIdCard('310109198810212218')).toBe(false); // 校验码错误
        expect(checkIdCard('510105199301012997')).toBe(false); // 校验码错误
        expect(checkIdCard('130103199412312344')).toBe(false); // 校验码错误
    });
});

describe('checkPhone', () => {
    test('正确的手机号应该通过验证', () => {
        // 有效的手机号
        expect(checkPhone('13812345678')).toBe(true);
        expect(checkPhone('15998765432')).toBe(true);
        expect(checkPhone('18700001111')).toBe(true);
    });

    test('错误的手机号应该不通过验证', () => {
        // 格式不正确，长度不够
        expect(checkPhone('123456')).toBe(false);
        expect(checkPhone('123456789012')).toBe(false);

        // 不以1开头
        expect(checkPhone('23812345678')).toBe(false);

        // 有非数字
        expect(checkPhone('1334567890.')).toBe(false);
    });
});

describe('checkEmail', () => {
    test('正确的邮箱地址应该通过验证', () => {
        // 有效的邮箱地址
        expect(checkEmail('test@example.com')).toBe(true);
        expect(checkEmail('user1234@gmail.com')).toBe(true);
        expect(checkEmail('john.doe@company.co.uk')).toBe(true);
    });

    test('错误的邮箱地址应该不通过验证', () => {
        // 格式不正确
        expect(checkEmail('invalidemail@')).toBe(false);
        expect(checkEmail('invalidemail@com')).toBe(false);
        expect(checkEmail('invalidemail@com.')).toBe(false);
        expect(checkEmail('invalidemail.com')).toBe(false);

        // 无效的字符
        expect(checkEmail('user$%#@example.com')).toBe(false);
        expect(checkEmail('user()@example.com')).toBe(false);
    });
});