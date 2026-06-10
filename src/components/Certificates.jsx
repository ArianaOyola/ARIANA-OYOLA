const certificates=[

{
title:"Google UX Design",
school:"Coursera",
emoji:"🏆"
},

{
title:"Power BI Data Analyst",
school:"Microsoft",
emoji:"📊"
},

{
title:"Scrum Fundamentals",
school:"SCRUMstudy",
emoji:"📜"
}

]

function Certificates(){

return(

<section
className="certificates"
id="certificados"
>

<p className="sectionTitle">

CERTIFICADOS

</p>

<h2>

Cursos y certificaciones

</h2>

<div
className="certificateGrid"
>

{

certificates.map((item,index)=>(

<div
className="certificate"
key={index}
>

<div
className="certificateImage"
>

{item.emoji}

</div>

<h3>

{item.title}

</h3>

<p>

{item.school}

</p>

<button>

Ver certificado

</button>

</div>

))

}

</div>

</section>

)

}

export default Certificates