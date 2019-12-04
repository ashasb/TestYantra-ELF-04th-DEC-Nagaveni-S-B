b.addEventListener('click',function(){

  let t=document.getElementById("t");
let b=document.getElementById("b");
let r=t.value
  url1='http://www.omdbapi.com/?s='

  url3='&apikey=c648746c'


  let url2=url1.concat(r)
 let url4=url2.concat(url3)
console.log(url4);

fetch(url4)
  .then(response => response.json())
  .then(json => 
    {
            const {Title,Poster,Search}=json
            console.log(Title,Poster)
            for (const key in Search) {
              const {Title,Poster}=Search[key]
              console.log(json)
            const div1= document.createElement("div");
            div1.className="card"
            const div2= document.createElement("div");
            div2.className="card-body"
            const img=document.createElement("img")
            img.src=Poster
            img.classList.add("card-img-top","card-img")
            const p1=document.createElement("p")
            p1.className="card-text"
            p1.textContent =Title
          
            
            div2.appendChild(p1)
            

            
            div1.appendChild(img)
            div1.appendChild(div2)

            document.body.appendChild(div1)
            
            }
           
            
           
    })
    
  