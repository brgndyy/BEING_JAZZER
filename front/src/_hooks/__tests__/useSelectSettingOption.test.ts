import { renderHook, act } from '@testing-library/react';
import useSelectSettingOption from '../useSelectSettingOption';
import useChordSettingStore from '@/_store/useChordSettingStore';

jest.mock('@/_store/useChordSettingStore');

const mockChordSettingStore = useChordSettingStore as jest.MockedFunction<
  typeof useChordSettingStore
>;

describe('useSelectSettingOption hook에 대한 테스트 코드 작성', () => {
  const chordSetting = [
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

  const updateChordSetting = jest.fn();

  beforeEach(() => {
    mockChordSettingStore.mockReturnValue({
      chordSetting,
      updateChordSetting,
    });
  });

  it('옵션 값을 선택했을때 정상적으로 코드 셋팅이 변경 된다.', () => {
    const { result } = renderHook(() => useSelectSettingOption());
    const event = { target: { name: 'C', checked: true } } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleSelectedUserSettingConfig('major')(event);
    });

    expect(updateChordSetting).toHaveBeenCalledWith([
      {
        id: 1,
        type: 'major',
        config: {
          C: { isAvailable: true, isSelected: true },
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
    ]);
  });

  it('하나의 속성을 변경할때 다른 부분은 변경되지 않는다.', () => {
    const { result } = renderHook(() => useSelectSettingOption());
    const event = { target: { name: 'A', checked: true } } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleSelectedUserSettingConfig('minor')(event);
    });

    expect(updateChordSetting).toHaveBeenCalledWith([
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
          A: { isAvailable: true, isSelected: true },
          E: { isAvailable: false, isSelected: false },
        },
      },
    ]);
  });
});
