<script lang="ts">
  import { onMount, tick } from 'svelte'
  import { page } from '$app/stores'
  import Reveal from 'reveal.js'

  // import { Logo } from '@allmaps/ui'
  import logo from '$lib/shared/images/allmaps-logo.svg'

  import revealConfig from './reveal.config.js'

  import '@allmaps/ui/css/fonts.css'
  import 'reveal.js/dist/reveal.css'
  import 'reveal.js/plugin/highlight/monokai.css'

  import './theme.css'
  import './app.css'

  let deck: Reveal.Api

  const showIndex = $page.route.id === '/'

  let slideIndex = 0

  function handleLogoClick(event: MouseEvent) {
    if (event.shiftKey) {
      deck.prev()
    } else {
      deck.next()
    }
  }

  function handleSlideChanged(event: unknown) {
    if (event && typeof event === 'object' && 'indexh' in event) {
      slideIndex = event.indexh as number
    }
  }

  onMount(async () => {
    if (!showIndex) {
      await tick()
      deck = new Reveal(revealConfig)
      deck.initialize()

      deck.on('ready', handleSlideChanged)
      deck.on('slidechanged', handleSlideChanged)
    }
  })
</script>

{#if showIndex}
  <slot />
{:else}
  <div class="reveal">
    <div class="slides">
      <slot />
    </div>
  </div>
  {#if slideIndex > 0}
    <div class="absolute bottom-0 right-0 z-50 p-5">
      <div class="w-14">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img
          class="w-full inline cursor-pointer"
          alt="Allmaps logo"
          src={logo}
          on:click={handleLogoClick}
        />
      </div>
    </div>
  {/if}
{/if}
