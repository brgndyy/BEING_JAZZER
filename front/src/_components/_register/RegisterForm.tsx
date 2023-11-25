'use client';

import { RegisterFromPropsType } from 'types';
import { registerContainer, bannerText, description } from './RegisterForm.css';
import toast from '../_composables/toastify/Toast';

export default function RegisterForm({ userEmail }: RegisterFromPropsType) {
  return <>
  <button onClick={() => toast.success('성공!')}>클릭</button>
  </>;
}
