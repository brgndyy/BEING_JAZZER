import { OptionConfigPropsType } from 'types';
import { myStyle } from '@/_styles/vars.css';
import { AiFillLock } from 'react-icons/ai';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { optionContainer, title, optionSelect } from '../settingModal.css';
import {
  configLabel,
  unchecked,
  hiddenCheckBoxInput,
  hideValue,
  lockIconContainer,
  lockIcon,
  isSelectedOption,
  isNotSelectedOption,
} from './OptionConfig.css';

export default function OptionConfig({
  type,
  config,
  handleSelectedUserSettingConfig,
}: OptionConfigPropsType) {
  return (
    <div className={`${optionContainer} ${myStyle}`}>
      <div className={`${title} ${myStyle} ${BMHANNAAir.className}`}>{type}</div>
      <div className={`${optionSelect} ${myStyle}`}>
        {Object.entries(config).map(([key, { isAvailable, isSelected }], index) => {
          return (
            <label
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`${configLabel} ${!isAvailable ? unchecked : ''} ${
                isSelected ? isSelectedOption : isNotSelectedOption
              }`}
            >
              <input
                type="checkbox"
                name={key}
                id={key}
                className={hiddenCheckBoxInput}
                disabled={!isAvailable}
                checked={isSelected}
                onChange={handleSelectedUserSettingConfig}
              />
              <p className={`${isAvailable ? '' : hideValue} ${BMHANNAAir.className}`}>{key}</p>
              {!isAvailable && (
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
