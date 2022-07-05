const fetch= require ('node-fetch');

async function checaStatus (arrayLinks){
  const arrayStatus= await  Promise.all (arrayLinks.map (async url =>{
    const res = await fetch (url)
    return res.status;

  }))
} return arrayStatus;

function geraLink (arrayLinks){
  // objeto ->[valor]
    object.values (objeto);
return arrayLinks.map (objetoLink =>Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
    const Links = geraLink  (arrayLinks);
    const statusLinks = await checaStatus (Links);
    return statusLinks;
}

module.exports = validaURLs;


