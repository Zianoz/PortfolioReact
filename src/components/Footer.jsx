import { useState, useEffect } from 'react';

export default function Footer() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount >= 5) {
      document.body.style.backgroundColor = 'blue';
    }
  }, [clickCount]);

  const handleFooterClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <footer onClick={handleFooterClick} style={{ cursor: 'pointer' }}>
      <div className="copyright">
        <div className="copyright-text">
          <p>&copy; 2025 Pakapol Pathumthammarong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
