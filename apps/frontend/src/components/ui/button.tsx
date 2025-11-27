'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/ui';

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all
   disabled:pointer-events-none disabled:opacity-50
   [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0
   outline-none focus-visible:border-slate-300 focus-visible:ring-slate-300/50 focus-visible:ring-[3px]`.replace(/\s+/g, ' '),
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-800',
        secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50',
        ghost: 'hover:bg-slate-100 text-slate-800',
        link: 'text-slate-900 underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3',
        lg: 'h-11 rounded-md px-6',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      ref={ref}
      data-slot="button"
      {...props}
    />
  )
);
Button.displayName = 'Button';

export { buttonVariants };
