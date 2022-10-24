# consulta-dados

link do site: https://raulvlb.github.io/consulta-dados/

<a href="https://imgur.com/IbmLX55"><img src="https://i.imgur.com/IbmLX55l.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/noWfXqz"><img src="https://i.imgur.com/noWfXqzl.png" title="source: imgur.com" /></a>

- Utiliza Javascript puro, jquery, html e css como tecnologias
- Todos os campos são obrigatorios para consulta
- O campo de CPF é validado com base na formula de CPF
- O campo de CEP é validade com a api viacep
- O campo de idade é vinculado ao campo de data de nascimento, 
resultando em erro caso ocorra divergencia entre eles
- Os campos bairro, cidade, estado e rua são vinculado ao campo do CEP,
em caso dos valores inputados nesses campos divergirem dos valores obtidos
pela api do CEP, os dados obtidos pela api que irão formar o JSON
- Os campos de bairro, rua, numero e hobby, podem usar tanto letras quanto 
números pois pode ser que se faça nescessário o uso de ambos em algumas ocasiões.
