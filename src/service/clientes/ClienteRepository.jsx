import axios from "axios";

export const getData = () => {
    var data = [
            {
                "id": 1,
                "matricula": "05854",
                "nome": "ABEL SOARES FERREIRA"
            },
            {
                "id": 2,
                "matricula": "84352",
                "nome": "ADRIANO MORAIS DE LIMA"
            },
            {
                "id": 3,
                "matricula": "07750",
                "nome": "ANDREZA PEDRO DE SOUZA"
            },
        ]

        axios.get('http://localhost:8080/clientes')
        .then(function (response) {
          // manipula o sucesso da requisição
          data = []
        //   console.log(response.data);
        })
        .catch(function (error) {
          // manipula erros da requisição
        //   console.error(error.message);
        })
        .finally(function () {
          // sempre será executado
        });
    
    return data
}