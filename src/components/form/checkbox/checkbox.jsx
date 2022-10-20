import React, { ChangeEvent } from 'react';

export const Checkbox = ({
  options,
  action = () => null,
  checked,
  label,
  name,
  type = 'checkbox',
  color = '',
  colorCustom = '',
  text = '',
  disabled = false,
  optionLabel = 'name',
  optionValue = 'id',
  optionRight = [],
  textRight = '',
}) => {
  const veryfiCheck = (e) => {
    const verify = checked?.filter((elem) => {
      return elem[optionValue] === e[optionValue] ? elem : null;
    });

    const res = checked?.filter((elem) => {
      return elem[optionValue] !== e[optionValue] ? elem : null;
    });

    if (checked.length === 0) {
      return [e];
    } else {
      if (verify.length === 0) {
        return checked.concat(e);
      } else {
        return res;
      }
    }
  };

  const checkedAction = (e) => {
    if (e !== undefined) {
      const resp = options ? (e ? veryfiCheck(e) : []) : e;
      const fullResponse = {name: name, value: resp, type: type }
      action && action(e, fullResponse);
    }
  };

  const veryfiChecked = (e) => {
    if (!options) {
      return checked[optionValue] === e[optionValue] ? true : false;
    } else {
      if (checked.length === 0) {
        return false;
      } else {
        const verify = checked?.filter((elem) => {
          return elem[optionValue] === e[optionValue] ? elem : null;
        });

        if (verify.length === 0) {
          return false;
        } else {
          return (verify[0] && verify[0][optionValue]) === e[optionValue]
            ? true
            : false;
        }
      }
    }
  };

  return (
    <div
      className={`form-box form-checkbox ${type} ${color} ${
        disabled ? 'disabled' : ''
      }`}
    >
      {label ? <label htmlFor={`id-${name}`}>{label}</label> : null}
      {options ? (
        options.map((c, index) => {
          return (
            <div key={`checkbox-${name}-${index}`} className={`${name}-wrapper`}>
              <div
                key={`${name}-${c[optionValue]}`}
                className={`check-box ${veryfiChecked(c) ? 'checked' : ''}`}
                onClick={() => checkedAction(!disabled ? c : null)}
              >
                <span
                  className={type}
                  style={
                    veryfiChecked(c) && (colorCustom || c.color)
                      ? {
                          backgroundColor: colorCustom
                            ? colorCustom
                            : c.color,
                        }
                      : {}
                  }
                ></span>
                {c[optionLabel]}
              </div>
              {c.right ? optionRight : null} {c.textRight ? textRight : null}
            </div>
          );
        })
      ) : (
        <div
          className={`check-box ${checked ? 'checked' : ''}`}
          onClick={() => checkedAction(!disabled ? !checked : false)}
        >
          <span
            className={type}
            style={
              checked && colorCustom ? { backgroundColor: colorCustom } : {}
            }
          ></span>
          {text}
        </div>
      )}
    </div>
  );
};
