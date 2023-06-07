<script lang="ts">
  import logo from '$lib/shared/images/allmaps-logo.svg'
  import logoInverted from '$lib/shared/images/allmaps-logo-inverted.svg'

  export let dark = true

  const backgroundColor = dark ? '#101656' : '#fff'
</script>

<section
  class="flex flex-col gap-5 justify-center items-center section-no-logo"
  data-background="/masks.svg"
  data-background-color={backgroundColor}
  data-background-size="120%"
>
  <img class="w-44" alt="Allmaps logo" src={dark ? logoInverted : logo} />
  <div class="max-w-lg">
    <slot />
  </div>
</section>
