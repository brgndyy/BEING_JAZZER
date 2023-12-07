import React, { useState } from 'react';
import { myStyle } from '@/_styles/vars.css';
import { toast } from 'react-toastify';
import { validate, VALIDATION_TYPE } from '@/_utils/validator';
import { motion } from 'framer-motion';
import ERROR_MESSAGES from '@/_constants/errorMessages';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import {
  contentContainer,
  funnelButtonContainer,
  funnelButton,
  funnelLabel,
  funnelInputContainer,
  funnelInput,
} from './funnel.css';

type FunnelStepHandlerType = {
  nextStepHandler: () => void;
  previoustStepHandler: () => void;
  value: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function UserNameFunnel({
  nextStepHandler,
  previoustStepHandler,
  value,
  inputHandler,
}: FunnelStepHandlerType) {
  const [error, setError] = useState(false);

  const nextHandler = async () => {
    setError(false);
    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });

    const isValid = validate(value, [VALIDATION_TYPE.REQUIRE, VALIDATION_TYPE.MAX_LENGTH(5)]);
    if (!isValid) {
      setError(true);
      toast.error(ERROR_MESSAGES.invalid_name);
      return;
    }

    nextStepHandler();
  };

  return (
    <div className={`${contentContainer} ${myStyle} ${BMHANNAAir.className}`}>
      <label className={`${funnelLabel} ${myStyle}`} htmlFor="userName">
        이름
      </label>
      <div className={funnelInputContainer}>
        <motion.input
          type="text"
          className={`${funnelInput} ${BMHANNAAir.className}`}
          id="userName"
          name="userName"
          autoComplete="off"
          value={value}
          onChange={inputHandler}
          initial={false}
          animate={{
            borderColor: error ? 'red' : 'initial',
            x: error ? [-2, 2, -2, 2, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className={funnelButtonContainer}>
        <button
          type="button"
          className={`${myStyle} ${funnelButton} ${BMHANNAAir.className}`}
          onClick={previoustStepHandler}
        >
          이전으로
        </button>
        <button
          type="button"
          className={`${myStyle} ${funnelButton} ${BMHANNAAir.className}`}
          onClick={nextHandler}
        >
          다음
        </button>
      </div>
    </div>
  );
}
