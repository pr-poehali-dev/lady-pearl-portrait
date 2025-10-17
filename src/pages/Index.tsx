import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const artworks = [
  {
    id: 1,
    title: 'Портрет дамы с жемчужным ожерельем',
    year: '1665',
    medium: 'Масло, холст',
    dimensions: '65 × 50 см',
    image: 'https://cdn.poehali.dev/projects/7016035e-b24d-487a-abff-54b300a86daa/files/79728a67-47b6-4705-9af5-76b91662fb0c.jpg',
    description: 'Классический портрет эпохи Возрождения, демонстрирующий мастерство работы со светом и тенью. Жемчужное ожерелье символизирует чистоту и благородство.'
  },
  {
    id: 2,
    title: 'Дама в белом',
    year: '1670',
    medium: 'Масло, холст',
    dimensions: '70 × 55 см',
    image: 'https://cdn.poehali.dev/projects/7016035e-b24d-487a-abff-54b300a86daa/files/eb4eff4f-9044-4d56-bffb-e0e752900a67.jpg',
    description: 'Барочная композиция с драматическим освещением. Белое платье и жемчуг создают гармоничный контраст с тёмным фоном.'
  },
  {
    id: 3,
    title: 'Портрет с жемчужной тиарой',
    year: '1672',
    medium: 'Масло, холст',
    dimensions: '75 × 60 см',
    image: 'https://cdn.poehali.dev/projects/7016035e-b24d-487a-abff-54b300a86daa/files/0a2b1a97-e1c7-4f6f-a1f8-b0d882a8608d.jpg',
    description: 'Утончённый портрет знатной дамы с роскошными жемчужными украшениями. Богатство тканей и детальная проработка демонстрируют высочайшее мастерство.'
  }
];

const Index = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);
  const [activeSection, setActiveSection] = useState<'gallery' | 'about'>('gallery');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-center mb-4">Портрет дамы с жемчугами</h1>
          <nav className="flex justify-center gap-8 mt-6">
            <button
              onClick={() => setActiveSection('gallery')}
              className={`text-lg transition-colors ${
                activeSection === 'gallery' ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Галерея работ
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`text-lg transition-colors ${
                activeSection === 'about' ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              О художнике
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {activeSection === 'gallery' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                onClick={() => setSelectedArtwork(artwork)}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted rounded-sm mb-4 transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-light mb-1">{artwork.title}</h3>
                <p className="text-sm text-muted-foreground">{artwork.year}</p>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'about' && (
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="space-y-8">
              <section>
                <h2 className="text-4xl font-light mb-6">О художнике</h2>
                <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                  <p>
                    Мастер портретной живописи XVII века, чьи работы отличаются утончённым вкусом
                    и глубоким пониманием человеческой природы. Художник специализировался на портретах
                    знатных дам, подчёркивая их благородство через изысканные детали костюма и украшений.
                  </p>
                  <p>
                    Особое место в творчестве занимают жемчужные украшения — символ чистоты, богатства
                    и утончённости. Мастерское владение техникой светотени позволяло создавать
                    объёмные, почти живые изображения, где каждая жемчужина словно излучает собственный свет.
                  </p>
                </div>
              </section>

              <section className="pt-8 border-t border-border">
                <h3 className="text-3xl font-light mb-6">Творческий путь</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl mb-2 font-semibold">1650-1665</h4>
                    <p className="text-foreground/80">
                      Ранний период. Формирование собственного стиля под влиянием фламандских и
                      итальянских мастеров. Первые заказы от купеческих семей.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl mb-2 font-semibold">1665-1675</h4>
                    <p className="text-foreground/80">
                      Расцвет творчества. Работа при дворе, создание серии портретов знатных дам.
                      Признание современников и многочисленные заказы от аристократии.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl mb-2 font-semibold">1675-1690</h4>
                    <p className="text-foreground/80">
                      Поздний период. Философское переосмысление портретного жанра, создание
                      наиболее утончённых и психологически глубоких работ.
                    </p>
                  </div>
                </div>
              </section>

              <section className="pt-8 border-t border-border">
                <h3 className="text-3xl font-light mb-6">Техника и стиль</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-accent/50 p-6 rounded-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon name="Palette" size={24} className="text-secondary mt-1" />
                      <h4 className="text-xl font-semibold">Колорит</h4>
                    </div>
                    <p className="text-foreground/80">
                      Приглушённая палитра с акцентами на белых и жемчужных тонах.
                      Мастерское использование тёплых и холодных оттенков.
                    </p>
                  </div>
                  <div className="bg-accent/50 p-6 rounded-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon name="Sparkles" size={24} className="text-secondary mt-1" />
                      <h4 className="text-xl font-semibold">Светотень</h4>
                    </div>
                    <p className="text-foreground/80">
                      Драматическое освещение в традициях караваджизма.
                      Игра света на жемчужных украшениях создаёт особую атмосферу.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </main>

      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          {selectedArtwork && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-light">{selectedArtwork.title}</DialogTitle>
                <DialogDescription className="text-base">{selectedArtwork.year}</DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div className="aspect-[4/5] overflow-hidden bg-muted rounded-sm">
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Техника</h4>
                    <p className="text-lg">{selectedArtwork.medium}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Размеры</h4>
                    <p className="text-lg">{selectedArtwork.dimensions}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Описание</h4>
                    <p className="text-base leading-relaxed">{selectedArtwork.description}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t border-border mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Галерея «Портрет дамы с жемчугами» © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
