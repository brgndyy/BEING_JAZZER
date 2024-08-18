import validateMinimumChordSetting from '../validateMinimumChordSetting';
import { ChordSetting } from '@/_types';

describe('최소한의 피아노 코드 셋팅에 대한 유효성 검증을 담당하는 validateMinimumChordSetting 함수에 대한 테스트 코드 작성', () => {
  it('각 Key, Chord, Tension 섹션에서 최소한 1개씩 모두 isAvailable 값과 isSelected 값이 true 라면 true를 리턴한다.', () => {
    const chordSettings: ChordSetting[] = [
      {
        id: 1,
        type: 'Key',
        config: {
          option1: { isAvailable: true, isSelected: true },
        },
      },
      {
        id: 2,
        type: 'Chord',
        config: {
          option1: { isAvailable: true, isSelected: true },
        },
      },
      {
        id: 3,
        type: 'Tension',
        config: {
          option1: { isAvailable: true, isSelected: true },
        },
      },
    ];

    expect(validateMinimumChordSetting(chordSettings)).toBe(true);
  });

  it('각 Key, Chord, Tension 섹션에서 없는 값이 존재한다면 false를 리턴한다.', () => {
    const chordSettings: ChordSetting[] = [
      {
        id: 1,
        type: 'Key',
        config: {
          option1: { isAvailable: true, isSelected: true },
        },
      },
      {
        id: 2,
        type: 'Chord',
        config: {
          option1: { isAvailable: true, isSelected: true },
        },
      },
    ];

    expect(validateMinimumChordSetting(chordSettings)).toBe(false);
  });

  it('각 Key, Chord, Tension 섹션에서 최소한 1개씩 값은 존재하지만 isAvailable과 isSelected가 false일때 false를 리턴한다.', () => {
    const chordSettings: ChordSetting[] = [
      {
        id: 1,
        type: 'Key',
        config: {
          option1: { isAvailable: false, isSelected: false },
        },
      },
      {
        id: 2,
        type: 'Chord',
        config: {
          option1: { isAvailable: true, isSelected: true },
        },
      },
      {
        id: 3,
        type: 'Tension',
        config: {
          option1: { isAvailable: true, isSelected: true },
        },
      },
    ];

    expect(validateMinimumChordSetting(chordSettings)).toBe(false);
  });

  it('각 Key, Chord, Tension 섹션이 여러개 존재해도 각 섹션마다 최소 1개씩 isAvailable 값과 isSelected 값이 true 여야한다.', () => {
    const chordSettings: ChordSetting[] = [
      {
        id: 1,
        type: 'Key',
        config: {
          option1: { isAvailable: true, isSelected: false },
          option2: { isAvailable: true, isSelected: true },
        },
      },
      {
        id: 2,
        type: 'Chord',
        config: {
          option1: { isAvailable: false, isSelected: false },
          option2: { isAvailable: true, isSelected: true },
        },
      },
      {
        id: 3,
        type: 'Tension',
        config: {
          option1: { isAvailable: false, isSelected: false },
          option2: { isAvailable: true, isSelected: true },
        },
      },
    ];

    expect(validateMinimumChordSetting(chordSettings)).toBe(true);
  });

  it('아무런 값도 없을때 false를 리턴한다.', () => {
    const chordSettings: ChordSetting[] = [];

    expect(validateMinimumChordSetting(chordSettings)).toBe(false);
  });
});
