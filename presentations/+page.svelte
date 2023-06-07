<script lang="ts">
  const presentationImports = import.meta.glob('./**/+page.svelte')
  const presentationFiles = Object.keys(presentationImports)

  const presentations = presentationFiles.map((path: string) =>
    path.replace('./', '').replace('/+page.svelte', '')
  )
</script>

<article class="p-8 w-80 mx-auto">
  <h1 class="py-2 font-bold">Allmaps Presentations</h1>
  <ul class="list-disc">
    {#each presentations as presentation}
      <li>
        <a class="underline" data-sveltekit-reload href={presentation}
          >{presentation}</a
        >
      </li>
    {/each}
  </ul>
  <p class="py-2">
    The source code of these presentations can be found on <a href="https://github.com/allmaps/presentations">GitHub</a>.
  </p>
</article>
