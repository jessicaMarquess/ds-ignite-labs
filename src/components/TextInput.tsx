import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({children}: TextInputRootProps) => {
  return (
    <div className='flex items-center h-12 gap-3 w-full py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = ({children}: TextInputIconProps) => {
  return (
    <Slot className='w-6 h-6 text-gray-400'>{children}</Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon';


export interface TextInputRealInputProps extends InputHTMLAttributes<HTMLInputElement> { }

const TextInputRealInput = (elements: TextInputRealInputProps) => {
  return (
    <input className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400' {...elements} />
  )
}

TextInputRealInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputRealInput,
  Icon: TextInputIcon,
}