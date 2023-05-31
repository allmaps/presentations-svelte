<script lang="ts">
  import logoInverted from '$lib/shared/images/allmaps-logo-inverted.svg'
</script>

<section
  class="flex flex-col gap-5 justify-center items-center text-white"
  data-background="/masks.svg"
  data-background-color="#101656"
  data-background-size="120%"
>
  <img class="w-44" alt="Allmaps logo" src={logoInverted} />
  <slot />
</section>
