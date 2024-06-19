import { renderHook, act } from '@testing-library/react';
import useDragAndDrop from '../useDragAndDrop';

describe('useDragAndDrop hook에 대한 테스트 코드 작성', () => {
  const createDragEvent = (type: string, files: File[] = []): DragEvent => {
    const event = new Event(type, { bubbles: true, cancelable: true });
    Object.defineProperty(event, 'dataTransfer', {
      value: {
        files,
        types: [],
        setData: jest.fn(),
        getData: jest.fn(),
        clearData: jest.fn(),
        setDragImage: jest.fn(),
        effectAllowed: 'all',
        dropEffect: 'move',
      },
    });
    return event as DragEvent;
  };

  it('요소가 드래그 경계에 처음 들어가면 dragging 속성은 true가 된다.', () => {
    const { result } = renderHook(() => useDragAndDrop());

    const event = createDragEvent('dragenter');

    act(() => {
      result.current.onDragEnterHandler(event as any as React.DragEvent<HTMLDivElement>);
    });

    expect(result.current.dragging).toBe(true);
  });

  it('드래그의 경계 밖을 벗어나면 dragging 속성은 false가 된다.', () => {
    const { result } = renderHook(() => useDragAndDrop());

    const event = createDragEvent('dragleave');

    act(() => {
      result.current.onDragLeaveHandler(event as any as React.DragEvent<HTMLDivElement>);
    });

    expect(result.current.dragging).toBe(false);
  });

  it('드래그 경계선 안에 존재할때 dragging 속성은 true가 된다.', () => {
    const { result } = renderHook(() => useDragAndDrop());

    const event = createDragEvent('dragover');

    act(() => {
      result.current.onDragOverHandler(event as any as React.DragEvent<HTMLDivElement>);
    });

    expect(result.current.dragging).toBe(true);
  });

  it('드래그해서 파일을 드랍하면 정상적으로 파일이 등록 된다.', () => {
    const { result } = renderHook(() => useDragAndDrop());

    const file = new File(['file contents'], 'test-file.jpg', { type: 'image/jpeg' });
    const event = createDragEvent('drop', [file]);

    act(() => {
      result.current.onDropHandler(event as any as React.DragEvent<HTMLDivElement>);
    });

    expect(result.current.dragging).toBe(false);
    expect(result.current.file).toEqual(file);
  });
});
