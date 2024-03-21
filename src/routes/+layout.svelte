<svelte:head>
   <title>The Vauren Institute</title>
</svelte:head>


<script>import "../app.pcss";</script>
<div class="navbar bg-base-200 shadow-sm fixed z-10"> <!-- bg-base-100 shadow-md -->
    <div class="navbar-center flex-1 max-w-2xl mx-auto justify-center">
        <a class="text-lg">𝓉𝒽𝑒 𝓋𝒶𝓊𝓇𝑒𝓃 𝒾𝓃𝓈𝓉𝒾𝓉𝓊𝓉𝑒</a> 
        <ul class="menu menu-horizontal">
            <li><a href="mailto:vaureninstitute@gmail.com">Contact</a></li>
        </ul>
    </div>
</div>
<slot></slot>