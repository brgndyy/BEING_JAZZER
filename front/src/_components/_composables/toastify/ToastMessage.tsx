'use client';

import { myStyle } from '@/_styles/vars.css';
import {
  toastContainer,
  stateMessage,
  error,
  success,
  progressBar,
  containerExit,
} from './toast.css';

type Message = {
  id: number;
  message: string;
  type: 'success' | 'error';
  exiting?: boolean;
};

type ToastMessageProps = {
  messages: Message[];
  //   closeMessage: (id: number) => void;
};

export default function ToastMessage({ messages }: ToastMessageProps) {
  //   function getIcon() {
  //     if (type === 'success') return <Icon.Success />;
  //     if (type === 'warning') return <Icon.Warning />;
  //     if (type === 'error') return <Icon.Error />;
  //     if (type === 'info') return <Icon.Info />;
  //   }

  function getColorClass(type: string) {
    switch (type) {
      case 'success':
        return success;
      case 'error':
        return error;
      default:
        return '';
    }
  }

  return (
    <>
      {messages.map(({ id, message, type, exiting }) => {
        return (
          <div
            className={`${toastContainer} ${getColorClass(type)} ${exiting ? containerExit : ''}`}
            key={id}
          >
            <p className={`${stateMessage} ${myStyle}`}>{message}</p>
            <div className={`${progressBar} ${myStyle}`} />
          </div>
        );
      })}
    </>
  );
}
