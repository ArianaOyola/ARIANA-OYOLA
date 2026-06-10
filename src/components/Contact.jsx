function Contact(){

return(

<section
className="contact"
id="contacto"
>

<div className="contactLeft">

<p className="sectionTitle">

CONTACTO

</p>

<h2>

¿Creamos algo
increíble?

</h2>

<p>

Si tienes una idea,
un proyecto o quieres
conectar conmigo,
escríbeme.

</p>

<div className="contactInfo">

<div className="infoCard">

📩

<span>

Correo

</span>

</div>

<div className="infoCard">

📍

<span>

Perú

</span>

</div>

<div className="infoCard">

✨

<span>

Disponible

</span>

</div>

</div>

</div>

<div className="contactForm">

<input placeholder="Tu nombre"/>

<input placeholder="Correo"/>

<textarea
placeholder="Cuéntame tu idea..."
></textarea>

<button>

Enviar mensaje

</button>

</div>

</section>

)

}

export default Contact