import Image from 'next/image';
import API_URL from '@/_constants/apiUrl';
import { profileImage, profileWrapper, infoWrapper, textWrapper } from './userInfo.css';
import InfoText from './InfoText';
import WithdrawTriggerButton from './WithdrawTriggerButton';

interface UserInfoProps {
  userEmail: string;
  userName: string;
  profileImageUrl: string;
}

export default function UserInfo({ userEmail, userName, profileImageUrl }: UserInfoProps) {
  return (
    <div className={profileWrapper}>
      <div>
        <Image
          className={profileImage}
          src={`${API_URL}${profileImageUrl}`}
          width={200}
          height={200}
          alt="프로필 이미지"
        />
      </div>
      <div className={infoWrapper}>
        <InfoText infoTitle={'이름'} infoValue={userName} />
        <InfoText infoTitle={'이메일'} infoValue={userEmail} />
        <div className={textWrapper}>
          <WithdrawTriggerButton />
        </div>
      </div>
    </div>
  );
}
