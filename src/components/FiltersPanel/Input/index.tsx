'use client';
import styles from './styles.module.scss';

import React, { useState, useEffect } from 'react';

interface InputProps {
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ onChange, placeholder, label }) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(inputValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue, onChange]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles['input']}>
      <label className={styles['input__label']}>{label}</label>
      <input
        className={styles['input__input']}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
