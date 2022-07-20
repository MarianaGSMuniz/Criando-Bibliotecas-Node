const fetch= require ('node-fetch');

function manejaErro(erro){
throw new Error (erro.message);
}


async function checaStatus (arrayLinks){
  try
  {const arrayStatus= await  Promise
    .all (arrayLinks.map (async url =>{
     const res = await fetch (url)
    return res.status;
  }))
      }
      catch (erro) {
        manejaErro(erro);
      }
      return arrayStatus;
  } 
  module.exports = validaURLs;

function geraLink (arrayLinks){
return arrayLinks.map (objetoLink =>Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
    const Links = geraLink  (arrayLinks);
    const statusLinks = await checaStatus (Links);
    return statusLinks;
    const resultados = arrayLinks.map ((objeto, indice) => {
        objeto,
        status; statusLinks[indice];
    }  );
}

module.exports = validaURLs;


