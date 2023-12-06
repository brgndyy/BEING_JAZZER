import { OptionConfigPropsType } from 'types';
import { myStyle } from '@/_styles/vars.css';
import { AiFillLock } from 'react-icons/ai';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { optionContainer, title, optionSelect } from '../_modal/settingModal.css';
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
  handleCheckboxChange,
  selectedSettingOption,
}: OptionConfigPropsType) {
  return (
    <div className={`${optionContainer} ${myStyle}`}>
      <div className={`${title} ${myStyle} ${BMHANNAAir.className}`}>{type}</div>
      <div className={`${optionSelect} ${myStyle}`}>
        {Object.entries(config).map(([key, value], index) => {
          const isSelected = selectedSettingOption[key];

          return (
            <label
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`${configLabel} ${!value ? unchecked : ''} ${
                isSelected ? isSelectedOption : isNotSelectedOption
              }`}
            >
              <input
                type="checkbox"
                name={key}
                id={key}
                className={hiddenCheckBoxInput}
                disabled={!value}
                checked={isSelected}
                onChange={handleCheckboxChange}
              />
              <p className={`${value ? '' : hideValue} ${BMHANNAAir.className}`}>{key}</p>
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
