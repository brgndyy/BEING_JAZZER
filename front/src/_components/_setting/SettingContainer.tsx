import React from 'react';

import type { PropsWithChildren } from 'react';
import { container } from './settingContainer.css';

export default function SettingContainer({ children }: PropsWithChildren) {
  return <div className={container}>{children}</div>;
}
