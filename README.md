# Desenvolvimento para dispositivos móveis - PROJETO FINAL

### Entrega final prevista para o dia 25/11/2019.


Como base do projeto utilizaremos o código encontrado no github do professor (https://github.com/igorosberg/ect-mobile-2019-2).

Além do Código Base (bit.do/projeto-mobile-ect) e utilizaremos também o FIREBASE para a DataBase do projeto.


#### → Dia 21/10 ←
- Inicialmente coloquei o código base fornecido no meu github e começarei a trabalhar em cima disso.

##### Avanços do dia: ###### 
    Código inicial feito, começar a implementar as partes subsequentes;  
    Foi feito o firebase do ProjetoFinal, já coloquei o googleservices lá (colocar em andoird→app);  
    Para acessar o programa, inicialmente entrar no diretório do projeto, após dar yarn install e depois o código react-native run-android --no-jetifier;  
    Inicialmente foram criadas a aba de Vendas e Dados, porém falta ser implementado no código em si as suas funções.
                
#### → Dia 04/11 ←
- Começando a implementação do código

##### Avanços do dia: ###### 
    Funções que estão em pleno funcionamento: Tela de Login (OK); Tela de confirmação (OK); Cadastro dos Livros (Com Autor, Nome e Preço (OK));
    
    Funções pela metade: Enviar o número do autor de venda/empréstimo (Falta fazer gerar o número automaticamente e após isso apenas cadastrar o nome, que ficará salvo, mas não será mostrado em qualquer lugar, apenas o número).
    -- Utilizamos o this.props.navigation.navigate('MenuPrincipal', {phone: this.state.phoneNumber}), então pesquisar mais sobre. 
   
    Funções faltando: Mostrar dados do usuário (Nome e Telefone); Acesso aos livros cadastrados (mostrar detalhes sobre eles); 
