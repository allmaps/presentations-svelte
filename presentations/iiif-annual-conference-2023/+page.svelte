<script lang="ts">
  import Title from '$lib/components/Title.svelte'
</script>

<Title>
  <h1 class="text-white">Allmaps<br /> in Practice</h1>
</Title>

<section class="flex-row">
  <!-- <div class="flex flex-row"> -->
  <p class="w-1/2">
    3 weeks ago, the IIIF Consortium and the IIIF Maps Technical Specification
    Group (TSG) published the Georeference Extension specification.
  </p>
  <a
    class="w-1/2"
    href="https://iiif.io/news/2023/05/15/georef-extension-published/"
  >
    <img
      alt="Georeference Annotation"
      src="/images/georeference-annotation.jpg"
    />
  </a>
  <!-- </div> -->
</section>

<section>
  Millions of IIIF maps from institutions around the world, now possible to
  georeference, etc, etc
</section>

<!--
  Carta d'Italia alla scala di 1:500.000 / Touring Club Italiano (1950)
  Vrije Universiteit, Amsterdam
  https://vu.contentdm.oclc.org/digital/collection/krt/id/5842/rec/5
  https://cdm21033.contentdm.oclc.org/digital/iiif/krt/5842/info.json
  https://annotations.allmaps.org/images/7c93afcee077e889
-->
<section class="flex-row p-0 gap-0">
  <div class="w-1/2 p-4">
    Carta d'Italia alla scala di 1:500.000 / Touring Club Italiano (1950), Vrije
    Universiteit, Amsterdam
  </div>
  <img
    alt="Carta d'Italia alla scala di 1:500.000 / Touring Club Italiano"
    class="w-1/2 h-full object-cover object-center"
    src="/images/vu-carta-d-italia-alla-scala-di-1-500-000-touring-club-italiano-1950.jpg"
  />
</section>

<!--
  Pianta della Città di Napoli (1815)
  Universiteit Utrecht
  https://objects.library.uu.nl/reader/index.php?obj=1874-372626&lan=nl#page//20/17/88/20178884759236811049121307498336542186.jpg/mode/1up
  https://objects.library.uu.nl/manifest/iiif/v2/1874-372626
  https://annotations.allmaps.org/manifests/0ba97edae7d934bb
-->
<section class="flex-row p-0 gap-0">
  <div class="w-1/2 p-4">
    Pianta della Città di Napoli (1815) Universiteit Utrecht
  </div>
  <img
    alt="Pianta della Città di Napoli"
    class="w-1/2 h-full object-cover object-center"
    src="/images/uu-pianta-della-citta-di-napoli-1815.jpg"
  />
</section>

<!--
  Plan des fouilles de Pompei (1820)
  Universiteit Utrecht
  https://objects.library.uu.nl/reader/index.php?obj=1874-372629&lan=nl#page//65/23/59/65235916213323990237724153813730719399.jpg/mode/1up
  https://objects.library.uu.nl/manifest/iiif/v2/1874-372629
  https://annotations.allmaps.org/manifests/b900e0f16437cd5e
-->
<section class="flex-row p-0 gap-0">
  <div class="w-1/2 p-4">
    Plan des fouilles de Pompei (1820), Universiteit Utrecht
  </div>
  <img
    alt="Plan des fouilles de Pompei"
    class="w-1/2 h-full object-cover object-center"
    src="/images/uu-plan-des-fouilles-de-pompei-1820.jpg"
  />
</section>

<!--
  Nuova pianta degli scavi di Pompei (1850)
  Leventhal Map Center at the Boston Public Library
  https://www.digitalcommonwealth.org/search/commonwealth:ht250938v
  https://collections.leventhalmap.org/search/commonwealth:ht250938v/manifest
  https://annotations.allmaps.org/manifests/c49a85fa4a1230ba
-->
<section class="flex-row p-0 gap-0">
  <div class="w-1/2 p-4">
    Nuova pianta degli scavi di Pompei (1850), Leventhal Map Center at the
    Boston Public Library
  </div>
  <img
    alt="Nuova pianta degli scavi di Pompei"
    class="w-1/2 h-full object-cover object-center"
    src="/images/lmec-nuova-pianta-degli-scavi-di-pompei-1850.jpg"
  />
