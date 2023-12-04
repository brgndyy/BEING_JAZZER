import { UserProfilePropsType } from 'types';
import { useState } from 'react';
import { motion } from 'framer-motion';
import handleKeyDown from '@/_utils/handleKeyDown';
import ProfileImage from './ProfileImage';
import { profileContainer, motionContainer } from './userProfile.css';
import ProfileMenu from './ProfileMenu';
import DownIcon from './DownIcon';

export default function UserProfile({ userInfo }: UserProfilePropsType) {
  const { userProfileImageSrc } = userInfo;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={profileContainer}
      onClick={toggleMenu}
      role="button"
      tabIndex={0}
      onKeyDown={() => handleKeyDown(toggleMenu)}
      aria-label="프로필 설정 토글"
    >
      <ProfileImage userProfileImageSrc={userProfileImageSrc} />
      <DownIcon />
      <motion.div
        className={motionContainer}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        style={{ originY: 0 }}
      >
        <ProfileMenu />
      </motion.div>
    </div>
  );
}
