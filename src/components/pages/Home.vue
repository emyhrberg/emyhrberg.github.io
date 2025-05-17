<template>
    <main>
        <h1>Erky, Erik, and more…</h1>
        <hr />

        <p class="intro">
            I’m a 23-year-old aspiring software engineer from Sweden.
        </p>

        <p>Let’s make this quick… relevant links:</p>

        <ul class="link-list">
            <li>- my <ExternalLink href="https://github.com/emyhrberg">GitHub</ExternalLink></li>
            <li>- my <ExternalLink href="https://discord.gg/JNFYABQM">Discord</ExternalLink></li>
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

</style>
  