</section>

<!--
  Plan de Pompeia (1890)
  Bibliothèque Nationale de France
  https://gallica.bnf.fr/ark:/12148/btv1b530297246.r=pompei?rk=236052;4
  https://gallica.bnf.fr/iiif/ark:/12148/btv1b530297246/f1/info.json
  https://annotations.allmaps.org/images/a2f8ff9579ddf337
-->
<section class="flex-row p-0 gap-0">
  <div class="w-1/2 p-4">
    Plan de Pompeia (1890), Bibliothèque Nationale de France
  </div>
  <img
    alt="Plan de Pompeia"
    class="w-1/2 h-full object-cover object-center"
    src="/images/bnf-plan-de-pompeia-1890.jpg"
  />
</section>

<section>
  Allmaps: Open source tools for curating, georeferencing and exploring IIIF maps
</section>

<section>Georeference Annotations: Used by all Allmaps components</section>

<section class="h-full flex items-center">
  Works with any IIIF map, no need for GIS infrastructure
</section>

<section>Show Editor with Pompei map</section>

<!--
Other maps:
- Vesuvius: https://annotations.allmaps.org/maps/af023bfb3cebfef2
- Selerno: https://www.davidrumsey.com/luna/servlet/iiif/m/RUMSEY~8~1~328487~90096994/manifest
-->

<!-- Allmaps Latest, nu al 23,000 maps-->
<!-- New Allmaps Viewer, stitch together -->

<!-- LMEC STITCH together -->
<!-- https://collections.leventhalmap.org/search/commonwealth:vx024b87m/manifest  -->
<!-- OF: -->
<!-- https://collections.leventhalmap.org/search/commonwealth:dj530101x/manifest  -->

<!--

Outline voor presentatie

Idee: alles kan ook lokaal, plaatjes, filmpjes, maar geen iframes
Filmpjes opnemen met Kap

Abstract: https://docs.google.com/document/d/1fYXC0qp6O3Mq3murwbCuc1c3ukiyw0S70W0EZ8RR40E/edit?usp=sharing

Allmaps in Practice:

Introduction (7m):

- What is Allmaps?
- open source, partnerships, funding, etc.
- Publication of the Georef spec
- short walk-through, from manifest to georef to viewer
- Almaps Latest
- Launch of the new Allmaps Viewer

Use cases (8m):

- 1 Institutions
- 1.1 Leiden University Libraries - DATA IMPORT & CONVERSION
- Many institutions already have georeferencing data which is unused. How to make it useful?
- Example of existing data (Hoekpunten KIT?)
- Example of converted georef annotation
- Even inherited/incomplete data can be used!
- 1.2 LMEC @ Boston Public Library – GEOREFERENCING WITH ALLMAPS
- Used Map Warper and are switching to Allmaps
Converting existing data
- Crowd sourcing
- Making sharable [guides](https://cartinal.leventhalmap.org/guides/georeferencing-with-allmaps.html#checklist-table-of-contents)
- ask for collections (latest.allmaps.org only shows individual maps)
- Converting to other formats
- Testing components
- 2. Researchers
- 2.1 SODUCO - RESEARCH WORKFLOWS WITH IIIF & ALLMAPS
- Building research projects on top of institutional APIs
- Close comparison between different editions of maps: Gallica vergelijken met Rumsey
- 2.2 OpenHistoricalMap COMPATIBILITY WITH EXISTING GIS APPLICATIONS
- XYZ tile server for compatibility with GIS software
- 3. Educators
- 3.1 The Berlage (River Maps) STORYTELLING WITH MAPS
- Collection historical material from different sources
- Studying designs in context
- Working accross scales
- Using Placemark
- Digital/physical relationship

Conclusion (5m)

- Plans
- Allmaps Viewer
- thin plate spline
- Allmaps Editor
- Improving the georeferencer tool
- Error visualisation
- Editing JSON
- Versioning
- Custom reference map
- Allmaps Curator
- Managing Crowd Sourcing projects
- Allmaps Explorer
- Finding maps accross collections
- Organisation
- How to collaborate -->

<svelte:head>
  <title>Allmaps in Practice - IIIF Annual Conference 2023</title>
</svelte:head>
