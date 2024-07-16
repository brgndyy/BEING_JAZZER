import { ChordSetting } from '@/_types';
import { renderHook, act } from '@testing-library/react';
import useChordSettingStore from '../useChordSettingStore';

const initializeStore = () => {
  const store = useChordSettingStore.getState();
  store.updateChordSetting([]);
};

describe('useChordSettingStore에 대한 테스트 코드 작성', () => {
  beforeEach(() => {
    initializeStore();
  });

  it('chordSetting을 업데이트 할 수 있어야한다.', () => {
    const { result } = renderHook(() => useChordSettingStore());

    const newSettings: ChordSetting[] = [
      {
        id: 1,
        type: 'major',
        config: {
          C: { isAvailable: true, isSelected: false },
          G: { isAvailable: true, isSelected: true },
        },
      },
      {
        id: 2,
        type: 'minor',
        config: {
          A: { isAvailable: true, isSelected: false },
          E: { isAvailable: false, isSelected: false },
        },
      },
    ];

    act(() => {
      result.current.updateChordSetting(newSettings);
    });

    expect(result.current.chordSetting).toEqual(newSettings);
  });
});
