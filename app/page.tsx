'use client';

import React from 'react';

export default function Home() {
  // Datos de ejemplo para los 10 vehículos (Modificados con el campo 'puertas' en lugar de ubicación)
  const vehiculos = [
    { id: 1, modelo: "PHelton", precio: "Q 1,850,000", motor: "4.0L Flat-6", km: "2,500 km", transmision: "PDK", puertas: "2 Puertas", imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800" },
    { id: 2, modelo: "Yahel", precio: "Q 985,000", motor: "3.0L Bi-Turbo", km: "12,000 km", transmision: "M-Steptronic", puertas: "2 Puertas", imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800" },
    { id: 3, modelo: "Jimenez", precio: "Q 1,200,000", motor: "4.0L V8", km: "8,200 km", transmision: "Tiptronic", puertas: "5 Puertas", imagen: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=800" },
    { id: 4, modelo: "Esquivel", precio: "Q 2,100,000", motor: "4.0L V8 Biturbo", km: "5,000 km", transmision: "9G-Tronic", puertas: "5 Puertas", imagen: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?q=80&w=800" },
    { id: 5, modelo: "Toyota Supra MK5", precio: "Q 525,000", motor: "3.0L I6", km: "15,000 km", transmision: "Auto", puertas: "2 Puertas", imagen: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=800" },
    { id: 6, modelo: "Ford Mustang Dark Horse", precio: "Q 740,000", motor: "5.0L V8 Coyote", km: "500 km", transmision: "Manual", puertas: "2 Puertas", imagen: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=800" },
    { id: 7, modelo: "Nissan GT-R Nismo", precio: "Q 1,950,000", motor: "3.8L V6 Twin-Turbo", km: "3,100 km", transmision: "GR6 Dual-Clutch", puertas: "2 Puertas", imagen: "https://images.unsplash.com/photo-1614162692292-7ac56d7fd701?q=80&w=800" },
    { id: 8, modelo: "Chevrolet Corvette Z06", precio: "Q 1,450,000", motor: "5.5L V8 NA", km: "1,200 km", transmision: "DCT", puertas: "2 Puertas", imagen: "https://images.unsplash.com/photo-1594247565868-80e5572ec11f?q=80&w=800" },
    { id: 9, modelo: "Lamborghini Huracán Evo", precio: "Q 2,800,000", motor: "5.2L V10", km: "4,500 km", transmision: "LDF", puertas: "2 Puertas", imagen: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800" },
    { id: 10, modelo: "Ferrari F8 Tributo", precio: "Q 3,200,000", motor: "3.9L V8 Turbo", km: "2,100 km", transmision: "7-Speed F1", puertas: "2 Puertas", imagen: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-500 selection:text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-900 bg-[#0a0a0a]/80 backdrop-blur-md px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-tighter uppercase italic">
          Roadking<span className="text-red-600">GT</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
          <a href="#hero" className="hover:text-white transition-colors">Inicio</a>
          <a href="#inventario" className="hover:text-white transition-colors">Inventario</a>
          <a href="#cotizar" className="hover:text-white transition-colors">Vender</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>
        <a href="https://wa.me/50255550000" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-5 py-2 text-[10px] font-black uppercase tracking-tighter rounded-sm hover:bg-red-600 hover:text-white transition-all">
          WhatsApp Directo
        </a>
      </nav>

      {/* HERO SECTION - MODIFICADO (Fondo elegante con paleta llamativa sin carros) */}
      <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-zinc-900">
        {/* Gradientes e iluminación de fondo premium */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[130px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-zinc-700/10 rounded-full blur-[150px]"></div>
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="z-10 flex flex-col items-center">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
            Máquinas<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-700">Premium.</span>
          </h1>
          
          <div className="mt-10 flex gap-4">
            <a href="#inventario" className="bg-red-600 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
              Explorar Inventario
            </a>
            <a href="#cotizar" className="border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">
              Vender Equipo
            </a>
          </div>
        </div>
      </section>

      {/* INVENTARIO SECTION */}
      <section id="inventario" className="py-24 px-6 md:px-12 bg-zinc-950">
        <div className="flex justify-between items-end mb-16 max-w-7xl mx-auto">
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Inventario Disponible</h2>
            <p className="text-zinc-500 text-sm mt-2">Unidades disponibles en RoadKing-GT</p>
          </div>
          <div className="text-zinc-600 text-xs font-bold">10 RESULTADOS</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {vehiculos.map((car) => (
            <div key={car.id} className="group bg-zinc-900/60 border border-zinc-800/60 overflow-hidden hover:border-red-600/50 transition-all duration-500 rounded-lg flex flex-col justify-between">
              {/* Espacio optimizado para fotos tomadas con teléfono celular */}
              <div className="relative h-64 overflow-hidden bg-black">
                <img 
                  src={car.imagen} 
                  alt={car.modelo} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100" 
                />
                <div className="absolute bottom-4 left-4 bg-red-600 px-3 py-1 text-[10px] font-black uppercase tracking-wider">Disponible</div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-red-500 transition-colors">{car.modelo}</h3>
                  <p className="text-red-500 font-black text-xl mt-1">{car.precio}</p>
                </div>
                
                {/* GRID DE DETALLES - MODIFICADO (Ubicación reemplazada por Puertas) */}
                <div className="grid grid-cols-2 gap-4 mt-6 border-t border-zinc-800/80 pt-6 text-[10px] font-bold uppercase text-zinc-500">
                  <div className="flex flex-col">
                    <span>Motor</span>
                    <span className="text-zinc-200 mt-1">{car.motor}</span>
                  </div>
                  <div className="flex flex-col">
                    <span>Recorrido</span>
                    <span className="text-zinc-200 mt-1">{car.km}</span>
                  </div>
                  <div className="flex flex-col">
                    <span>Transmisión</span>
                    <span className="text-zinc-200 mt-1">{car.transmision}</span>
                  </div>
                  <div className="flex flex-col">
                    <span>Estructura</span>
                    <span className="text-zinc-200 mt-1">{car.puertas}</span>
                  </div>
                </div>
                
                <a 
                  href={`https://wa.me/50255550000?text=Hola,%20solicito%20detalles%20del%20${encodeURIComponent(car.modelo)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-8 block text-center bg-zinc-800 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Ver Detalles Completos
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORMULARIO COTIZAR (INTACTO) */}
      <section id="cotizar" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter">Vender o Cotizar</h2>
          <p className="text-zinc-500 text-sm mt-4">Envía los detalles de tu máquina y nos pondremos en contacto de inmediato.</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-900 p-8 md:p-12 border border-zinc-800" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest">Nombre Completo</label>
            <input type="text" className="bg-zinc-800 border border-zinc-700 p-3 text-sm focus:outline-none focus:border-red-600 transition-colors" placeholder="Ej. Juan Pérez" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest">WhatsApp / Celular</label>
            <input type="text" className="bg-zinc-800 border border-zinc-700 p-3 text-sm focus:outline-none focus:border-red-600 transition-colors" placeholder="+502 0000 0000" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest">¿Qué estás vendiendo?</label>
            <input type="text" className="bg-zinc-800 border border-zinc-700 p-3 text-sm focus:outline-none focus:border-red-600 transition-colors" placeholder="Ej. BMW M2 2023 o RTX 4090 Nueva" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest">Especificaciones y Detalles</label>
            <textarea rows={4} className="bg-zinc-800 border border-zinc-700 p-3 text-sm focus:outline-none focus:border-red-600 transition-colors" placeholder="Km, estado, precio pretendido, etc."></textarea>
          </div>
          <button type="submit" className="md:col-span-2 bg-red-600 py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-red-700 transition-all">
            Enviar Propuesta al Dueño
          </button>
        </form>
      </section>

      {/* FOOTER / CONTACTO (INTACTO) */}
      <footer id="contacto" className="py-20 border-t border-zinc-900 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-3xl font-black uppercase italic mb-4">Roadking<span className="text-red-600">GT</span></div>
          <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Ciudad de Guatemala, Zona 10.</p>
          <p className="text-zinc-200 font-bold mt-2">+502 5555 4444</p>
        </div>
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Tiktok</a>
        </div>
        <div className="text-zinc-600 text-[9px] uppercase tracking-widest font-bold">
          &copy; {new Date().getFullYear()} ROADKING GT. SIN COMPROMISOS.
        </div>
      </footer>

    </div>
  );
}

//Mamachata