import fs from 'fs';
import path from 'path';
import nunjucks from 'nunjucks';
import PATH from '../constants/path';

const htmlString = fs.readFileSync(path.join(process.cwd(), PATH.auth_html_file), 'utf-8');

export const renderHtml = (state: string, encryptedCode: string) =>
  nunjucks.renderString(htmlString, {
    loginState: state,
    encryptedCode: encryptedCode,
  });
