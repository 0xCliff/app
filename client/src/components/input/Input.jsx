import className from 'classnames';
import { twMerge } from 'tailwind-merge';

import './Input.css';

function Input({ small, medium, large, type, placeholder, ...rest }) {
  const classes = twMerge(
    className(
      rest.className,
      'rounded px-3 py-1.5 placeholder:text-dark-slate focus:outline-none focus:border-blue focus:ring-blue focus:ring-2 mb-5',
      {
        'h-8': small,
        'h-10': medium,
        'h-14': large,
      }
    )
  );
  return <input type={type} placeholder={placeholder} className={classes} />;
}

Input.propTypes = {
  checkValues: ({ small, medium, large }) => {
    const count = Number(!!small) + Number(!!medium) + Number(!!large);

    if (count > 1) {
      return new Error(
        'Can only have one of "small", "medium", "large" passed through props.'
      );
    }
  },
};

export default Input;
