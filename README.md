Questão 03 — Controle de Estoque
Descrição
Aplicativo desenvolvido com React Native e Expo para acompanhar a quantidade disponível de um produto, registrando entradas e retiradas do estoque.
Funcionalidades
- Informar o nome do produto.
- Cadastrar a quantidade inicial.
- Adicionar unidades ao estoque.
- Retirar unidades do estoque.
- Impedir retiradas maiores que a quantidade disponível.
- Exibir um alerta quando restarem menos de cinco unidades.
- Validar as quantidades informadas.
Tecnologias utilizadas
- React Native
- Expo
- JavaScript
- useState para armazenar o produto e a quantidade atual.
Exemplo de utilização
- Produto: Arroz
- Quantidade inicial: 20 unidades
- Retirada: 7 unidades
- Resultado esperado: 13 unidades disponíveis.
Quando o estoque ficar abaixo de cinco unidades, o aplicativo apresenta um alerta.
Como executar
1. Abra o terminal na pasta deste projeto.
2. Instale as dependências, se necessário: npm.cmd install.
3. Inicie o projeto para navegador: npx.cmd expo start --web.
4. Abra no navegador o endereço apresentado pelo Expo.
No PowerShell do Windows, use os comandos com .cmd caso npm ou npx sejam bloqueados pela política de execução de scripts.