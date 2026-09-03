import React, { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [rotation, setRotation] = useState(0);
  const [isFlapping, setIsFlapping] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const lastMousePos = useRef({ x: 0, y: 0 });
  const flapTimeout = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      const dx = x - lastMousePos.current.x;
      const dy = y - lastMousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 1.5) {
        let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 45; 
        setRotation(angle);
        
        if (distance > 12) {
          setIsFlapping(true);
          clearTimeout(flapTimeout.current);
          flapTimeout.current = setTimeout(() => setIsFlapping(false), 150);
        }
      }

      setPosition({ x, y });
      lastMousePos.current = { x, y };
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, select, textarea, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsFlapping(true);
    const handleMouseUp = () => setIsFlapping(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearTimeout(flapTimeout.current);
    };
  }, []);

  return (
    <div className="custom-cursor-container">
      {/* LAYER 1: Stays perfectly upright, applies the global screen shadow */}
      <div 
        className={`bird-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`
        }}
      >
        {/* LAYER 2: Handles steering rotation independently */}
        <div 
          className="bird-steering-container"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* LAYER 3: Renders the asset and targets the wingbeat animation */}
          <img 
            src="/CursorBird.png" 
            className={isFlapping ? 'flapping' : ''} 
            alt="Custom Bird Cursor" 
          />
        </div>
      </div>
    </div>
  );
}