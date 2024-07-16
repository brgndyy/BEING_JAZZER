import { myStyle } from '@/_styles/vars.css';
import { ChangeEventHandler } from 'react';
import { AiFillLock } from 'react-icons/ai';
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
import Input from '@/_components/_common/input/Input';

export interface OptionConfigProps {
  type: string;
  config: {
    [key: string]: {
      isAvailable: boolean;
      isSelected: boolean;
    };
  };
  handleSelectedUserChordSetting: ChangeEventHandler<HTMLInputElement>;
}

export default function OptionConfig({
  type,
  config,
  handleSelectedUserChordSetting,
}: OptionConfigProps) {
  return (
    <div className={`${optionContainer} ${myStyle}`}>
      <div className={`${title} ${myStyle}`}>{type}</div>
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
              <Input
                type="checkbox"
                name={key}
                id={key}
                className={hiddenCheckBoxInput}
                disabled={!isAvailable}
                checked={isSelected}
                onChange={handleSelectedUserChordSetting}
              />
              <p className={`${isAvailable ? '' : hideValue}`}>{key}</p>
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
