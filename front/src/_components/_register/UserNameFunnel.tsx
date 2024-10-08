'use client';

import { ChangeEventHandler, useState } from 'react';
import { myStyle } from '@/_styles/vars.css';
import { toast } from 'react-toastify';
import { validate, VALIDATION_TYPE } from '@/_utils/validator';
import { motion } from 'framer-motion';
import ERROR_MESSAGES from '@/_constants/errorMessages';
import {
  contentContainer,
  funnelButtonContainer,
  funnelButton,
  funnelLabel,
  funnelInputContainer,
  funnelInput,
} from './funnel.css';
import Button from '../_common/button/Button';
import { myFontClass } from '@/app/font.css';

type Props = {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function UserNameFunnel({
  handleNextStep,
  handlePreviousStep,
  value,
  onChange,
}: Props) {
  const [error, setError] = useState(false);

  const handleNext = async () => {
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

    handleNextStep();
  };

  return (
    <div className={`${contentContainer} ${myStyle}`}>
      <label className={`${funnelLabel} ${myStyle}`} htmlFor="userName">
        이름
      </label>
      <div className={funnelInputContainer}>
        <motion.input
          type="text"
          className={`${funnelInput} ${myFontClass}`}
          id="userName"
          name="userName"
          autoComplete="off"
          value={value}
          onChange={onChange}
          initial={false}
          animate={{
            borderColor: error ? 'red' : 'initial',
            x: error ? [-2, 2, -2, 2, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
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
          type="button"
          className={`${myStyle} ${funnelButton}`}
          onClick={handleNext}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
