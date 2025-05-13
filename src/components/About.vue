<template>
    <main>
        <h1>About</h1>
        <hr />

        <p>Hello! I'm a programmer and a student.</p>

        <p>
            I’m currently studying at Linköping University, where I’m pursuing <br>
            <a class="ext-link" href="https://studieinfo.liu.se/en/program/6CMJU/5144#overview" target="_blank"
                rel="noopener noreferrer">
                <span>a M.Sc. in Computer Science and Software Engineering</span>
            </a>.
        </p>

    </main>
</template>

<script>
export default { name: 'AboutPage' }
</script>

<style scoped>
.ext-link,
.ext-link:visited {
    color: var(--accent);
    text-decoration: none;
}

.ext-link span {
    text-decoration: underline;
}

.ext-link:hover {
    color: #467ccc;
}
</style>
  
