import React from 'react';

type FunnelStepHandlerType = {
  previoustStepHandler: () => void;
};

export default function UserImageFunnel({ previoustStepHandler }: FunnelStepHandlerType) {
  return (
    <>
      <button type="button" onClick={previoustStepHandler}>
        이전으로
      </button>
      <div>UserImage 퍼널</div>
      <button type="button">다음</button>
    </>
  );
}
