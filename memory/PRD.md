# PRD - Doces da Gilda - Website de Vendas

## Informações do Projeto
**Data de Criação**: 7 de Fevereiro de 2025
**Proprietária**: Gilda
**Localização**: Moçambique
**Contacto**: +258 840 390 199

## Problema Original
Construir uma página simples mas apelativa para vender bolos artesanais da Gilda, incluindo bolos, biscoitos e compotas. A página deve mostrar preços e ter integração com WhatsApp para encomendas.

## Personas de Usuário
- **Clientes Locais**: Pessoas em Moçambique procurando bolos artesanais de qualidade para eventos e consumo pessoal
- **Compradores de Encomendas**: Clientes que desejam fazer encomendas personalizadas para festas e celebrações

## Requisitos Core (Estáticos)

### Funcionalidades Essenciais
1. Exibição de produtos (bolos, biscoitos, compotas)
2. Mostrar preços em MT (Metical Moçambicano)
3. Integração WhatsApp com número internacional (+258 840390199)
4. Design vibrante e apelativo
5. Galeria de fotos dos produtos
6. Responsivo para mobile e desktop

### Design
- Cores vibrantes: laranja, rosa, âmbar, vermelho
- Tipografia elegante: Playfair Display (títulos) + Poppins (corpo)
- Animações suaves e hover effects
- Imagens melhoradas com filtros CSS

## O Que Foi Implementado

### 7 de Fevereiro de 2025 - Lançamento Inicial ✅
- **Frontend Completo**: Header, Hero, Stats, Produtos, CTAs, Footer
- **5 Bolos**: Com fotos reais, descrições e preços
- **1 Biscoitos**: Com informações completas
- **Seção Compotas**: Placeholder preparado

### 7 de Fevereiro de 2025 - Atualização Compotas ✅
- **2 Compotas**: Compotas Variadas (350 MT) e Compota Especial (400 MT)
- **Fotos Reais**: Integradas com qualidade melhorada
- **Layout Completo**: Grid responsivo com cards elegantes
- **Total**: 8 produtos ativos na página

### Produtos Cadastrados
**Bolos:**
1. Bolo de Chocolate Premium - 850 MT
2. Bolo com Calda Especial - 750 MT
3. Bolo Caseiro Tradicional - 700 MT
4. Bolo de Chocolate Fatiado - 900 MT
5. Bolo Especial com Granulado - 800 MT

**Biscoitos:**
1. Biscoitos Artesanais - 250 MT (pacote)

**Compotas:**
1. Compotas Variadas - 350 MT (frasco)
2. Compota Especial - 400 MT (frasco)

### Tecnologias
- React 19.0.0
- Shadcn UI components
- Tailwind CSS
- Lucide React icons
- Google Fonts (Poppins, Playfair Display)

## Melhorias de Qualidade Aplicadas
1. Filtros CSS nas imagens: brightness(1.1) + contrast(1.1) + saturate(1.2)
2. Image rendering otimizado: crisp-edges
3. Hover effects nos cards de produtos
4. Gradientes vibrantes em CTAs
5. Animações suaves em botões e elementos interativos

## Backlog Priorizado

### P0 (Crítico)
- ✅ Página inicial funcional
- ✅ Integração WhatsApp
- ✅ Exibição de preços
- ✅ Todas as fotos de produtos adicionadas (bolos, biscoitos, compotas)

### P1 (Alto)
- Formulário de encomenda estruturado
- Galeria expandida com mais produtos
- Página de detalhes de produto individual
- Sistema de categorias expandido

### P2 (Médio)
- Backend para gestão de produtos
- Painel administrativo para Gilda
- Sistema de avaliações/testemunhos
- Blog/receitas
- Instagram feed integration

## Próximas Tarefas
1. ✅ **Concluído**: Todas as fotos de produtos adicionadas
2. Coletar feedback da Gilda sobre design, preços e funcionalidades
3. Ajustes de conteúdo (descrições, preços, sabores) conforme necessário
4. Considerar adicionar mais produtos/sabores
5. Implementar backend se necessário para gestão dinâmica
6. Adicionar sistema de encomendas personalizadas

## Notas Técnicas
- Todas as imagens são servidas via CDN Emergent
- WhatsApp link: `https://wa.me/+258840390199?text=[mensagem]`
- Design responsivo testado
- Sem backend atualmente - frontend estático com dados hardcoded
