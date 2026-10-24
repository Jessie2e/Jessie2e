import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [rotation, setRotation] = useState(0);
  const [isFlapping, setIsFlapping] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isCursorEnabled, setIsCursorEnabled] = useState(false);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const flapTimeout = useRef(null);

  useEffect(() => {
    const cursorMedia = window.matchMedia(
      '(min-width: 1025px) and (hover: hover) and (pointer: fine)'
    );

    const updateCursorAvailability = () => {
      setIsCursorEnabled(cursorMedia.matches);
    };

    updateCursorAvailability();
    cursorMedia.addEventListener('change', updateCursorAvailability);

    return () => {
      cursorMedia.removeEventListener('change', updateCursorAvailability);
    };
  }, []);

  useEffect(() => {
    if (!isCursorEnabled) return undefined;
    let frame = 0;
    let latestPointer = null;
    const updatePointer = (e) => {
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

    // Coalesce high-frequency mouse events into one visual update per frame.
    const handleMouseMove = (event) => {
      latestPointer = { clientX: event.clientX, clientY: event.clientY };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        updatePointer(latestPointer);
      });
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
      cancelAnimationFrame(frame);
    };
  }, [isCursorEnabled]);

  if (!isCursorEnabled) {
    return null;
  }

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
            src="/CursorBird-160.webp"
            className={isFlapping ? 'flapping' : ''}
            alt="" aria-hidden="true"
           width="160" height="160" decoding="async" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
