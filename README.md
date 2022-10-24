# consulta-dados

### tecnologias utilizadas:
<div style = "display: inline-block"><br/>
    <img align="center" alt="Javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img align="center" alt="Javascript" src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
    <img align="center" alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img align="center" alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>

#

link do site: https://raulvlb.github.io/consulta-dados/

link para figma do projeto: https://www.figma.com/file/oHH3WozFHNuN1cImwP80Rm/Untitled?node-id=0%3A1

<a href="https://imgur.com/IbmLX55"><img src="https://i.imgur.com/IbmLX55l.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/noWfXqz"><img src="https://i.imgur.com/noWfXqzl.png" title="source: imgur.com" /></a>

#

- Utiliza <span style="color:yellow">Javascript puro</span>, <span style="color:cyan">Jquery</span>, <span style="color:orange">HTML</span> e <span style="color:blue">CSS</span> como tecnologias
- Todos os campos são obrigatorios para consulta
- O campo de <span style="color:pink">CPF</span> é validado com base na formula de <span style="color:pink">CPF</span>
- O campo de <span style="color:green">CEP</span> é validade com a api <span style="color:green">ViaCep</span>
- O campo de idade é vinculado ao campo de data de nascimento, 
resultando em erro caso ocorra divergencia entre eles
- Os campos bairro, cidade, estado e rua são vinculado ao campo do <span style="color:green">CEP</span>,
em caso dos valores inputados nesses campos divergirem dos valores obtidos
pela api do <span style="color:green">CEP</span>, os dados obtidos pela api que irão formar o <span style="color:brown">JSON</span>
- Os campos de bairro, rua, numero e hobby, podem usar tanto letras quanto 
números pois pode ser que se faça nescessário o uso de ambos em algumas ocasiões.
