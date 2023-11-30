import multer from 'multer';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dynamicPath = `src/assets/images/userProfile`;

    // 폴더가 존재하지 않는 경우에 폴더 생성
    if (!fs.existsSync(dynamicPath)) {
      fs.mkdirSync(dynamicPath, { recursive: true });
    }

    cb(null, dynamicPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const userProfileImageUpload = multer({ storage: storage });

export default userProfileImageUpload;
