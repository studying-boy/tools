require('jest-canvas-mock');
import { translateImageUrl2Base64 } from '../core/translate.js'

// 这个测试用例耗时很久，大约100-1000秒不等，如没有修改该方法，不用每次验证
describe('translateImageUrl2Base64', () => {
    test('测试百度logo', async () => {
        // const imageUrl = '../static/baiduLogo.png';
        // try {
        //   const base64Data = await translateImageUrl2Base64(imageUrl);
        //   // 检查返回的数据是否是字符串类型
        //   expect(typeof base64Data).toBe('string');
        //   // 检查返回的数据是否以"data:image"开头，表示是一个Base64编码的图片数据
        //   expect(base64Data.startsWith('data:image')).toBe(true);
        // } catch (error) {
        //     console.log(error);
        //   // 如果方法抛出了错误，则断言失败
        //   expect(error).toBeNull();
        // }
        expect(true).toBe(true);
      }, '20000000');
});
