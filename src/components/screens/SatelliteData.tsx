import React, { useState } from 'react';
import { Search, Eye, EyeOff, Plus, Upload, MoreVertical, Layers, ZoomIn, ZoomOut, Maximize, Map as MapIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import mapPreview from 'figma:asset/7e57e003313f01beffce1eca7b738a6cf7fa93c9.png';

const MOCK_FILES = [
  { id: 1, name: 'Р.Хайдаров ФХХУ.tif', date: '24.08.2023', active: true, notes: 'clone' },
  { id: 2, name: 'Тошкент ФХХУ Худуди.tif', date: '09.08.2023', active: false, notes: 'clone' },
  { id: 3, name: 'Янгидала ФХХУ Худуди.tif', date: '09.08.2023', active: true, notes: 'clone', selected: true },
  { id: 4, name: 'Turkiston_FHHU_hududi.tif', date: '09.08.2023', active: false, notes: 'clone' },
  { id: 5, name: 'Istiqlol_hududi_FHHU.tif', date: '09.08.2023', active: false, notes: 'clone' },
  { id: 6, name: 'Mirzachul_FHHU_hududi.tif', date: '09.08.2023', active: true, notes: 'clone', status: 'obr' },
  { id: 7, name: 'Mustakillik_kelajagi_FHHU.tif', date: '09.08.2023', active: false, notes: 'clone' },
  { id: 8, name: 'Абай ФХХУ Худуди.tif', date: '09.08.2023', active: true, notes: 'clone' },
];

export function SatelliteData() {
  const [searchTerm, setSearchTerm] = useState('');
  const [files, setFiles] = useState(MOCK_FILES);

  const toggleVisibility = (id: number) => {
    setFiles(files.map(f => f.id === id ? { ...f, active: !f.active } : f));
  };

  return (
    <div className="flex h-full -m-6">
      {/* Left Panel - List of Images */}
      <div className="w-96 bg-white border-r border-slate-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4">БПЛА</h2>
          <div className="flex space-x-4 text-sm font-medium text-slate-500 border-b border-slate-200">
            <button className="pb-2 border-b-2 border-blue-600 text-blue-600 px-1">Снимки</button>
            <button className="pb-2 hover:text-slate-800 px-1">Импорт снимков</button>
          </div>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-slate-100 bg-slate-50/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input 
              className="pl-9 bg-white" 
              placeholder="Поиск по названию" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
            {files.map((file) => (
              <div 
                key={file.id}
                className={`flex items-start p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer ${file.selected ? 'bg-blue-50 hover:bg-blue-50 border-l-4 border-l-blue-500' : 'border-l-4 border-l-transparent'}`}
              >
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-medium truncate ${file.selected ? 'text-blue-700' : 'text-slate-700'}`}>
                    {file.name}
                  </h3>
                  <div className="mt-1 text-xs text-slate-500">
                    <p className="truncate">Примечания</p>
                    <p className="text-slate-400">{file.notes}</p>
                    <div className="flex items-center gap-2 mt-1">
                       <span className="text-slate-400">{file.date}</span>
                       {file.status === 'obr' && (
                         <span className="bg-green-100 text-green-600 px-1 rounded text-[10px]">obr</span>
                       )}
                    </div>
                  </div>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleVisibility(file.id);
                  }}
                  className={`p-2 rounded-full hover:bg-slate-200 ${file.active ? 'text-[#2ECC71]' : 'text-slate-300'}`}
                >
                  {file.active ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Main Map Area */}
      <div className="flex-1 relative bg-slate-100 overflow-hidden flex flex-col">
        {/* Map Toolbar */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-slate-200 z-10 flex items-center justify-between px-4">
          <div className="font-medium text-slate-700">Карта</div>
          <div className="flex items-center gap-2">
             <Button variant="ghost" size="sm"><MoreVertical className="w-4 h-4" /></Button>
          </div>
        </div>

        {/* Map Controls Overlay */}
        <div className="absolute top-16 left-4 z-10 flex flex-col bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
           <button className="p-2 hover:bg-slate-50 border-b border-slate-100 text-slate-600" title="Layers">
             <Layers className="w-5 h-5" />
           </button>
           <button className="p-2 hover:bg-slate-50 border-b border-slate-100 text-slate-600" title="Zoom In">
             <Plus className="w-5 h-5" />
           </button>
           <button className="p-2 hover:bg-slate-50 border-b border-slate-100 text-slate-600" title="Zoom Out">
             <ZoomOut className="w-5 h-5" />
           </button>
           <button className="p-2 hover:bg-slate-50 border-b border-slate-100 text-slate-600" title="Measure">
             <MapIcon className="w-5 h-5" />
           </button>
           <button className="p-2 hover:bg-slate-50 text-slate-600" title="Fullscreen">
             <Maximize className="w-5 h-5" />
           </button>
        </div>

        {/* Map Content */}
        <div className="flex-1 relative bg-slate-200">
           {/* Using the imported image as a simulated map background for authenticity */}
           <img 
             src={mapPreview} 
             alt="Map View" 
             className="w-full h-full object-cover"
           />
           
           {/* Simulation of the map interface overlay seen in the photo */}
           <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3">
              {/* Grid lines to simulate the monitor wall if desired, or just leave clean */}
              <div className="border-r border-slate-400/20 border-b h-full w-full"></div>
              <div className="border-r border-slate-400/20 border-b h-full w-full"></div>
              <div className="border-b border-slate-400/20 h-full w-full"></div>
              <div className="border-r border-slate-400/20 border-b h-full w-full"></div>
              <div className="border-r border-slate-400/20 border-b h-full w-full"></div>
              <div className="border-b border-slate-400/20 h-full w-full"></div>
              <div className="border-r border-slate-400/20 h-full w-full"></div>
              <div className="border-r border-slate-400/20 h-full w-full"></div>
              <div className="h-full w-full"></div>
           </div>
        </div>
      </div>
    </div>
  );
}
