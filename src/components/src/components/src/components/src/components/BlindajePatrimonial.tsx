import React from 'react';

const BlindajePatrimonial: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-slate-900 text-white p-10 rounded-[3rem] border border-amber-600/20 shadow-2xl">
      <div className="space-y-6">
        <div className="inline-block p-3 bg-amber-600 rounded-2xl text-slate-950 font-bold text-xs uppercase tracking-widest">Protección Inembargable</div>
        <h2 className="text-3xl font-serif font-bold italic">Fideicomiso Civil</h2>
        <p className="text-slate-400 leading-relaxed">Proteja su patrimonio familiar contra embargos, riesgos comerciales o procesos judiciales futuros. Esta figura legal le permite mantener el control de sus bienes mientras los hace legalmente invisibles ante acreedores.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-amber-500 font-bold mb-1">Inembargable</h4>
            <p className="text-xs text-slate-400">Protección total de activos fijos.</p>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-amber-500 font-bold mb-1">Privacidad</h4>
            <p className="text-xs text-slate-400">Trámite notarial seguro y privado.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlindajePatrimonial;
