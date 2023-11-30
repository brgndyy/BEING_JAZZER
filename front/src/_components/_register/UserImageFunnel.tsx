import React from 'react';
import { myStyle } from '@/_styles/vars.css';
import useDragAndDrop from '@/_hooks/useDragAndDrop';
import Image from 'next/image';
import {
  contentContainer,
  funnelLabel,
  funnelImageInput,
  funnelInputContainer,
  funnelButtonContainer,
  funnelButton,
  alertText,
  drag,
} from './funnel.css';

type FunnelStepHandlerType = {
  previoustStepHandler: () => void;
  inputFileUploadHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formSubmitHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function UserImageFunnel({
  previoustStepHandler,
  inputFileUploadHandler,
  formSubmitHandler,
}: FunnelStepHandlerType) {
  const {
    dragging,
    previewUrl,
    onDragEnterHandler,
    onDragLeaveHandler,
    onDragOverHandler,
    onDropHandler,
    setFile,
  } = useDragAndDrop();

  const uploadImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files ? e.target.files[0] : null;

    if (imageFile) {
      setFile(imageFile);
      inputFileUploadHandler(e);
    }
  };

  return (
    <div className={`${contentContainer} ${myStyle}`}>
      <label className={`${funnelLabel} ${myStyle}`} htmlFor="userImage">
        프로필 이미지
      </label>

      {previewUrl ? (
        <Image src={previewUrl} width={100} height={100} alt="userImage" />
      ) : (
        <div
          className={`${funnelInputContainer} ${dragging ? drag : ''} ${myStyle}`}
          onDragEnter={onDragEnterHandler}
          onDragLeave={onDragLeaveHandler}
          onDragOver={onDragOverHandler}
          onDrop={onDropHandler}
        >
          <input
            type="file"
            accept=".jpg,.png,.jpeg"
            className={`${funnelImageInput} ${myStyle}`}
            multiple={false}
            aria-hidden
            id="userImage"
            name="userImage"
            onChange={uploadImageHandler}
          />
          <div className={`${alertText} ${myStyle}`}>
            (업로드 된 파일이 없을시, 기본 이미지로 대체돼요!)
          </div>
        </div>
      )}

      <div className={funnelButtonContainer}>
        <button
          type="button"
          className={`${myStyle} ${funnelButton}`}
          onClick={previoustStepHandler}
        >
          이전으로
        </button>
        <button type="submit" className={`${myStyle} ${funnelButton}`} onClick={formSubmitHandler}>
          다음
        </button>
      </div>
    </div>
  );
}
