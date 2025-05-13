<template>
    <div class="wrapper">
        <nav class="top-nav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/blog">Blog</RouterLink>
            <RouterLink to="/archive">Archive</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>

            <!-- tooltip + external link -->
            <a href="https://github.com/emyhrberg" target="_blank" rel="noopener noreferrer" title="GitHub">
                <img class="logo" src="./assets/erky-logo.png" alt="logo" width="50" height="50" />
            </a>
        </nav>
        <RouterView />
    </div>
</template>

<script>
export default { name: 'App' }
</script>

<style>
/* global look */
body {
    background: #0e0e0e;
    color: #d0d0d0;
    font: 17px 'Source Code Pro', 'Consolas', 'Courier New', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* centered site wrapper */
.wrapper {
    max-width: 46rem;
    margin: 0 auto;
    min-height: 100vh;
}

/* navigation bar */
.top-nav {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
}

.top-nav a {
    color: #fff;
    text-decoration: none;
    padding: .25rem .6rem;
    border-radius: 8px;
    transition: background .15s, color .15s;
}

.top-nav a:hover,
.top-nav .router-link-active {
    background: rgba(255, 174, 120, .15);
    color: #ffae78;
}

/* sub-page layout */
main {
    margin: 2.5rem 0;
    line-height: 1.35;
    text-align: left;
}

hr {
    border: none;
}

</style>
  
