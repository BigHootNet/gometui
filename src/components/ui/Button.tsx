import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded';
  const variantStyles = variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black';

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {children}
    </button>
  );
}