import React from "react";
import {
  MapPin,
  Plus,
  Filter,
  Camera,
  Navigation,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { useLanguage } from "../../contexts/LanguageContext";

const TASKS = [
  {
    id: 1,
    title: "Проверить всходы",
    field: "Поле 12-А",
    date: "Сегодня",
    status: "new",
    priority: "high",
    author: "Иванов И.",
  },
  {
    id: 2,
    title: "Мониторинг сорняков",
    field: "Поле 08-Б",
    date: "Вчера",
    status: "done",
    priority: "medium",
    author: "Петров П.",
  },
  {
    id: 3,
    title: "Оценка болезней",
    field: "Поле 03-В",
    date: "2 Июн",
    status: "in-progress",
    priority: "high",
    author: "Сидоров С.",
  },
];

export function Scouting() {
  const { t } = useLanguage();

  return (
    <div className="h-full flex gap-6">
      {/* Left Side: Task List */}
      <div className="w-1/3 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">
            {t("scouting.title")}
          </h1>
          <Button size="sm" className="bg-[#2ECC71] hover:bg-emerald-600">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 bg-white">
            Мои задачи
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 text-slate-500">
            Все задачи
          </Button>
        </div>

        <div className="space-y-3 overflow-y-auto flex-1 pr-2">
          {TASKS.map((task) => (
            <Card
              key={task.id}
              className={`cursor-pointer hover:shadow-md transition-all p-4 border-l-4 ${
                task.priority === "high"
                  ? "border-l-red-500"
                  : "border-l-blue-500"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-slate-800">{task.title}</h3>
                <Badge variant="outline" className="text-[10px]">
                  {task.date}
                </Badge>
              </div>
              <div className="text-sm text-slate-600 mb-3 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {task.field}
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-600">
                    {task.author.charAt(0)}
                  </div>
                </div>
                <Badge
                  className={`
                     ${
                       task.status === "new"
                         ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                         : task.status === "done"
                         ? "bg-green-100 text-green-700 hover:bg-green-100"
                         : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                     }
                   `}
                >
                  {task.status === "new"
                    ? "Новая"
                    : task.status === "done"
                    ? "Выполнено"
                    : "В работе"}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Right Side: Map View & Details */}
      <div className="flex-1 bg-slate-100 rounded-xl border border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1701390544948-f88cadb4aa73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjB2aWV3JTIwYWdyaWN1bHR1cmFsJTIwZmllbGRzJTIwbWFwfGVufDF8fHx8MTc2NDc0NzE1M3ww&ixlib=rb-4.1.0&q=80&w=1920"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Map Pins */}
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform">
            <AlertTriangle className="w-4 h-4 text-white" />
          </div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-2 py-1 rounded text-xs font-bold shadow whitespace-nowrap hidden group-hover:block">
            Сорняки (Высокий риск)
          </div>
        </div>

        <div className="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform">
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Detail Overlay */}
        <div className="absolute bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl p-4">
          <h3 className="font-bold text-slate-900 mb-1">Отчет #123</h3>
          <p className="text-xs text-slate-500 mb-3">
            Поле 12-А • 2 Июня 14:30
          </p>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="aspect-square bg-slate-100 rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=200"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-slate-100 rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=200"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-sm text-slate-700 mb-3">
            Обнаружены очаги осота полевого. Требуется локальная обработка
            гербицидом.
          </div>

          <div className="flex gap-2">
            <Button size="sm" className="flex-1">
              Принять меры
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              Закрыть
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
