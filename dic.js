

let url = 'https://dicio-api-ten.vercel.app/v2/';
let inputtext = document.querySelector("#input_text");
let btnsearch = document.getElementById("btn");
let result = document.querySelector("#result");


btnsearch.addEventListener("click", () =>{
        
    let writtenword = inputtext.value;

    if (writtenword === "") {
        
        result.innerHTML = ` <p id="meaning"> Escreva alguma palavra no campo de busca!! </p>`
        
    }else{

        fetch(`${url}${writtenword}`).then((response)=>(response.json()).then((data) => {

            result.innerHTML = `

            <h3 id="palavra">${writtenword}</h3>
            
            <p id="meaning"><span>1.</span> ${data[0].meanings[0]}</p>
            <p id="meaning"><span>2.</span> ${data[0].meanings[1]}</ </p>
            <p id="meaning"><span>3.</span> ${data[0].meanings[2]}</ </p>
            
            `
            

        }) ).catch(()=>{

            result.innerHTML = ` <p id="meaning"> Palavra não encontrada! </p>`
            
        })
         
    }
})


