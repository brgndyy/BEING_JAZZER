import multer from 'multer';
import fs from 'fs';
import PATH from '../constants/path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 폴더가 존재하지 않는 경우에 폴더 생성
    if (!fs.existsSync(PATH.user_profile_image)) {
      fs.mkdirSync(PATH.user_profile_image, { recursive: true });
    }

    cb(null, PATH.user_profile_image);
  },
  filename: function (req, file, cb) {
    const safeFilename = file.originalname.replace(/[^a-zA-Z0-9.]/g, '_');
    cb(null, safeFilename);
  },
});

const userProfileImageUpload = multer({ storage: storage });

export default userProfileImageUpload;
