import { UserInfo } from '@/_types';
import { motion } from 'framer-motion';
import ProfileImage from './ProfileImage';
import { profileContainer, motionContainer } from './userProfile.css';
import ProfileMenu from './ProfileMenu';
import DownIcon from './DownIcon';
import useOutSideClick from '@/_hooks/useOutsideClick';
import useToggle from '@/_hooks/useToggle';

export interface Props {
  userInfo: UserInfo;
}

export default function UserProfile({ userInfo }: Props) {
  const { userProfileImageSrc } = userInfo;
  const { isOpen, toggle, close } = useToggle();

  const ref = useOutSideClick<HTMLDivElement>({
    onOutsideClick: close,
    onInsideClick: toggle,
  });

  return (
    <div
      ref={ref}
      className={profileContainer}
      role="button"
      tabIndex={0}
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
