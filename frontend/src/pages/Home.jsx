import React, { useState } from 'react';
import { Phone, ShoppingCart, Heart, Star, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const whatsappNumber = "+258840390199";
  const whatsappMessage = encodeURIComponent("Olá Gilda! Gostaria de encomendar um bolo delicioso! 🍰");

  const bolos = [
    {
      id: 1,
      nome: "Bolo Fatiado",
      descricao: "Bolo de chocolate fatiado, perfeito para compartilhar",
      preco: "700 MT",
      imagem: "https://customer-assets.emergentagent.com/job_gildas-bakery/artifacts/4umsx5f3_IMG-20260129-WA0009.jpg",
      categoria: "Bolos"
    },
    {
      id: 2,
      nome: "Bolo de Maracujá",
      descricao: "Sabor tropical único com calda especial de maracujá",
      preco: "700 MT",
      imagem: "https://customer-assets.emergentagent.com/job_gildas-bakery/artifacts/6aya9rx6_IMG-20260129-WA0016.jpg",
      categoria: "Bolos"
    },
    {
      id: 3,
      nome: "Bolo Caseiro Tradicional",
      descricao: "Receita tradicional, feito com muito carinho",
      preco: "500 MT",
      imagem: "https://customer-assets.emergentagent.com/job_gildas-bakery/artifacts/wap4c9ji_IMG-20260129-WA0007.jpg",
      categoria: "Bolos"
    },
    {
      id: 4,
      nome: "Bolo de Chocolate",
      descricao: "Delicioso bolo de chocolate com cobertura especial",
      preco: "800 MT",
      imagem: "https://customer-assets.emergentagent.com/job_gildas-bakery/artifacts/7qxy0zxz_IMG-20260129-WA0011.jpg",
      categoria: "Bolos"
    },
    {
      id: 5,
      nome: "Bolo Pão de Ló",
      descricao: "Bolo pão de ló clássico, macio e delicioso",
      preco: "500 MT",
      imagem: "https://customer-assets.emergentagent.com/job_gildas-bakery/artifacts/d2l184j6_WhatsApp%20Image%202026-02-07%20at%2013.09.19.jpeg",
      categoria: "Bolos"
    }
  ];

  const biscoitos = [
    {
      id: 6,
      nome: "Biscoitos Artesanais",
      descricao: "Biscoitos caseiros crocantes e saborosos",
      preco: "60 MT (dúzia)",
      imagem: "https://customer-assets.emergentagent.com/job_gildas-bakery/artifacts/6ldn4g48_IMG-20260129-WA0012.jpg",
      categoria: "Biscoitos"
    }
  ];

  const doces = [
    {
      id: 7,
      nome: "Doces Variados",
      descricao: "Seleção artesanal de doces caseiros deliciosos",
      preco: "A partir de 150 MT",
      imagem: "https://customer-assets.emergentagent.com/job_gildas-bakery/artifacts/dxkc4x2z_IMG-20260129-WA0013.jpg",
      categoria: "Doces"
    }
  ];

  const handleWhatsAppClick = (productName = null) => {
    const message = productName 
      ? encodeURIComponent(`Olá Gilda! Gostaria de encomendar: ${productName} 🍰`)
      : whatsappMessage;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍰</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Doces da Gilda</h1>
                <p className="text-sm text-gray-600">Bolos e Compotas Artesanais</p>
              </div>
            </div>
            <Button 
              onClick={() => handleWhatsAppClick()}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Encomendar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-rose-400/20 to-amber-400/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 text-base">
            Feito com amor em Moçambique
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Bolos Artesanais que<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500">
              Derretem o Coração
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Cada bolo é preparado com ingredientes selecionados e muito carinho pela Gilda. 
            Sabor caseiro que lembra a infância! 🏠✨
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              onClick={() => handleWhatsAppClick()}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-bold px-8 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingCart className="w-6 h-6 mr-2" />
              Ver Produtos
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold px-8 py-6 text-lg"
              onClick={() => document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="w-6 h-6 mr-2" />
              Nossas Especialidades
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Artesanal</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-rose-600 mb-2">Feito com</div>
              <div className="text-gray-700 font-medium flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                Amor
              </div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-amber-600 mb-2 flex items-center justify-center gap-2">
                <Star className="w-8 h-8 fill-amber-500 text-amber-500" />
                5.0
              </div>
              <div className="text-gray-700 font-medium">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-20 px-4">
        <div className="container mx-auto">
          {/* Bolos */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Bolos Especiais</h3>
              <p className="text-lg text-gray-600">Feitos fresquinhos todos os dias</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bolos.map((produto) => (
                <Card 
                  key={produto.id}
                  className="overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer bg-white"
                  onMouseEnter={() => setHoveredProduct(produto.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={produto.imagem} 
                      alt={produto.nome}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                      style={{
                        filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${hoveredProduct === produto.id ? 'opacity-100' : 'opacity-0'}`}></div>
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-3 py-1">
                      {produto.categoria}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{produto.nome}</h4>
                    <p className="text-gray-600 mb-4">{produto.descricao}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-orange-600">{produto.preco}</span>
                      <Button 
                        onClick={() => handleWhatsAppClick(produto.nome)}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Pedir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Biscoitos */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Biscoitos Artesanais</h3>
              <p className="text-lg text-gray-600">Crocantes e irresistíveis</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {biscoitos.map((produto) => (
                <Card 
                  key={produto.id}
                  className="overflow-hidden border-2 border-amber-100 hover:border-amber-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer bg-white"
                  onMouseEnter={() => setHoveredProduct(produto.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={produto.imagem} 
                      alt={produto.nome}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                      style={{
                        filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${hoveredProduct === produto.id ? 'opacity-100' : 'opacity-0'}`}></div>
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1">
                      {produto.categoria}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{produto.nome}</h4>
                    <p className="text-gray-600 mb-4">{produto.descricao}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-amber-600">{produto.preco}</span>
                      <Button 
                        onClick={() => handleWhatsAppClick(produto.nome)}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Pedir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Doces */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Doces Artesanais</h3>
              <p className="text-lg text-gray-600">Variedade de doces caseiros irresistíveis 🍬</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doces.map((produto) => (
                <Card 
                  key={produto.id}
                  className="overflow-hidden border-2 border-rose-100 hover:border-rose-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer bg-white"
                  onMouseEnter={() => setHoveredProduct(produto.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={produto.imagem} 
                      alt={produto.nome}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                      style={{
                        filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${hoveredProduct === produto.id ? 'opacity-100' : 'opacity-0'}`}></div>
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-3 py-1">
                      {produto.categoria}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{produto.nome}</h4>
                    <p className="text-gray-600 mb-4">{produto.descricao}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-rose-600">{produto.preco}</span>
                      <Button 
                        onClick={() => handleWhatsAppClick(produto.nome)}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Pedir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500">
        <div className="container mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Pronta para Adoçar o seu Dia?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Faça sua encomenda agora pelo WhatsApp e receba bolos fresquinhos!
          </p>
          <Button 
            onClick={() => handleWhatsAppClick()}
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-10 py-6 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-6 h-6 mr-2" />
            +258 840 390 199
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🍰</span>
                Doces da Gilda
              </h4>
              <p className="text-gray-400">
                Bolos, biscoitos e doces artesanais feitos com amor em Moçambique.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Produtos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Bolos Especiais</li>
                <li>• Biscoitos Artesanais</li>
                <li>• Doces Caseiros</li>
                <li>• Encomendas Personalizadas</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +258 840 390 199
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp disponível
                </li>
                <li>📍 Moçambique</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Doces da Gilda. Feito com ❤️ em Moçambique.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => handleWhatsAppClick()}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 z-50 animate-pulse hover:animate-none"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Home;
