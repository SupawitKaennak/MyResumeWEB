'use client';

import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, X } from 'lucide-react';

interface DarkModeToggleProps {
  onToggle: (isDark: boolean) => void;
  isDark: boolean;
}

export default function DarkModeToggle({ onToggle, isDark }: DarkModeToggleProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isVisible, setIsVisible] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const startPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && dragRef.current) {
        const newX = e.clientX - startPos.current.x;
        const newY = e.clientY - startPos.current.y;
        
        // Keep within viewport bounds
        const maxX = window.innerWidth - dragRef.current.offsetWidth;
        const maxY = window.innerHeight - dragRef.current.offsetHeight;
        
        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (dragRef.current) {
      setIsDragging(true);
      const rect = dragRef.current.getBoundingClientRect();
      startPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  const toggleDarkMode = () => {
    onToggle(!isDark);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleVisibility}
        className="fixed top-4 right-4 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
        style={{ zIndex: 1000 }}
      >
        {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
      </button>

      {/* Popup Panel */}
      {isVisible && (
        <div
          ref={dragRef}
          className="fixed z-50 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-gray-200 p-4 min-w-[200px]"
          style={{
            left: position.x,
            top: position.y,
            zIndex: 1001
          }}
          onMouseDown={handleMouseDown}
        >
          {/* Drag Handle */}
          <div className="flex items-center justify-between mb-3 cursor-move">
            <h3 className="text-sm font-semibold text-gray-700">
              {isDark ? 'Dark Mode' : 'Light Mode'}
            </h3>
            <button
              onClick={toggleVisibility}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Theme</span>
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isDark ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isDark ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Theme Info */}
          <div className="mt-3 text-xs text-gray-500">
            {isDark ? 'Dark theme active' : 'Light theme active'}
          </div>
        </div>
      )}
    </>
  );
} 