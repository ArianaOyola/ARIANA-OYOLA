function Navbar({darkMode,toggleTheme}){

return(

<nav>

<div className="logo">

<img
src="/logo.png"
alt="Ariana Oyola"
/>

</div>
<div className="navContainer">

<ul>

<li>
<a href="#inicio">
Inicio
</a>
</li>

<li>
<a href="#sobre">
Sobre mí
</a>
</li>

<li>
<a href="#habilidades">
Habilidades
</a>
</li>

<li>
<a href="#certificados">
Certificados
</a>
</li>

<li>
<a href="#proyectos">
Proyectos
</a>
</li>

<li>
<a href="#contacto">
Contacto
</a>
</li>

</ul>

<button
className="themeBtn"
onClick={toggleTheme}
>

{darkMode ? "☀️":"🌙"}

</button>

</div>

</nav>

)

}

export default Navbar