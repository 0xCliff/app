import className from 'classnames';
import { twMerge } from 'tailwind-merge';

import './Button.css';

function Button({
  children,
  primary,
  success,
  info,
  warning,
  danger,
  pill,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    className(
      rest.className,
      'flex items-center px-3 py-1.5 border border-solid',
      {
        'bg-blue border-blue text-dark-slate': primary,
        'bg-green border-green text-dark-slate': success,
        'bg-aqua border-aqua text-dark-slate': info,
        'bg-yellow border-yellow text-dark-slate': warning,
        'bg-red border-red text-dark-slate': danger,
        'rounded-md': rounded,
        'rounded-full': pill,
        'bg-dark-slate': outline,
        'text-blue': outline && primary,
        'text-green': outline && success,
        'text-aqua': outline && info,
        'text-yellow': outline && warning,
        'text-red': outline && danger,
      }
    )
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkValues: ({ primary, success, info, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!success) +
      Number(!!info) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Can only have one of "primary", "success", "info", "warning", "danger" passed through props.'
      );
    }
  },
};

export default Button;
