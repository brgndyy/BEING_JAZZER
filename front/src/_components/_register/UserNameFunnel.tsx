import React from 'react';

type FunnelStepHandlerType = {
  nextStepHandler: () => void;
  previoustStepHandler: () => void;
};

export default function UserNameFunnel({
  nextStepHandler,
  previoustStepHandler,
}: FunnelStepHandlerType) {
  return (
    <div>
      <button type="button" onClick={previoustStepHandler}>
        이전으로
      </button>
      <div>UserName 퍼널</div>
      <button type="button" onClick={nextStepHandler}>
        다음
      </button>
    </div>
  );
}
