// async function consultaCEP() {
//     let numCep = document.getElementById('cep').value;
    

//     //arruma formatação cep para consulta
//     var cep = numCep.split('-').join('');

//     //verifica validade do cep digitado
//     if (cep.length !== 8){
        
//         return false
//     }

//     //realiza consulta do cep
//     let url = `https://viacep.com.br/ws/${cep}/json/`

//     let response = await fetch(url);

//     let data = await response.json();


//     //console.log(data)

//     return(data)
    

//     // return fetch(url).then(function(response){
//     //     response.json().async(function(data){

//     //         //return(!data.erro)
//     //         if (data.erro){
//     //             return false
//     //         }else{
//     //             return true
//     //         }

//     //         //console.log(data)
            
//     //     })
//     // });
// }