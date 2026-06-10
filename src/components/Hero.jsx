import hero from "../assets/FOTO.jpg"
function Hero(){

return(

<section
className="hero"
id="inicio"
>

<div className="left">

<h2>

Ingeniera de Sistemas
&
Diseñadora UI/UX

</h2>

<p>

Diseño experiencias digitales
funcionales y atractivas,
combinando desarrollo y diseño
centrado en el usuario.

</p>

<div className="buttons">

<button>

Ver proyectos

</button>

<button>

Contactarme

</button>

</div>

</div>

<div className="right">


<div className="photo">

<img
src={hero}
alt="Ariana"
/>

</div>

</div>

</section>

)

}

export default Hero