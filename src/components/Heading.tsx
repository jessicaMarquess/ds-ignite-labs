import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface HeadingProps {
   size?: 'lg' | 'xl' | '2xl';
   children: ReactNode;
   asChild?: boolean;
   className?: string;
}

export const Heading = ({ size = 'xl', children, asChild, className }: HeadingProps) => {
   const Comp = asChild ? Slot : 'h2';
   return (
      <Comp className={clsx(
         'font-sans text-gray-100',
         {
            'text-lg': size === 'lg',
            'text-xl': size === 'xl',
            'text-2xl': size === '2xl',
         },
         className,
      )}>
         {children}
      </Comp>
   )
}