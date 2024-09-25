<script lang="ts">
  import logo from '$lib/shared/images/allmaps-logo.svg'
  import logoInverted from '$lib/shared/images/allmaps-logo-inverted.svg'

  export let dark = true
</script>

<section
  class="flex flex-col gap-5 justify-center items-center section-no-logo"
  style="
    background: #fff;
    background-image: url(/masks.svg) {dark
    ? ', radial-gradient(circle at 50% 50%, #25318f, #101656)'
    : ''};
    background-size: 120% {dark ? ', cover' : ''};
    background-position: center {dark ? ', center' : ''};
  "
>
  <img class="w-44" alt="Allmaps logo" src={dark ? logoInverted : logo} />
  <div class="max-w-lg">
    <slot />
  </div>
</section>
