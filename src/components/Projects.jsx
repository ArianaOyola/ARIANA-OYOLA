const projects=[

{
title:
"Sistema de Pago Automatizado",

description:
"Aplicación orientada a mejorar la experiencia de compra.",

tech:
"React • PHP • MySQL",

emoji:"🛒"

},

{
title:
"Healthy Life",

description:
"Sistema web para gestión de citas médicas.",

tech:
"PHP • MySQL",

emoji:"🏥"

},

{
title:
"Dashboard Business Intelligence",

description:
"Visualización y análisis de datos.",

tech:
"Power BI",

emoji:"📊"

}

]

function Projects(){

return(

<section
className="projects"
id="proyectos"
>

<p className="sectionTitle">

PROYECTOS

</p>

<h2>

Proyectos destacados

</h2>

<div
className="projectGrid"
>

{

projects.map((item,index)=>(

<div
className="project"
key={index}
>

<div
className="projectImage"
>

{item.emoji}

</div>

<h3>

{item.title}

</h3>

<p>

{item.description}

</p>

<span>

{item.tech}

</span>

<button>

Ver proyecto

</button>

</div>

))

}

</div>

</section>

)

}

export default Projects