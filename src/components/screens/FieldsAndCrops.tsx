import React from "react";
import { Plus, MoreHorizontal, FileSpreadsheet, Filter } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useLanguage } from "../../contexts/LanguageContext";

const FIELDS_DATA = [
  {
    id: "F-001",
    name: "Поле 12-А",
    area: 145.5,
    crop: "Пшеница озимая",
    variety: "Ермак",
    sowingDate: "2023-10-15",
    harvestDate: "-",
    status: "active",
  },
  {
    id: "F-002",
    name: "Поле 08-Б",
    area: 89.2,
    crop: "Кукуруза",
    variety: "Пионер",
    sowingDate: "2024-04-20",
    harvestDate: "-",
    status: "active",
  },
  {
    id: "F-003",
    name: "Поле 15-С",
    area: 210.0,
    crop: "Подсолнечник",
    variety: "НК Неома",
    sowingDate: "2024-05-05",
    harvestDate: "-",
    status: "warning",
  },
  {
    id: "F-004",
    name: "Поле 03-В",
    area: 120.8,
    crop: "Соя",
    variety: "Аннушка",
    sowingDate: "2024-05-12",
    harvestDate: "-",
    status: "active",
  },
  {
    id: "F-005",
    name: "Поле 22-Ю",
    area: 55.4,
    crop: "Пар",
    variety: "-",
    sowingDate: "-",
    harvestDate: "-",
    status: "rest",
  },
];

export function FieldsAndCrops() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {t("fields.title")}
          </h1>
          <p className="text-slate-500">{t("fields.subtitle")}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <FileSpreadsheet className="w-4 h-4 mr-2" />{" "}
            {t("fields.import_kml_shp")}
          </Button>
          <Button className="bg-[#2ECC71] hover:bg-emerald-600 text-white">
            <Plus className="w-4 h-4 mr-2" /> {t("fields.add_field")}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              {t("dashboard.total_area")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">
              620.9{" "}
              <span className="text-sm font-normal text-slate-500">
                {t("dashboard.ha")}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              {t("fields.active_fields")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">
              4{" "}
              <span className="text-sm font-normal text-slate-500">
                {t("fields.of")} 5
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Основная культура
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">
              Подсолнечник{" "}
              <span className="text-sm font-normal text-slate-500">(34%)</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <div className="p-4 border-b border-slate-100 flex gap-4 items-center">
          <div className="relative max-w-sm w-full">
            <Input
              placeholder="Поиск по названию или культуре..."
              className="pl-8"
            />
            <Filter className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
          <div className="flex-1"></div>
          <Button variant="outline" size="sm">
            Сезон 2024
          </Button>
          <Button variant="outline" size="sm">
            Экспорт таблицы
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Название поля</TableHead>
              <TableHead>Площадь (га)</TableHead>
              <TableHead>Культура</TableHead>
              <TableHead>Сорт / Гибрид</TableHead>
              <TableHead>Дата посева</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {FIELDS_DATA.map((field) => (
              <TableRow
                key={field.id}
                className="group cursor-pointer hover:bg-slate-50"
              >
                <TableCell className="font-mono text-xs text-slate-500">
                  {field.id}
                </TableCell>
                <TableCell className="font-medium text-slate-900">
                  {field.name}
                </TableCell>
                <TableCell>{field.area}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        field.crop === "Пшеница озимая"
                          ? "bg-yellow-400"
                          : field.crop === "Кукуруза"
                          ? "bg-orange-400"
                          : field.crop === "Соя"
                          ? "bg-green-400"
                          : field.crop === "Подсолнечник"
                          ? "bg-yellow-600"
                          : "bg-slate-300"
                      }`}
                    ></span>
                    {field.crop}
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">
                  {field.variety}
                </TableCell>
                <TableCell className="text-slate-600">
                  {field.sowingDate}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`${
                      field.status === "active"
                        ? "bg-green-100 text-green-700"
                        : field.status === "warning"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {field.status === "active"
                      ? "Растет"
                      : field.status === "warning"
                      ? "Внимание"
                      : "Пары"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Редактировать</DropdownMenuItem>
                      <DropdownMenuItem>История севооборота</DropdownMenuItem>
                      <DropdownMenuItem>Технологическая карта</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Архивировать
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
