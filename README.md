# 💅 Sistema de Agendamento Nails

> Aplicação frontend de agendamento de serviços desenvolvida como atividade do **Bootcamp Java - Deloitte**, aplicada a um caso real de uma Nails Designer.

[![Demo](https://img.shields.io/badge/Demo-Online-success)](https://rcaio0598.github.io/sistema-nails-frontend/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🎯 Sobre o Projeto

Durante o Bootcamp Java da Deloitte, recebi como atividade criar uma aplicação web. Aproveitei para desenvolver uma solução real para uma **Nails Designer** que já havia me pedido ajuda com organização de agendamentos.

Este projeto representa a **camada frontend** do sistema, focando em usabilidade, responsividade e integração com WhatsApp — o principal canal de comunicação do público-alvo.

---

## 🚩 Contexto & Problema

Uma Nails Designer conhecida enfrentava:
- ❌ Desorganização em agendamentos (mensagens perdidas, anotações dispersas)
- ❌ Conflitos de horário frequentes
- ❌ Dificuldade em calcular valores com múltiplos serviços
- ❌ Retrabalho ao confirmar manualmente cada cliente

**A oportunidade:** Unir uma atividade do bootcamp com uma necessidade real.

---

## ✨ Funcionalidades

- ✅ Seleção de serviços com cálculo automático de valores
- ✅ Escolha de data e horário para agendamento
- ✅ Geração de mensagem pré-formatada para WhatsApp
- ✅ Histórico de agendamentos com LocalStorage
- ✅ Interface responsiva (mobile-first)

---

## 🚀 Como Executar

### 🌐 Acessar Online
**Demo ao vivo:** https://rcaio0598.github.io/sistema-nails-frontend/

### 💻 Rodar Localmente

**1. Clone o repositório:**
```bash
git clone https://github.com/rcaio0598/sistema-nails-frontend.git
cd sistema-nails-frontend
```

**2. Abra no navegador:**

**Opção A** - Direto:
```
Abra o arquivo index.html no navegador
```

**Opção B** - Com servidor local:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

**3. Acesse:**
```
http://localhost:8000
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| HTML5 | Estrutura semântica |
| CSS3 | Estilização e layout |
| JavaScript (Vanilla) | Lógica e interações |
| Bootstrap 5 | Responsividade e componentes |
| LocalStorage | Persistência local de dados |

---

## 📂 Estrutura do Projeto
```
sistema-nails-frontend/
├── index.html          # Interface principal
├── style.css           # Estilos customizados
├── script.js           # Lógica da aplicação
├── README.md           # Documentação
├── LICENSE             # Licença MIT
└── .gitignore          # Arquivos ignorados
```

---

## 💡 Decisões Técnicas

### JavaScript Vanilla
Optei por JavaScript puro para consolidar os fundamentos da linguagem, sem depender de frameworks ou bibliotecas externas.

### LocalStorage para persistência
Permite armazenar histórico de agendamentos no navegador, criando uma experiência funcional sem necessidade de backend.

### Integração via WhatsApp
O público-alvo já usa WhatsApp diariamente. Aproveitar esse canal reduz fricção e facilita a adoção.

### Mobile-first
A maioria dos agendamentos acontece via celular. O design foi pensado primeiro para telas pequenas.

---

## 🎓 O Que Aprendi

### Técnico
- ✅ Manipulação do DOM com JavaScript
- ✅ Gestão de eventos e validações
- ✅ Uso da API LocalStorage
- ✅ Design responsivo com Bootstrap
- ✅ Deploy com GitHub Pages

### Produto & Soft Skills
- ✅ Transformar requisitos reais em funcionalidades
- ✅ Priorizar features essenciais (MVP)
- ✅ Pensar na experiência do usuário final
- ✅ Documentar código e projeto

---

## 🔄 Possíveis Melhorias Futuras

- [ ] Validações de formulário mais robustas
- [ ] Sistema de lembretes/notificações
- [ ] Backend com API REST (Java/Spring Boot)
- [ ] Autenticação de usuários
- [ ] Painel administrativo para gestão

---

## 📝 Licença

Projeto disponibilizado sob licença MIT. Consulte [LICENSE](LICENSE) para mais informações.

---

## 👤 Autor

**Caio Ruan Oliveira Nascimento**

- 🎓 Graduado em Ciência da Computação | Pós-graduando em Cibersecurity
- 💼 Participante do Bootcamp Java - Deloitte
- 🔗 GitHub: [@rcaio0598](https://github.com/rcaio0598)
- 💼 LinkedIn: [Caio Nascimento](https://www.linkedin.com/in/caionascimentoo/)

---

**Desenvolvido como atividade prática do Bootcamp Java - Deloitte, aplicado a um caso real**
```

---

## ✅ ESSE README:

- ✅ É honesto (atividade do bootcamp)
- ✅ Mostra iniciativa (aproveitou pra fazer algo útil)
- ✅ Destaca aprendizado
- ✅ Não exagera nos "resultados"
- ✅ Mantém profissionalismo

---
