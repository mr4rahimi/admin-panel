import React from 'react';
import { FiBell } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h1 className="text-lg font-bold">پنل ادمین — برتر سرویس</h1>
        </div>

        <div className="header-actions">
          <button title="اعلان‌ها" className="p-2 rounded-md hover:bg-gray-100">
            <div style={{ position: 'relative' }}>
              <FiBell size={20} />
              <span style={{
                position: 'absolute',
                top: -6,
                left: -6,
                background: '#ef4444',
                color: '#fff',
                fontSize: 11,
                padding: '2px 6px',
                borderRadius: 999
              }}>3</span>
            </div>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="text-sm">ادمین</div>
            <div style={{
              width: 36, height:36, borderRadius: 8, background: 'linear-gradient(90deg,#06b6d4,#0ea5a9)',
              display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700
            }}>م</div>
          </div>
        </div>
      </div>
    </header>
  );
}