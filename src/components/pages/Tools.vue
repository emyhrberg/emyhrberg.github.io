<template>
    <main>
        <h1>Tools</h1>
        <hr />
        <p> Here is a collection of miscellaneous tools I find useful:</p>

        <div class="list-row">
            <div class="list-block">
                <p><b>Applications</b></p>
                <ul class="link-list">
                    <li>- <ExternalLink href="https://getsharex.com/">ShareX</ExternalLink> (screencast)</li>
                </ul>
            </div>

            <div class="list-block">
                <p><b>Chrome Extensions</b></p>
                <ul class="link-list">
                    <li>- <ExternalLink href="https://chromewebstore.google.com/detail/color-picker-for-chrome/clldacgmdnnanihiibdgemajcfkmfhia?hl=en-US">Color Picker</ExternalLink></li>
                    <li>- <ExternalLink href="https://chromewebstore.google.com/detail/font-detector/kjgeglpblmplmceadclemoechgnonlnf">Font Detector</ExternalLink></li>
                    <li>- <ExternalLink href="https://chromewebstore.google.com/detail/github-loc/clfbbldiigihjkignlkngblahkpalmhh">GitHub LOC</ExternalLink></li>
                    <li>- <ExternalLink href="https://chromewebstore.google.com/detail/leetsync-leetcode-to-gith/ppkbejeolfcbaomanmbpjdbkfcjfhjnd?hl=en-US">LeetSync</ExternalLink></li>
                    <li>- <ExternalLink href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en-US">Tampermonkey</ExternalLink> (scripts)</li>
                </ul>
            </div>

            <div class="list-block">
                <p><b>Online Tools</b></p>
                <ul class="link-list">
                    <li>- <ExternalLink href="https://cobalt.tools/">Cobalt Tools</ExternalLink> (download youtube videos)</li>
                    <li>- <ExternalLink href="https://onpaste.com/">OnPaste</ExternalLink> (draw on images)</li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
export default { 
    name: 'ToolsPage'
}
</script>


<style scoped>
/* Only flex the lists, not the header stuff */
.list-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 1rem;
}

.list-block {
  flex: 1 1 200px; /* allows resizing and wrapping */
  min-width: 200px; /* ensures reasonable base width */
}

/* Style the lists */
.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.link-list li {
  margin-bottom: 0.5rem;
}
</style>


  
  
