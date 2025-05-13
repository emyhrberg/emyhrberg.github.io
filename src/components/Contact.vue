<template>
    <main>
        <h1>Contact</h1>
        <hr />
        <div class="contact-info">
            <div class="label">Email:</div>
            <div class="value">erimy268@student.liu.se</div>
            <div class="label">Discord:</div>
            <div class="value">erkyy</div>
        </div>
    </main>
</template>

<script>
export default { name: 'ContactPage' }
</script>
  
<style scoped>
.contact-info {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 0.25rem 1rem;
    /* row-gap, column-gap */
    margin-top: 1rem;
}

.label {
    font-weight: bold;
}

.value {
    word-break: break-word;
    /* ensures long emails don't overflow */
}
</style>