import { useState, useRef, useEffect } from 'react';
import './popup.css';

export function KioskMission({
  apiUrl = 'https://kioskadm.vercel.app/api/generate-code',
  secret,
  projectId,
  targetId = '',
  expiresIn = 5,
  title = '키오스크 미션 코드',
  desc = '아래 코드를 키오스크에 입력하세요',
  icon = '🎉',
  children,
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const [expiresAt, setExpiresAt] = useState(null);
  const [error, setError] = useState('');
  const [remaining, setRemaining] = useState(0);
  const timerRef = useRef(null);

  const handleOpen = async () => {
    if (!secret) { setError('secret prop이 설정되지 않았습니다.'); setOpen(true); return; }
    setOpen(true); setLoading(true); setCode(''); setError(''); setExpiresAt(null);
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': secret },
        body: JSON.stringify({ projectId, targetId, expiresIn }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || '코드 생성 실패');
      setCode(data.code);
      setExpiresAt(new Date(data.expiresAt));
    } catch (e) {
      setError(e.message.includes('fetch') ? '서버에 연결할 수 없습니다.' : e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!expiresAt) return;
    const tick = () => {
      const r = Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));
      setRemaining(r);
      if (r === 0) clearInterval(timerRef.current);
    };
    tick();
    timerRef.current = setInterval(tick, 1000);
    return () => clearInterval(timerRef.current);
  }, [expiresAt]);

  const handleClose = () => { setOpen(false); clearInterval(timerRef.current); };
  const handleCopy = () => { if (code) navigator.clipboard.writeText(code).catch(() => {}); };

  const m = Math.floor(remaining / 60);
  const s = String(remaining % 60).padStart(2, '0');
  const expired = expiresAt && remaining === 0;

  return (
    <>
      {children ? children({ open: handleOpen, loading }) : (
        <button className="km-trigger-btn" onClick={handleOpen} disabled={loading}>
          🏆 키오스크 미션 완료
        </button>
      )}

      {open && (
        <div className="km-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
          <div className="km-popup">
            <div className="km-icon">{icon}</div>
            <div className="km-title">{title}</div>
            <div className="km-desc">{desc}</div>
            {error && <div className="km-error">⚠️ {error}</div>}
            <div className={`km-code${expired ? ' km-expired' : ''}`}>
              {loading ? '생성 중…' : code || '──────'}
            </div>
            {expiresAt && (
              <div className={`km-timer${expired ? ' km-expired' : ''}`}>
                {expired ? '⚠️ 코드가 만료됐습니다.' : `유효 시간: ${m}분 ${s}초`}
              </div>
            )}
            {code && !expired && (
              <button className="km-btn km-btn-copy" onClick={handleCopy}>📋 코드 복사</button>
            )}
            {expired && (
              <button className="km-btn km-btn-retry" onClick={handleOpen}>🔄 새 코드 받기</button>
            )}
            <button className="km-btn km-btn-close" onClick={handleClose}>닫기</button>
          </div>
        </div>
      )}
    </>
  );
}

export default KioskMission;
