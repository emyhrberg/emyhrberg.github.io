<template>
    <main>
        <h1>Erky, Erik, and more…</h1>
        <hr />

        <p class="intro">
            I’m a 23-year-old aspiring software engineer from Sweden.
        </p>

        <p>Let’s make this quick… relevant links:</p>

        <ul class="link-list">
            <li>- my <span><a href="https://github.com/emyhrberg" target="_blank"
                        rel="noopener noreferrer">GitHub</a></span></li>
            <li>- my <span><a href="https://discord.gg/JNFYABQM" target="_blank"
                        rel="noopener noreferrer">Discord</a></span></li>
        </ul>

    </main>
</template>

<script>
export default { name: 'HomePage', };
</script>

<style scoped>

.link-list {
    list-style: none;
    padding: 0;
}

.link-list span a {
    color: var(--accent);
    text-decoration: underline;
    transition: color 0.15s;
    cursor: pointer;
}

.link-list span a:hover {
    color: #467ccc;
}

</style>
  
