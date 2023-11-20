import { OptionConfigPropsType } from 'types';
import { myStyle } from '@/_styles/vars.css';
import { AiFillLock } from 'react-icons/ai';
import { optionContainer, title, optionSelect } from '../_modal/settingModal.css';
import {
  configLabel,
  unchecked,
  hiddenCheckBoxInput,
  hideValue,
  lockIconContainer,
  lockIcon,
} from './OptionConfig.css';

export default function OptionConfig({ type, config }: OptionConfigPropsType) {
  return (
    <div className={`${optionContainer} ${myStyle}`}>
      <div className={`${title} ${myStyle}`}>{type}</div>
      <div className={`${optionSelect} ${myStyle}`}>
        {Object.entries(config).map(([key, value], index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <label key={index} className={`${configLabel} ${!value ? unchecked : ''}`}>
              <input
                type="checkbox"
                name={key}
                className={hiddenCheckBoxInput}
                disabled={!value}
                checked={value as boolean}
              />
              <p className={value ? '' : hideValue}>{key}</p>
              {!value && (
                <div className={lockIconContainer}>
                  <AiFillLock className={lockIcon} />
                </div>
              )}
            </label>
          );
        })}
      </div>
    </div>
  );
}
