## CasaEstoque

Este repositório contém o código-fonte do **CasaEstoque**, uma aplicação em Next.js e React que gerencia o estoque doméstico de produtos. O principal objetivo é cadastrar produtos, controlar datas de validade e gerar alertas de expiração (_notificações ou toasts_) diretamente no navegador do usuário, salvando os dados localmente via **Local Storage**.

---

### Tecnologias Principais

- **[Next.js](https://nextjs.org/)**: Framework React utilizado no modo _App Router_ com **output estático**.
- **[React](https://react.dev/)**: Biblioteca para construção de interfaces declarativas.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e produtividade.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização.
- **[SheetJS (xlsx)](https://docs.sheetjs.com/)**: Biblioteca para geração de planilhas Excel.

---

### Funcionalidades

1. **Cadastro de Produtos**: A tela principal permite inserir produtos com:
    - Nome
    - Quantidade
    - Data de validade
    - Dias de validade após aberto
2. **Listagem e Remoção**: Visualização em tabela para atualizar dados e remover produtos rapidamente.
3. **Controle de Aberto/Fechado**: Alteração do estado de “aberto” registra a data de abertura para calcular a validade real.
4. **Alertas de Expiração**:
    - Notificação no próprio navegador (se permitido) ou **toast** interno.
    - Alertas para produtos que expiram **hoje, amanhã** ou em **7 dias**.
5. **Exportação de Planilha (Excel)**: Gera e baixa um arquivo `.xlsx` com todos os produtos, datas e status.

---

### Contribuindo

Sinta-se à vontade para abrir Issues, enviar PRs ou sugerir melhorias.  
Todas as contribuições são bem-vindas!

---

### Licença

Distribuído sob a licença **MIT**.  
Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.