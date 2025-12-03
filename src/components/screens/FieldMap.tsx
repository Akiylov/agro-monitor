import React, { useState } from 'react';
import { Plus, Minus, Ruler, Eye, Layers, FolderOpen, Map as MapIcon, MoreVertical, ChevronRight, MousePointer2, Move, Maximize } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { cn } from '../ui/utils';
import { MapLayersSidebar } from './MapLayersSidebar';
import { Card } from '../ui/card';

// Mock Fields Data matching the screenshots roughly in position
const FIELDS = [
  { 
    id: 1, 
    name: 'Yangidala FXXU', 
    crop: 'Подсолнечник', 
    area: 145.5, 
    status: 'ok', 
    color: 'fill-yellow-400/10 stroke-yellow-500', 
    path: 'M450,150 L600,180 L580,350 L420,320 Z',
    details: {
      id: '812',
      district: 'Янгидала',
      action: 'Вегетация'
    }
  },
  { 
    id: 2, 
    name: 'Toshkent FXXU', 
    crop: 'Пшеница', 
    area: 89.2, 
    status: 'warning', 
    color: 'fill-orange-400/10 stroke-orange-500', 
    path: 'M200,100 L350,120 L320,250 L180,220 Z',
    details: {
      id: '813',
      district: 'Тошкент',
      action: 'Уборка'
    }
  },
];

export function FieldMap() {
  const [selectedFieldId, setSelectedFieldId] = useState<number | null>(null);
  const [contextMenu, setContextMenu] = useState<{x: number, y: number, fieldId: number} | null>(null);
  
  const selectedField = FIELDS.find(f => f.id === selectedFieldId);

  const handleFieldClick = (e: React.MouseEvent, fieldId: number) => {
    e.stopPropagation();
    setSelectedFieldId(fieldId);
    // Mock context menu position
    setContextMenu({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      fieldId
    });
  };

  const handleMapClick = () => {
    setContextMenu(null);
    setSelectedFieldId(null);
  };

  return (
    <div className="flex w-full h-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
      {/* Left Sidebar - File Layers */}
      <MapLayersSidebar />

      {/* Main Map Area */}
      <div className="flex-1 relative bg-slate-200 overflow-hidden group" onClick={handleMapClick}>
        
        {/* Map Background Image using the provided asset */}
        <div className="absolute inset-0 z-0">
           <img 
             src="figma:asset/7e57e003313f01beffce1eca7b738a6cf7fa93c9.png" 
             alt="Map View" 
             className="w-full h-full object-cover"
           />
           
           {/* Field Polygons Overlay */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600" preserveAspectRatio="none">
             {FIELDS.map((field) => (
               <g key={field.id} onClick={(e) => handleFieldClick(e, field.id)} className="cursor-pointer pointer-events-auto">
                 <path 
                   d={field.path} 
                   className={cn(
                     "stroke-[2px] transition-all duration-300 hover:fill-opacity-30 hover:stroke-[3px]", 
                     field.color,
                     selectedFieldId === field.id ? "fill-opacity-40 stroke-white stroke-[3px] drop-shadow-lg" : ""
                   )}
                 />
               </g>
             ))}
           </svg>
        </div>

        {/* Map Controls Toolbar (Left Side on Map) - Matching Screenshot Style */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
           {/* Top Group */}
           <div className="bg-white rounded shadow-md border border-slate-200 flex flex-col w-9 overflow-hidden">
              <MapButton icon={Layers} title="Слои" />
              <div className="h-[1px] bg-slate-100 mx-1" />
              <MapButton icon={Plus} title="Увеличить" />
              <MapButton icon={Minus} title="Уменьшить" />
              <div className="h-[1px] bg-slate-100 mx-1" />
              <MapButton icon={Maximize} title="Во весь экран" />
           </div>
           
           {/* Middle Group */}
           <div className="bg-white rounded shadow-md border border-slate-200 flex flex-col w-9 overflow-hidden">
              <MapButton icon={Ruler} title="Измерение" label="M²" />
              <MapButton icon={Move} title="Перемещение" />
              <MapButton icon={MousePointer2} title="Выбор" active />
           </div>

           {/* Bottom Group */}
           <div className="bg-white rounded shadow-md border border-slate-200 flex flex-col w-9 overflow-hidden">
              <MapButton icon={Eye} title="Видимость" />
              <MapButton icon={FolderOpen} title="Открыть" />
           </div>
        </div>

        {/* Context Menu (Popup) - Matching 3rd screenshot */}
        {contextMenu && selectedField && (
          <div 
            className="absolute bg-white/95 backdrop-blur shadow-xl rounded border border-slate-200 z-30 w-48 animate-in fade-in zoom-in-95 duration-100 origin-top-left"
            style={{ left: contextMenu.x + 20, top: contextMenu.y - 20 }}
            onClick={(e) => e.stopPropagation()}
          >
             <div className="p-2 border-b border-slate-100 bg-slate-50/50 rounded-t">
                <div className="text-xs font-bold text-slate-700">{selectedField.name}</div>
             </div>
             <div className="p-1">
                <ContextMenuItem label="ID" value={selectedField.details.id} />
                <ContextMenuItem label="Культура" value={selectedField.crop} />
                <ContextMenuItem label="Площадь" value={`${selectedField.area} га`} />
                <ContextMenuItem label="Район" value={selectedField.details.district} />
             </div>
          </div>
        )}

        {/* Top Info Bar */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-white/90 backdrop-blur-sm border-b border-slate-200 flex items-center justify-between px-4 z-10">
           <span className="font-bold text-slate-700">Карта</span>
           <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="hidden sm:inline">Масштаб: 1:2000</span>
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <span>Онлайн</span>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}

function MapButton({ icon: Icon, label, className, onClick, title, active }: any) {
  return (
    <button 
      className={cn(
        "h-9 w-full flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-[#2ECC71] transition-colors relative", 
        active && "text-[#2ECC71] bg-slate-50",
        className
      )}
      onClick={onClick}
      title={title}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {label && <span className="text-[10px] font-bold absolute bottom-0.5 right-0.5">{label}</span>}
      {active && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#2ECC71]" />}
    </button>
  );
}

function ContextMenuItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center px-2 py-1.5 hover:bg-slate-50 rounded text-xs cursor-pointer">
       <span className="text-slate-500">{label}</span>
       <span className="font-medium text-slate-800">{value}</span>
    </div>
  );
}
