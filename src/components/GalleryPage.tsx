
import React from 'react';

const GalleryPage: React.FC = () => {
  // LISTA DE FOTOS: Troque os links abaixo pelos links das suas fotos reais
  const photos = [
    {
      url: '/fotos/foto1.jpg',
      caption: 'Cada momento com você é um presente.'
    },
    {
      url: '/fotos/foto2.jpg',
      caption: 'Seu sorriso é minha parte favorita do dia'
    },
    {
      url: '/fotos/foto3.jpg',
      caption: 'Para sempre nós dois.'
    },
    {
      url: '/fotos/foto4.jpg',
      caption: 'Te amo Maisa. ❤️'
    }
  ];

  return (
    <div className="relative z-10 pt-10 pb-20 px-4 md:px-0">
      {/* Cabeçalho */}
      <div className="max-w-2xl mx-auto text-center mb-16 px-4">
        <h2 className="text-5xl font-romantic text-rose-500 mb-6 drop-shadow-lg">
          Nosso Amor em Fotos
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto"></div>
      </div>

      {/* Galeria de Fotos */}
      <div className="max-w-screen-md mx-auto grid grid-cols-1 gap-8 px-2">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="group relative bg-neutral-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 transform transition-transform duration-500 hover:scale-[1.02]"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={photo.url} 
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 active:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 bg-gradient-to-t from-black/90 to-transparent absolute bottom-0 inset-x-0">
              <p className="text-white text-lg font-light italic text-center drop-shadow-md">
                "{photo.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Seção de Texto Romântico */}
      <div className="max-w-2xl mx-auto mt-20 px-6 py-12 bg-neutral-900/60 backdrop-blur-sm rounded-[2.5rem] border border-rose-500/20 text-center shadow-xl">
        <span className="text-4xl mb-6 block">💌</span>
        <h3 className="text-3xl font-serif-romantic text-rose-400 mb-8 italic">Para Minha Pessoa Favorita</h3>
        
        <div className="space-y-6 text-neutral-300 font-light leading-relaxed text-lg">
          <p>
            Desde o momento em que você entrou na minha vida, tudo ganhou mais cor e sentido. 
            Cada detalhe seu, desde o seu jeito de sorrir até a forma como me olha, 
            faz com que eu me apaixone por você todos os dias novamente.
          </p>
          <p>
            Este pequeno site é apenas uma forma simples de dizer o quanto você é importante. 
            Obrigado por ser minha parceira, minha melhor amiga e meu grande amor.
          </p>
          <p className="text-rose-500 font-romantic text-4xl mt-8">
            Eu te amo infinitamente! ❤️
          </p>
        </div>
      </div>

      {/* Rodapé Decorativo */}
      <footer className="mt-20 text-center opacity-40 text-sm tracking-widest uppercase">
        <p>Feito pelo seu Dev Jr Renan :) • Te amo</p>
      </footer>
    </div>
  );
};

export default GalleryPage;
