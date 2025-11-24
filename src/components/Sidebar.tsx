import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGrid, FiSettings, FiPackage } from 'react-icons/fi';
import clsx from 'clsx';

const NavItem: React.FC<{ to: string; label: string; icon?: React.ReactNode }> = ({ to, label, icon }) => {
  return (
    <NavLink to={to} className={({ isActive }) =>
      clsx('nav-item', isActive && 'active')}
    >
      <div className="w-5 h-5 text-lg">{icon}</div>
      <div className="text-sm">{label}</div>
    </NavLink>
  );
};

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col">
      <div className="brand">
        <div className="logo">B</div>
        <div>
          <div className="text-sm font-bold">برتر سرویس</div>
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>پنل مدیریت</div>
        </div>
      </div>

      <nav className="p-4 flex-1">
        <div className="space-y-2">
          <NavItem to="/" label="داشبورد" icon={<FiGrid />} />
          <NavItem to="/admin/services" label="خدمات" icon={<FiSettings />} />
          <NavItem to="/admin/brands" label="برندها" icon={<FiPackage />} />
          <NavItem to="/admin/models" label="مدل‌ها" icon={<FiPackage />} />
          <NavItem to="/admin/problem" label="مشکلات" icon={<FiPackage />} />
          <NavItem to="/admin/parts" label="قطعات" icon={<FiPackage />} />
          <NavItem to="/admin/part-prices" label="قیمت قطعات" icon={<FiPackage />} />
          <NavItem to="/admin/part-labors" label="اجرت قطعات" icon={<FiPackage />} />
          <NavItem to="/admin/pricing-config" label="تنظیمات قیمت‌گذاری" icon={<FiSettings />} />
          <NavItem to="/admin/problem-part-mapping" label="ثبت مشکل به قطعه" icon={<FiPackage />} />
          <NavItem to="/admin/users" label="کاربران" icon={<FiPackage />} />
          <NavItem to="/admin/orders" label="سفارشات" icon={<FiPackage />} />
          <NavItem to="/admin/technician" label="تکنسین ها" icon={<FiPackage />} />

        </div>
      </nav>

      <div className="p-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
        <div className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
          نسخه پنل مدیریت
        </div>
      </div>
    </div>
  );
}
