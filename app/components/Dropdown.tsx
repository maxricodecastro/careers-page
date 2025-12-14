'use client';

import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CheckIcon } from 'lucide-react';

interface DropdownProps {
  label: string;
  options: string[];
  value?: string;
  onSelect?: (value: string) => void;
}

export default function Dropdown({ label, options, value, onSelect }: DropdownProps) {
  const [selectedValue, setSelectedValue] = React.useState(value || label);
  const [isOpen, setIsOpen] = React.useState(false);
  const [instantClose, setInstantClose] = React.useState(false);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    onSelect?.(option);
    // Make it disappear instantly - no animation
    setInstantClose(true);
    setIsOpen(false);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    // Reset instantClose flag when opening or after closing
    if (open || !instantClose) {
      setInstantClose(false);
    }
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <button className="btn-primary flex items-center gap-2 cursor-pointer">
          {selectedValue}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start"
        sideOffset={12}
        className={`dropdown-blur bg-[#0F0F0F] border border-[var(--border)] min-w-[200px] w-[200px] px-2 ${isOpen && !instantClose ? 'dropdown-open' : ''} ${instantClose ? 'dropdown-instant-close' : ''} data-[state=open]:animate-none data-[state=closed]:animate-none`}
        style={instantClose ? { 
          display: 'none',
          animation: 'none',
          transition: 'none',
          filter: 'none',
          transform: 'none',
          opacity: '0'
        } : undefined}
      >
        {options.map((option) => {
          const isSelected = selectedValue === option;
          return (
            <DropdownMenuItem
              key={option}
              onSelect={() => handleSelect(option)}
              className="text-[var(--text-primary)] focus:bg-[#1a1a1a] focus:text-[var(--text-primary)] cursor-pointer py-3"
            >
              <span className="flex-1">{option}</span>
              {isSelected && (
                <CheckIcon className="size-4 ml-auto text-[var(--text-primary)]" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

