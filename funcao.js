const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require ('./credentials.json');
const arquivo = require('./arquivo.json');
const { JWT } = require('google-auth-library');

const SCOPES = [

    'https://www.googleapis.com/auth/spreadsheets'
    
];

const jwt = new JWT({

    email: credenciais.client_email,
    key: credenciais.private_key,
    scopes: SCOPES,

})

async function GetDoc() {
    
    const documento = new GoogleSpreadsheet(arquivo.id,jwt) //Cria uma nova instância do objeto GoogleSpreadsheet, passando o ID da planilha de arquivos e o objeto jwt para autenticação, ou seja, que refere-se a classe que foi criada 

    await documento.loadInfo(); //aqui se usa este método para carregar as infomações da planilha e não requer parâmetros.

    return documento
}

async function ReadWorkSheet() {


// Obter o objeto GoogleSpreadsheet
   const objetoGoogleSpreadSheet = await GetDoc(); 
// Selecionar a primeira aba da planilha
   const lerPlanilha = objetoGoogleSpreadSheet.sheetsByIndex[0];
// Obter as linhas da aba selecionada
   const linhas = await lerPlanilha.getRows();
// Transformar as linhas em objetos de usuário, linha é uma array de objetos, cada objeto neste array representa uma linha da planilha
   const usuariosLista= linhas.map(linhas => linhas.toObject())
// Retornar a lista de objetos de usuário
   return usuariosLista;
}


//Crie uma função assíncrona AddUser(data={}) usando o método POST para subir as informações obtidas para a API criada anteriormente;

async function AddUser(data={}) {
    
    const resposta = await fetch("https://apigenerator.dronahq.com/api/97SO2yjr/apiusuario", {

        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
    });
    return resposta.json();
}

async function TrackData() {
    let data = await ReadWorkSheet();
    data.map(async (user) => {
        let resposta = await AddUser(user)
        console.log(resposta)
    })
    return console.log('sucesso!!')
}

TrackData();

//perguntas: sobre o código:

// na função GetDoc(), ta cert passar o id do arquivo de planilhas assim:  
//const documento = new GoogleSpreadsheet('1B_aNW3fc0jf5e5R79-EeBCmPTLey_iK_77rUyfA5zh4',jwt)

//é necssario usar o modeulo.experts, para passar os código feitos no index para a esse código funcao.js??

//pedir pra explicar a função TrackData(chat)