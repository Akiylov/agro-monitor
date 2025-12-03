import React from "react";
import {
  Plus,
  Filter,
  Tractor,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useLanguage } from "../../contexts/LanguageContext";

const OPS_DATA = [
  {
    id: 1,
    type: "Посев",
    field: "Поле 08-Б",
    crop: "Кукуруза",
    date: "20 Апр 2024",
    status: "done",
    tech: "John Deere 8335R + DB44",
    area: "89.2 га",
  },
  {
    id: 2,
    type: "Внесение удобрений",
    field: "Поле 12-А",
    crop: "Пшеница",
    date: "25 Апр 2024",
    status: "done",
    tech: "Amazone ZG-TS",
    area: "145.5 га",
  },
  {
    id: 3,
    type: "Опрыскивание (Гербицид)",
    field: "Поле 03-В",
    crop: "Соя",
    date: "2 Июн 2024",
    status: "in-progress",
    tech: "Horsch Leeb 4 LT",
    area: "65/120.8 га",
  },
  {
    id: 4,
    type: "Опрыскивание (Фунгицид)",
    field: "Поле 12-А",
    crop: "Пшеница",
    date: "5 Июн 2024",
    status: "planned",
    tech: "-",
    area: "145.5 га",
  },
  {
    id: 5,
    type: "Междурядная культивация",
    field: "Поле 15-С",
    crop: "Подсолнечник",
    date: "10 Июн 2024",
    status: "planned",
    tech: "-",
    area: "210.0 га",
  },
];

export function AgroOperations() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {t("operations.title")}
          </h1>
          <p className="text-slate-500">{t("operations.subtitle")}</p>
        </div>
        <Button className="bg-[#2ECC71] hover:bg-emerald-600 text-white">
          <Plus className="w-4 h-4 mr-2" /> Создать операцию
        </Button>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex-1 max-w-xs">
          <label className="text-xs text-slate-500 mb-1 block">Сезон</label>
          <select className="w-full text-sm border-slate-200 rounded-md bg-slate-50 p-2">
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
        <div className="flex-1 max-w-xs">
          <label className="text-xs text-slate-500 mb-1 block">
            Тип операции
          </label>
          <select className="w-full text-sm border-slate-200 rounded-md bg-slate-50 p-2">
            <option>Все типы</option>
            <option>Посев</option>
            <option>Уборка</option>
            <option>Защита растений</option>
          </select>
        </div>
        <div className="flex-1 max-w-xs">
          <label className="text-xs text-slate-500 mb-1 block">Статус</label>
          <select className="w-full text-sm border-slate-200 rounded-md bg-slate-50 p-2">
            <option>Все статусы</option>
            <option>В работе</option>
            <option>Запланировано</option>
            <option>Завершено</option>
          </select>
        </div>
        <div className="flex-1 flex items-end justify-end h-full pt-5">
          <Button variant="ghost" size="sm" className="text-slate-500">
            <Filter className="w-4 h-4 mr-2" /> Сбросить
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {OPS_DATA.map((op) => (
          <Card
            key={op.id}
            className="hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="p-5 flex items-center gap-6">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  op.status === "done"
                    ? "bg-green-100 text-green-600"
                    : op.status === "in-progress"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <Tractor className="w-5 h-5" />
              </div>

              <div className="flex-1 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-4">
                  <div className="font-semibold text-slate-900 text-lg">
                    {op.type}
                  </div>
                  <div className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                    <span className="font-medium text-slate-700">
                      {op.field}
                    </span>{" "}
                    • {op.crop}
                  </div>
                </div>

                <div className="col-span-3">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Техника
                  </div>
                  <div className="text-sm font-medium text-slate-700 truncate">
                    {op.tech}
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Дата
                  </div>
                  <div className="text-sm text-slate-700 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" /> {op.date}
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Площадь
                  </div>
                  <div className="text-sm font-medium text-slate-700">
                    {op.area}
                  </div>
                </div>

                <div className="col-span-1 text-right">
                  {op.status === "done" && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                      <CheckCircle className="w-3 h-3 mr-1" /> Вып.
                    </Badge>
                  )}
                  {op.status === "in-progress" && (
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">
                      <Clock className="w-3 h-3 mr-1" /> 54%
                    </Badge>
                  )}
                  {op.status === "planned" && (
                    <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-100 border-none">
                      План
                    </Badge>
                  )}
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors" />
            </div>
            {op.status === "in-progress" && (
              <div className="h-1 w-full bg-slate-100">
                <div className="h-full bg-blue-500 w-[54%]"></div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
