import { toRequestBody } from '../assertHelper';

describe('assertHelper', () => {
  describe('toRequestBody', () => {
    test('プリミティブ', () => {
      expect(toRequestBody('test')).toBe('test');
      expect(toRequestBody(1)).toBe(1);
      expect(toRequestBody(true)).toBe(true);
    });

    test('Date', () => {
      expect(toRequestBody(new Date('2021-01-02'))).toBe(
        '2021-01-02T00:00:00.000Z'
      );
    });

    test('Object', () => {
      const PARAM = {
        key1: 1,
        key2: '2',
        key3: new Date('2021-01-02'),
      };
      const expected = {
        key1: 1,
        key2: '2',
        key3: '2021-01-02T00:00:00.000Z',
      };
      expect(toRequestBody(PARAM)).toEqual(expected);
    });
    test('Array', () => {
      const PARAM = [
        {
          key1: 1,
        },
        {
          key2: new Date('2021-01-02'),
        },
      ];
      const expected = [
        {
          key1: 1,
        },
        {
          key2: '2021-01-02T00:00:00.000Z',
        },
      ];
      expect(toRequestBody(PARAM)).toEqual(expected);
    });
  });
});
