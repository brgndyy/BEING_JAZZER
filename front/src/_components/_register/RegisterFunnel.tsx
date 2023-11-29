'use client';

import { RegisterFromPropsType } from 'types';
import useFunnel from '@/_hooks/useFunnel';
import { AnimatePresence, motion } from 'framer-motion';
import FunnelCard from '../_composables/cards/FunnelCard';
import WelcomeFunnel from './WelcomeFunnel';
import UserNameFunnel from './UserNameFunnel';
import UserImageFunnel from './UserImageFunnel';
import FinishFunnel from './FinishFunnel';

export default function RegisterFunnel({ userEmail }: RegisterFromPropsType) {
  const { step, Funnel, nextStepHandler, previousStepHandler, animationDirection } = useFunnel([
    'welcome',
    'userName',
    'userImage',
    'finish',
  ] as const);

  return (
    <FunnelCard>
      <AnimatePresence initial={false}>
        <motion.div
          key={step}
          initial={
            animationDirection === 'next' ? { x: '100%', opacity: 0 } : { x: '-100%', opacity: 0 }
          }
          animate={{ x: 0, opacity: 1 }}
          exit={
            animationDirection === 'next' ? { x: '-200%', opacity: 0 } : { x: '200%', opacity: 0 }
          }
          transition={{ duration: 0.3 }}
        >
          <Funnel>
            <Funnel.Step name="welcome">
              <WelcomeFunnel nextStepHandler={nextStepHandler} />
            </Funnel.Step>
            <Funnel.Step name="userName">
              <UserNameFunnel
                previoustStepHandler={previousStepHandler}
                nextStepHandler={nextStepHandler}
              />
            </Funnel.Step>
            <Funnel.Step name="userImage">
              <UserImageFunnel previoustStepHandler={previousStepHandler} />
            </Funnel.Step>
            <Funnel.Step name="finish">
              <FinishFunnel />
            </Funnel.Step>
          </Funnel>
        </motion.div>
      </AnimatePresence>
    </FunnelCard>
  );
}
