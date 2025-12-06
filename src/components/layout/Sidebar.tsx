import React from "react";
import {
  Map,
  Satellite,
  CloudSun,
  Leaf,
  Tractor,
  ClipboardList,
  ScanEye,
  TrendingUp,
  DollarSign,
  FileText,
  Users,
  BookOpen,
  Settings,
  LayoutDashboard,
  Wheat,
  Server,
  ExternalLink,
} from "lucide-react";
import { cn } from "../ui/utils";
import { useLanguage } from "../../contexts/LanguageContext";

interface SidebarProps {
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
}

export function Sidebar({ currentScreen, setCurrentScreen }: SidebarProps) {
  const { t } = useLanguage();

  const menuGroups = [
    {
      title: t("sidebar.main"),
      items: [
        {
          id: "dashboard",
          label: t("sidebar.dashboard"),
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: t("sidebar.subsystems"),
      items: [
        {
          id: "fields",
          label: t("sidebar.land_cadastre"),
          icon: ClipboardList,
        },
        {
          id: "satellite",
          label: t("sidebar.satellite_monitoring"),
          icon: Satellite,
        },
        {
          id: "weather",
          label: t("sidebar.weather_agrometeoro"),
          icon: CloudSun,
        },
        {
          id: "operations",
          label: t("sidebar.agro_operations"),
          icon: Tractor,
        },
        {
          id: "harvest_forecast",
          label: t("sidebar.harvest_forecast"),
          icon: Wheat,
        },
        { id: "scouting", label: t("sidebar.scouting"), icon: ScanEye },
        {
          id: "analytics",
          label: t("sidebar.analytics_alerts"),
          icon: TrendingUp,
        },
        { id: "reports", label: t("sidebar.reporting"), icon: FileText },
        {
          id: "integrations",
          label: t("sidebar.integration_api"),
          icon: Server,
        },
        { id: "economy", label: t("sidebar.economy_prices"), icon: DollarSign },
      ],
    },
    // {
    //   title: t('sidebar.system'),
    //   items: [
    //     { id: 'users', label: t('sidebar.users'), icon: Users },
    //     { id: 'references', label: t('sidebar.references'), icon: BookOpen },
    //     { id: 'settings', label: t('sidebar.settings'), icon: Settings },
    //   ]
    // }
  ];

  return (
    <aside className="w-64 h-full bg-[#1e293b] text-white flex flex-col shadow-xl z-20 flex-shrink-0">
      <div className="p-6 flex items-center gap-3 border-b border-slate-700/50">
        <div className="w-8 h-8 rounded-lg bg-[#2ECC71] flex items-center justify-center">
          <Leaf className="text-white w-5 h-5" />
        </div>
        <span className="font-bold text-lg tracking-tight text-slate-100">
          {t("sidebar.app_name")}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-8 scrollbar-thin scrollbar-thumb-slate-700">
        {menuGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {group.title}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = currentScreen === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentScreen(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group relative",
                      isActive
                        ? "bg-[#2ECC71] text-white shadow-md shadow-emerald-900/20"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    )}
                  >
                    <Icon
                      size={18}
                      className={cn(
                        "opacity-90",
                        isActive
                          ? "text-white"
                          : "text-slate-400 group-hover:text-white"
                      )}
                    />
                    <span className="flex-1 text-left">{item.label}</span>
                    {/* {item.badge && (
                      <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )} */}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="p-4 border-t border-slate-700/50 bg-[#1e293b]">
        <a
          href="https://front-kashkadarya-gov.tenzorsoft.uz/control-panel"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group text-slate-300 hover:bg-slate-800 hover:text-white"
        >
          <ExternalLink
            size={18}
            className="opacity-90 text-slate-400 group-hover:text-white"
          />
          <span className="flex-1 text-left">{t("sidebar.digital_government")}</span>
        </a>
      </div> */}

      <div className="p-4 border-t border-slate-700/50 bg-[#1e293b]">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
          }}
          href="https://front-bukhara-gov.tenzorsoft.uz/control-panel"
          target="_blank"
          rel="noopener noreferrer"
          className="
      w-full flex items-center justify-center gap-2 
      px-4 py-3 rounded-lg 
      bg-blue-500 hover:bg-blue-600 
      text-white text-sm font-medium 
      transition-all duration-200 
      shadow-lg shadow-blue-500/20
    "
        >
          <ExternalLink size={18} className="text-white/90" />

          {/* Matn */}
          <span>{t("sidebar.digital_government")}</span>

          {/* Ikonka */}
        </a>
      </div>

      {/* <div className="p-4 border-t border-slate-700/50 bg-[#1e293b]">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center overflow-hidden border-2 border-slate-500">
            <span className="text-xs font-bold">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">John Doe</p>
            <p className="text-xs text-slate-400 truncate">Agronomist</p>
          </div>
        </div>
      </div> */}
    </aside>
  );
}
