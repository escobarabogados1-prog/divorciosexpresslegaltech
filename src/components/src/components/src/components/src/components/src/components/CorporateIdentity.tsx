import React from 'react';

const CorporateIdentity: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-sm font-bold text-amber-600 uppercase tracking-[0.3em]">Nuestra Firma</h2>
        <p className="text-4xl font-serif text-slate-900">Expertos en Derecho Civil y Financiero</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { t: 'Misión', d: 'Brindar respaldo legal de alto impacto utilizando tecnología para democratizar el acceso a la justicia.' },
          { t: 'Visión', d: 'Ser el bufete líder en servicios legales digitales para la comunidad colombiana global.' },
          { t: 'Valores', d: 'Ética, transparencia y excelencia en la ejecución de estrategias jurídicas.' }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-slate-900">{item.t}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorporateIdentity;
