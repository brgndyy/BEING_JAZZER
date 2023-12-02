'use client';

import { RegisterFromPropsType } from 'types';
import useFunnel from '@/_hooks/useFunnel';
import { AnimatePresence, motion } from 'framer-motion';
import { myStyle } from '@/_styles/vars.css';
import useForm from '@/_hooks/useForm';
import useFetch from '@/_hooks/useFetch';
import { Suspense } from 'react';
import PATH_ROUTES from '@/_constants/pathRoutes';
import { useRouter } from 'next/navigation';
import FunnelCard from '../_composables/cards/FunnelCard';
import WelcomeFunnel from './WelcomeFunnel';
import UserNameFunnel from './UserNameFunnel';
import UserImageFunnel from './UserImageFunnel';
import FinishFunnel from './FinishFunnel';
import { funnelConatiner } from './funnel.css';
import UserEmailFunnel from './UserEmailFunnel';
import LoadingSpinner from '../_composables/loadingSpinner/LoadingSpinner';

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

export default function RegisterFunnel({ userEmail }: RegisterFromPropsType) {
  const router = useRouter();
  const { step, Funnel, nextStepHandler, previousStepHandler, direction } = useFunnel([
    'welcome',
    'userEmail',
    'userName',
    'userImage',
    'finish',
  ] as const);

  const { formState, inputHandler, inputFileUploadHandler } = useForm({
    userName: '',
    userEmail,
    userImage: null,
  });

  const { sendRequest } = useFetch();

  const formSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('userName', typeof formState.userName === 'string' ? formState.userName : '');
    formData.append('userEmail', userEmail);

    if (formState.userImage instanceof File) {
      formData.append('userImage', formState.userImage);
    }

    const res = await sendRequest(
      `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${PATH_ROUTES.signup}`,
      formData,
      {},
      'POST',
    );

    const data = await res.json();

    const { success } = data;

    if (success) {
      router.refresh();
      router.replace('/');
    }
  };

  return (
    <Suspense fallback={<LoadingSpinner />}>
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
              <Funnel.Step name="welcome">
                <WelcomeFunnel nextStepHandler={nextStepHandler} />
              </Funnel.Step>
              <Funnel.Step name="userEmail">
                <UserEmailFunnel
                  userEmail={userEmail}
                  nextStepHandler={nextStepHandler}
                  previoustStepHandler={previousStepHandler}
                />
              </Funnel.Step>
              <Funnel.Step name="userName">
                <UserNameFunnel
                  previoustStepHandler={previousStepHandler}
                  nextStepHandler={nextStepHandler}
                  value={typeof formState.userName === 'string' ? formState.userName : ''}
                  inputHandler={inputHandler}
                />
              </Funnel.Step>
              <Funnel.Step name="userImage">
                <UserImageFunnel
                  previoustStepHandler={previousStepHandler}
                  inputFileUploadHandler={inputFileUploadHandler}
                  formSubmitHandler={formSubmitHandler}
                />
              </Funnel.Step>
              <Funnel.Step name="finish">
                <FinishFunnel />
              </Funnel.Step>
            </Funnel>
          </motion.div>
        </AnimatePresence>
      </FunnelCard>
    </Suspense>
  );
}
