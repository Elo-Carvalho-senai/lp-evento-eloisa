
# Relatório de Acessibilidade — Festival Sabores da Alta Paulista

## 1. Identificação

- **Projeto:** Festival Sabores da Alta Paulista
- **Tecnologias:** React, Vite e Tailwind CSS
- **Objetivo:** avaliar e melhorar a acessibilidade da landing page.

## 2. Avaliação inicial

A avaliação inicial, antes das correções, não teve seus resultados registrados. Portanto, não há pontuações ou problemas iniciais documentados para comparação.

## 3. Correções realizadas

Durante a revisão do código, foram realizadas as seguintes melhorias:

- Correção do atributo `class` para `className` nos elementos JSX.
- Inclusão de um link para pular diretamente ao conteúdo principal.
- Identificação do conteúdo principal com `id="conteudo"` e `tabIndex="-1"`.
- Implementação de indicador visual de foco com `:focus-visible`.
- Respeito à preferência de movimento reduzido com `prefers-reduced-motion`.
- Inclusão do link "Dúvidas" na navegação.
- Implementação de perguntas frequentes acessíveis, utilizando botões, `aria-expanded` e `aria-controls`.
- Associação dos campos do formulário aos respectivos rótulos (`label`).
- Inclusão de `autocomplete` para os campos de nome e e-mail.
- Inclusão de `role="status"` na mensagem de confirmação do formulário.
- Identificação de emojis decorativos com `aria-hidden="true"`.
- Utilização de elementos semânticos, como `main`, `nav`, `section`, `article` e listas.
- Ajustes em combinações de cores para melhorar o contraste.

## 4. Avaliação após as correções

### Lighthouse

Resultados obtidos:

| Categoria | Pontuação |
|---|---:|
| Desempenho | 56 |
| Acessibilidade | **96** |
| Práticas recomendadas | 82 |
| SEO | 56 |

O projeto obteve **96 pontos em acessibilidade**, indicando um bom resultado nas verificações automatizadas do Lighthouse.



### axe DevTools

- **Ferramenta:** axe DevTools (axe-core 4.13.0).
- **Página analisada:** `http://localhost:5173/#inscricao`.
- **Resultado:** nenhum problema de acessibilidade foi registrado pela ferramenta.

O resultado indica que não foram encontradas violações nas regras automatizadas verificadas pelo axe DevTools durante a análise.

## 5. Testes manuais

Os testes manuais complementam as ferramentas automatizadas e permitem identificar problemas que elas podem não detectar.

| Verificação | Sucesso |
| Navegação utilizando Tab e Shift + Tab | Sucesso |
| Indicador de foco visível | Sucesso |
| Link "Pular para o conteúdo" | Sucesso |
| Perguntas frequentes com Enter e Espaço | Sucesso |
| Ampliação da página para 200% | Sucesso |

## 6. Problema que as ferramentas automatizadas podem não detectar

Uma possível barreira de acessibilidade é uma ordem de navegação pelo teclado confusa ou pouco intuitiva.

Mesmo que o Lighthouse e o axe DevTools não identifiquem problemas, uma pessoa que utiliza apenas o teclado pode encontrar dificuldades caso o foco percorra os elementos em uma sequência que não faça sentido.

Por isso, é importante realizar testes manuais para verificar se a navegação é lógica e se todos os elementos interativos podem ser acessados.

## 7. Conclusão

Após as melhorias, o projeto alcançou 96 pontos em acessibilidade no Lighthouse e não apresentou problemas registrados pelo axe DevTools.

Entretanto, uma pontuação de 100 no Lighthouse não garante que um site seja totalmente acessível, pois as ferramentas automatizadas não conseguem avaliar todas as experiências de uso.

A acessibilidade deve considerar também os testes manuais, a navegação por teclado, a clareza das informações e a facilidade de utilização por diferentes pessoas.

As melhorias realizadas beneficiam especialmente pessoas com deficiência visual, motora ou cognitiva, além de usuários que navegam pelo teclado ou possuem limitações temporárias.
