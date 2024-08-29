import React from 'react';
import { myStyle } from '@/_styles/vars.css';
import useDragAndDrop from '@/_hooks/useDragAndDrop';
import Image from 'next/image';
import Input from '../_common/input/Input';
import Button from '../_common/button/Button';
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
  handlePreviousStep: () => void;
  handleUploadFormFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserSignUp: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function UserImageFunnel({
  handlePreviousStep,
  handleUploadFormFile,
  handleUserSignUp,
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

  const handleUploadUserImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files ? e.target.files[0] : null;

    if (imageFile) {
      setFile(imageFile);
      handleUploadFormFile(e);
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
          className={`${funnelInputContainer} ${dragging ? drag : ''} ${myStyle}
          `}
          onDragEnter={onDragEnterHandler}
          onDragLeave={onDragLeaveHandler}
          onDragOver={onDragOverHandler}
          onDrop={onDropHandler}
        >
          <Input
            variant="default"
            type="file"
            accept=".jpg,.png,.jpeg"
            className={`${funnelImageInput} ${myStyle}`}
            multiple={false}
            aria-hidden
            id="userImage"
            name="userImage"
            onChange={handleUploadUserImage}
          />
          <div className={`${alertText} ${myStyle}`}>
            (업로드 된 파일이 없을시, 기본 이미지로 대체돼요!)
          </div>
        </div>
      )}

      <div className={funnelButtonContainer}>
        <Button
          variant="none"
          type="button"
          className={`${myStyle} ${funnelButton}`}
          onClick={handlePreviousStep}
        >
          이전으로
        </Button>
        <Button
          variant="none"
          type="submit"
          className={`${myStyle} ${funnelButton} `}
          onClick={handleUserSignUp}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
