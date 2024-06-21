import getEncryptedCodeFromParams from '../getEncryptedCodeFromParams';
import { SearchParams } from '@/_types';

describe('getEncryptedCodeFromParams에 대한 테스트 코드 작성', () => {
  it(' 문자열 중간에 공백이 섞여있다면 +로 대체한다.', () => {
    const params: SearchParams = {
      searchParams: {
        code: 'test code',
      },
    };
    const result = getEncryptedCodeFromParams(params);
    expect(result).toBe('test+code');
  });

  it(' 만약 searchParams값이 undefined라면 빈 문자열로 대체한다.', () => {
    const params: SearchParams = {
      searchParams: undefined as any,
    };
    const result = getEncryptedCodeFromParams(params);
    expect(result).toBe('');
  });

  it(' 만약 빈 문자열이 인자로 들어온다면 그대로 빈 문자열을 반환한다.', () => {
    const params: SearchParams = {
      searchParams: {
        code: '',
      },
    };
    const result = getEncryptedCodeFromParams(params);
    expect(result).toBe('');
  });

  it('여러개의 공백이 존재할 경우 공백마다 +로 대체한다.', () => {
    const params: SearchParams = {
      searchParams: {
        code: 'a b c',
      },
    };
    const result = getEncryptedCodeFromParams(params);
    expect(result).toBe('a+b+c');
  });

  it('공백이 존재하지 않는다면 그대로 인자로 받은 문자열을 반환한다.', () => {
    const params: SearchParams = {
      searchParams: {
        code: 'abc',
      },
    };
    const result = getEncryptedCodeFromParams(params);
    expect(result).toBe('abc');
  });
});
