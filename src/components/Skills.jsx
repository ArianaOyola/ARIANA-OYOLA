const skills=[

["HTML",95],
["CSS",95],
["JavaScript",90],
["React",85],
["PHP",85],
["MySQL",90],
["Figma",95]

]

function Skills(){

return(

<section
className="skills"
id="habilidades"
>

<p className="sectionTitle">

HABILIDADES

</p>

<h2>

Tecnologías y herramientas

</h2>

<div className="skillContainer">

{

skills.map((s,index)=>(

<div
key={index}
className="skill"
>

<div
className="top"
>

<span>

{s[0]}

</span>

<span>

{s[1]}%

</span>

</div>

<div
className="bar"
>

<div

className="fill"

style={{
width:
`${s[1]}%`
}}

>

</div>

</div>

</div>

))

}

</div>

</section>

)

}

export default Skills