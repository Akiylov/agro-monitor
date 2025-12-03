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
} from "lucide-react";
import { cn } from "../ui/utils";

interface SidebarProps {
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
}

export function Sidebar({ currentScreen, setCurrentScreen }: SidebarProps) {
  const menuGroups = [
    {
      title: "Главная",
      items: [{ id: "dashboard", label: "Дашборд", icon: LayoutDashboard }],
    },
    {
      title: "Подсистемы",
      items: [
        {
          id: "fields",
          label: "Земельный кадастр и поля",
          icon: ClipboardList,
        },
        { id: "satellite", label: "Спутниковый мониторинг", icon: Satellite },
        { id: "weather", label: "Погода и агрометеоданные", icon: CloudSun },
        { id: "operations", label: "Агрооперации", icon: Tractor },
        { id: "harvest_forecast", label: "Прогноз урожайности", icon: Wheat },
        { id: "scouting", label: "Скаутинг", icon: ScanEye },
        { id: "analytics", label: "Аналитика и оповещения", icon: TrendingUp },
        { id: "reports", label: "Отчетность", icon: FileText },
        { id: "integrations", label: "Интеграция и API", icon: Server },
        { id: "economy", label: "Экономика и цены", icon: DollarSign },
      ],
    },
    // {
    //   title: 'Система',
    //   items: [
    //     { id: 'users', label: 'Пользователи', icon: Users },
    //     { id: 'references', label: 'Справочники', icon: BookOpen },
    //     { id: 'settings', label: 'Настройки', icon: Settings },
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
          AgroMonitor
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
