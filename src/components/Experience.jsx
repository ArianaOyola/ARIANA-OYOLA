const experience=[

{
year:"2022",
title:"Inicio Ingeniería de Sistemas"
},

{
year:"2023",
title:"Desarrollo de proyectos web"
},

{
year:"2024",
title:"Proyecto Big Data"
},

{
year:"2025",
title:"Sistema Joanis Importadora"
},

{
year:"2025",
title:"Noveno ciclo"
}

]

function Experience(){

return(

<section
className="experience"
>

<p className="sectionTitle">

EXPERIENCIA

</p>

<h2>

Trayectoria académica

</h2>

<div className="timeline">

{

experience.map((e,index)=>(

<div
key={index}
className="timeCard"
>

<h3>

{e.year}

</h3>

<p>

{e.title}

</p>

</div>

))

}

</div>

</section>

)

}

export default Experience