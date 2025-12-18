import React, { useState } from 'react';

interface DivorcioProps {
  onSuccess: (service: string) => void;
}

const DivorcioExpressOnLine: React.FC<DivorcioProps> = ({ onSuccess }) => {
  const [acuerdo, setAcuerdo] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(`Divorcio Express - ${acuerdo === 'si' ? 'Mutuo Acuerdo' : 'Contencioso'}`);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl animate-in slide-in-from-bottom-4">
      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">Divorcio On-line</h2>
      <p className="text-slate-500 text-sm mb-6">Trámite ágil desde Colombia o el exterior.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label className="block text-sm font-bold text-slate-700">¿Existe mutuo acuerdo entre las partes?</label>
          <div className="grid grid-cols-2 gap-4">
            <button type="button" onClick={() => setAcuerdo('si')} className={`p-4 rounded-xl border-2 transition-all ${acuerdo === 'si' ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-slate-100 text-slate-500'}`}>Sí, hay acuerdo</button>
            <button type="button" onClick={() => setAcuerdo('no')} className={`p-4 rounded-xl border-2 transition-all ${acuerdo === 'no' ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-slate-100 text-slate-500'}`}>No hay acuerdo</button>
          </div>
        </div>

        <div className="space-y-4">
          <input required type="text" placeholder="Nombre completo" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" />
          <input required type="text" placeholder="WhatsApp (Incluir código de país)" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" />
        </div>

        <button type="submit" className="w-full py-5 bg-slate-900 text-amber-500 font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-amber-900/10">
          Iniciar Diagnóstico de Trámite
        </button>
      </form>
    </div>
  );
};

export default DivorcioExpressOnLine;
