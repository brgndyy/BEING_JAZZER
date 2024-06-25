'use client';

import useFunnel from '@/_hooks/useFunnel';
import { AnimatePresence, motion } from 'framer-motion';
import { myStyle } from '@/_styles/vars.css';
import useForm from '@/_hooks/useForm';
import FunnelCard from '../_common/cards/FunnelCard';
import WelcomeFunnel from './WelcomeFunnel';
import UserNameFunnel from './UserNameFunnel';
import UserImageFunnel from './UserImageFunnel';
import FinishFunnel from './FinishFunnel';
import { funnelConatiner } from './funnel.css';
import UserEmailFunnel from './UserEmailFunnel';
import useSignUpMutation from '@/_hooks/mutations/useSignUpMutation';
import { SignUpFormState } from '../../_types/index';

const boxVariants = {
  entry: (direction: 'next' | 'previous') => ({
    x: direction === 'previous' ? '-500' : '500',
    opacity: 0,
    scale: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: (direction: 'next' | 'previous') => ({
    x: direction === 'previous' ? '500' : '-500',
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};

const REGISTER_STEP = ['welcome', 'userEmail', 'userName', 'userImage', 'finish'] as const;

type Props = {
  userEmail: string;
};

export default function RegisterFunnel({ userEmail }: Props) {
  const { step, Funnel, handleNextStep, handlePreviousStep, direction } = useFunnel(REGISTER_STEP);

  const { formState, handleFormValue, handleUploadFormFile } = useForm<SignUpFormState>({
    userName: '',
    userEmail,
    userImage: null,
  });

  const { handleUserSignUp } = useSignUpMutation({
    userName: formState.userName,
    userEmail: formState.userEmail,
    userImage: formState.userImage,
  });

  return (
    <FunnelCard>
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          className={`${funnelConatiner} ${myStyle}`}
          key={step}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
          custom={direction}
        >
          <Funnel step={step}>
            <Funnel.Step name={REGISTER_STEP[0]}>
              <WelcomeFunnel handleNextStep={handleNextStep} />
            </Funnel.Step>
            <Funnel.Step name={REGISTER_STEP[1]}>
              <UserEmailFunnel
                userEmail={userEmail}
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            </Funnel.Step>
            <Funnel.Step name={REGISTER_STEP[2]}>
              <UserNameFunnel
                handlePreviousStep={handlePreviousStep}
                handleNextStep={handleNextStep}
                value={formState.userName}
                inputHandler={handleFormValue}
              />
            </Funnel.Step>
            <Funnel.Step name={REGISTER_STEP[3]}>
              <UserImageFunnel
                handlePreviousStep={handlePreviousStep}
                handleUploadFormFile={handleUploadFormFile}
                handleUserSignUp={handleUserSignUp}
              />
            </Funnel.Step>
            <Funnel.Step name={REGISTER_STEP[4]}>
              <FinishFunnel />
            </Funnel.Step>
          </Funnel>
        </motion.div>
      </AnimatePresence>
    </FunnelCard>
  );
}
