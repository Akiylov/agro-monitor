import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import {
  Bell,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Thermometer,
  Droplets,
  Wind,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useLanguage } from "../../contexts/LanguageContext";

const ALERT_HISTORY = [
  {
    id: 1,
    type: "critical",
    title: "Высокая вероятность вредителей",
    desc: "Поле 12-А: Обнаружены признаки совки. Рекомендуется осмотр.",
    date: "Сегодня, 10:23",
    category: "Вредители",
  },
  {
    id: 2,
    type: "warning",
    title: "Снижение влажности почвы",
    desc: "Поле 08-Б: Влажность упала ниже 30% на глубине 20см.",
    date: "Вчера, 16:45",
    category: "Почва",
  },
  {
    id: 3,
    type: "info",
    title: "Прогноз осадков",
    desc: "Ожидаются дожди (15мм) в ближайшие 3 дня.",
    date: "2 Июн, 09:00",
    category: "Погода",
  },
  {
    id: 4,
    type: "critical",
    title: "Отклонение NDVI",
    desc: "Поле 03-В: Резкое падение индекса вегетации на южном участке.",
    date: "1 Июн, 14:20",
    category: "Вегетация",
  },
];

const FORECAST_ACCURACY = [
  { date: "Янв", actual: 85, target: 90 },
  { date: "Фев", actual: 88, target: 90 },
  { date: "Мар", actual: 92, target: 90 },
  { date: "Апр", actual: 94, target: 90 },
  { date: "Май", actual: 91, target: 90 },
  { date: "Июн", actual: 95, target: 90 },
];

export function GeneralAnalytics() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {t("analytics.title")}
          </h1>
          <p className="text-slate-500">
            Мониторинг рисков и системные уведомления
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Настройка правил</Button>
          <Button className="bg-[#2ECC71] hover:bg-emerald-600">
            Скачать отчет
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-red-500 shadow-sm">
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Критические
                </p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">3</h3>
              </div>
              <div className="p-2 bg-red-50 rounded-lg">
                <Bell className="w-5 h-5 text-red-500" />
              </div>
            </div>
            <p className="text-xs text-red-600 mt-2 font-medium">
              Требуют немедленной реакции
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500 shadow-sm">
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Предупреждения
                </p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">12</h3>
              </div>
              <div className="p-2 bg-yellow-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">Потенциальные риски</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 shadow-sm">
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Информационные
                </p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">28</h3>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">Системные события</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500 shadow-sm">
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Точность прогнозов
                </p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">94%</h3>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
            </div>
            <p className="text-xs text-green-600 mt-2 font-medium">
              Выше целевого (90%)
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Активные оповещения</CardTitle>
                <CardDescription>
                  Последние события, требующие внимания
                </CardDescription>
              </div>
              <Tabs defaultValue="all" className="w-auto">
                <TabsList>
                  <TabsTrigger value="all">Все</TabsTrigger>
                  <TabsTrigger value="critical">Критические</TabsTrigger>
                  <TabsTrigger value="weather">Погода</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ALERT_HISTORY.map((alert) => (
                <div
                  key={alert.id}
                  className="flex gap-4 p-4 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div
                    className={`flex-shrink-0 mt-1 w-2 h-2 rounded-full ${
                      alert.type === "critical"
                        ? "bg-red-500"
                        : alert.type === "warning"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-semibold text-slate-900">
                        {alert.title}
                      </h4>
                      <span className="text-xs text-slate-400">
                        {alert.date}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{alert.desc}</p>
                    <Badge
                      variant="secondary"
                      className="text-xs font-normal text-slate-500 bg-white border border-slate-200"
                    >
                      {alert.category}
                    </Badge>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-slate-500 text-sm">
                Показать все оповещения
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Risk Map / Analytics Widget */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Карта рисков</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded border border-red-100">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">
                        Засуха
                      </div>
                      <div className="text-xs text-slate-500">Высокий риск</div>
                    </div>
                  </div>
                  <span className="font-bold text-red-600">85%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded border border-yellow-100">
                  <div className="flex items-center gap-3">
                    <Wind className="w-5 h-5 text-yellow-600" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">
                        Ветровая эрозия
                      </div>
                      <div className="text-xs text-slate-500">Средний риск</div>
                    </div>
                  </div>
                  <span className="font-bold text-yellow-600">45%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded border border-green-100">
                  <div className="flex items-center gap-3">
                    <Thermometer className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">
                        Заморозки
                      </div>
                      <div className="text-xs text-slate-500">Низкий риск</div>
                    </div>
                  </div>
                  <span className="font-bold text-green-600">12%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Точность ML-моделей</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={FORECAST_ACCURACY}>
                    <defs>
                      <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#2ECC71"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#2ECC71"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f1f5f9"
                    />
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#94a3b8" }}
                    />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="actual"
                      stroke="#2ECC71"
                      fillOpacity={1}
                      fill="url(#colorAcc)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
