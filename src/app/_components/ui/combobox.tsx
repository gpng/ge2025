'use client';

import { Button } from '@/app/_components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/app/_components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/_components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

interface Option {
  id: string;
  name: string;
  searchText?: string;
}

interface Props {
  options: Option[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  filterFn?: (value: string, search: string) => number;
}

const Combobox = ({
  options,
  value,
  onValueChange,
  placeholder = 'Select an option',
  className,
  filterFn,
}: Props) => {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.id === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          // biome-ignore lint/a11y/useSemanticElements: <explanation>
          role="combobox"
          aria-expanded={open}
          className={cn('w-full justify-between', className)}
        >
          {selectedOption ? selectedOption.name : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command filter={filterFn}>
          <CommandInput placeholder={placeholder} />
          <CommandList className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent hover:scrollbar-thumb-gray-300">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.id}
                  value={option.searchText || option.name}
                  onSelect={() => {
                    onValueChange(option.id);
                    setOpen(false);
                  }}
                >
                  {option.name}
                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === option.id ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
