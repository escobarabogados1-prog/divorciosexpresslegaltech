import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, ChevronRight, MessageCircle } from 'lucide-react';
import { AppView, ChatMessage } from '../types';
import { handleWhatsAppClick } from '../utils/contact';

interface LegalChatbotProps {
  onNavigate: (view: AppView) => void;
}

const LegalChatbot: React.FC<LegalChatbotProps> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: '¡Hola! Bienvenido a ELITH LEX GROUP. Soy su asistente senior de ventas jurídicas. Mi objetivo es conectarlo con la solución legal o financiera exacta que necesita hoy. ¿En cuál de estas áreas necesita asistencia experta?',
      timestamp: new Date(),
      options: ['Reducción de Crédito', 'Divorcio On-line', 'Blindaje Patrimonial', 'Registro de Marcas']
    }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOptionClick = (option: string) => {
    const userMsg: ChatMessage = { role: 'user', content: option, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      let response: ChatMessage;

      if (option === 'Reducción de Crédito') {
        response = {
          role: 'assistant',
          content: 'Excelente decisión. Mediante la Ley 546 ayudamos a reducir intereses y años de deuda. ¿Su saldo actual de deuda es superior a los 50 millones de pesos?',
          timestamp: new Date(),
          options: ['Sí, es superior', 'No, es inferior']
        };
      } else if (option === 'Divorcio On-line') {
        response = {
          role: 'assistant',
          content: 'Entiendo. Somos líderes en procesos digitales. Te llevaré al módulo de diagnóstico para clasificar si su caso es Mutuo Acuerdo o Contencioso.',
          timestamp: new Date(),
          action: AppView.DIVORCE_ONLINE
        };
      } else if (option === 'Blindaje Patrimonial') {
        response = {
          role: 'assistant',
          content: 'La protección de sus bienes es prioridad. El Fideicomiso Civil es la herramienta inembargable por excelencia. ¿Desea realizar el diagnóstico técnico?',
          timestamp: new Date(),
          action: AppView.ASSET_PROTECTION
        };
      } else if (option === 'Registro de Marcas') {
        response = {
          role: 'assistant',
          content: 'Proteja su identidad ante la SIC. ¿Ya tiene un nombre o logo definido para el estudio de antecedentes?',
          timestamp: new Date(),
          action: AppView.INTELLECTUAL_PROPERTY
        };
      } else if (option === 'Sí, es superior' || option === 'No, es inferior') {
        response = {
          role: 'assistant',
          content: 'Perfecto. Vamos a realizar su estudio de viabilidad gratuito ahora mismo.',
          timestamp: new Date(),
          action: AppView.HOUSING_ANALYSIS
        };
      } else {
        response = {
          role: 'assistant',
          content: '¿Desea hablar directamente con un asesor por WhatsApp para evaluar su situación?',
          timestamp: new Date(),
          options: ['Hablar con Asesor', 'Volver al Menú']
        };
      }

      setMessages(prev => [...prev, response]);
      
      if (response.action) {
        setTimeout(() => onNavigate(response.action!), 2000);
      }
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)] flex flex-col bg-slate-950 rounded-[2rem] border border-amber-600/20 overflow-hidden shadow-2xl relative">
      {/* Header del Chat */}
      <div className="bg-slate-900/80 backdrop-blur-md p-6 border-b border-white/5 flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
          <Bot size={28} className="text-slate-950" />
        </div>
        <div>
          <h3 className="text-white font-serif font-bold text-lg">Asistente ELITH LEX</h3>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">En línea - Consultoría Legal</p>
          </div>
        </div>
      </div>

      {/* Lista de Mensajes */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`p-4 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-amber-600 text-slate-950 font-bold' : 'bg-slate-900 text-slate-300 border border-white/10'}`}>
                {msg.content}
                {msg.options && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(opt)}
                        className="px-4 py-2 bg-slate-800 border border-amber-600/40 text-amber-500 text-xs font-bold rounded-lg hover:bg-amber-600 hover:text-slate-950 transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
                {msg.action && (
                  <p className="mt-3 text-amber-500 text-[10px] font-bold animate-pulse italic">
                    <ChevronRight size={12} className="inline" /> Redirigiendo al sistema especializado...
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-6 bg-slate-900/40 border-t border-white/5 backdrop-blur-sm flex gap-3">
        <div className="flex-1 bg-slate-950 border border-white/10 rounded-xl p-3 text-slate-500 text-xs italic">
          Seleccione una opción para continuar...
        </div>
        <button 
          onClick={() => handleWhatsAppClick("Asistencia General")}
          className="p-3 bg-green-500/10 text-green-500 rounded-xl border border-green-500/20 hover:bg-green-500 hover:text-white transition-all"
        >
          <MessageCircle size={20} />
        </button>
      </div>
    </div>
  );
};

export default LegalChatbot;
