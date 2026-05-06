'use client';

import { useEffect, useState, useRef } from 'react';

import { Moon01Icon, Sun03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { motion as m } from 'motion/react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps = {}) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document === 'undefined') {
      return 'light';
    }

    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Get initial theme from localStorage, default to 'light' if none exists
    const savedTheme = localStorage.getItem('starlight-theme') as
      | 'light'
      | 'dark'
      | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    // Listen for theme changes
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem('starlight-theme') as
        | 'light'
        | 'dark'
        | null;
      if (newTheme) {
        setTheme(newTheme);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Listen for direct DOM class changes (for immediate updates)
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    if (document.startViewTransition) {
      // Remove page-transition class to avoid conflicts
      document.documentElement.classList.remove('page-transition');
      // Add theme-transition class
      document.documentElement.classList.add('theme-transition');

      document
        .startViewTransition(() => {
          const newTheme = theme === 'dark' ? 'light' : 'dark';
          setTheme(newTheme);
          document.documentElement.classList.toggle('dark');
          localStorage.setItem('starlight-theme', newTheme);
        })
        .finished.then(() => {
          // Clean up theme-transition class after all animations complete
          setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
          }, 50);
        })
        .catch(() => {
          // Fallback cleanup in case of error
          document.documentElement.classList.remove('theme-transition');
        });
    } else {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('starlight-theme', newTheme);
    }
  };

  return (
    <Button
      aria-label="Toggle theme"
      variant="ghost"
      onClick={toggleTheme}
      data-theme-toggle
      ref={buttonRef}
      className={cn('flex rounded-[2px] px-4 py-0 lg:px-2', className)}
      size="sm"
    >
      <div className="relative size-5">
        {/* Sun Icon */}
        <m.span
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: theme === 'light' ? 1 : 0,
            scale: theme === 'light' ? 1 : 0.8,
            rotate: theme === 'light' ? 0 : -90,
          }}
          transition={{ duration: 0.4 }}
        >
          <HugeiconsIcon
            icon={Sun03Icon}
            className="size-5"
            strokeWidth={1.8}
          />
        </m.span>

        {/* Moon Icon */}
        <m.span
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: theme === 'dark' ? 1 : 0,
            scale: theme === 'dark' ? 1 : 0.8,
            rotate: theme === 'dark' ? 0 : -90,
          }}
          transition={{ duration: 0.4 }}
        >
          <HugeiconsIcon
            icon={Moon01Icon}
            className="size-5"
            strokeWidth={1.8}
          />
        </m.span>
      </div>
    </Button>
  );
}
