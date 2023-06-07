<script lang="ts">
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'

  import mapThumbnails from './map-thumbnails.json'
  import './style.css'

  function randomFromArray<T>(array: readonly T[]): T {
    return array[Math.floor(Math.random() * array.length)]
  }

  const moods = ['happy', 'excited', 'neutral', 'sad'] as const

  function randomMood() {
    return randomFromArray(moods)
  }

  const colors = [
    'green',
    'purple',
    'red',
    'yellow',
    'orange',
    'pink',
    'blue'
  ] as const

  function randomColor() {
    return randomFromArray(colors)
  }

  function randomFromInterval(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  function randomTransform() {
    const scale = randomFromInterval(0.8, 1.2)
    const rotate = randomFromInterval(-15, 15)
    const translateX = randomFromInterval(-15, 15)
    const translateY = randomFromInterval(-15, 15)

    return `scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`
  }

  let counter = 0
  setInterval(() => {
    counter++
  }, 1000)

  const mapMonstersClass = 'w-28'
</script>

<svelte:head>
  <title>Allmaps in Practice - IIIF Annual Conference 2023</title>
</svelte:head>

<Title>
  <h1 class="text-white">Allmaps<br /> in Practice</h1>
</Title>

<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- // Bert ////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<section class="section-horizontal section-stretch">
  <p>
    3 weeks ago, the IIIF Consortium and the IIIF Maps Technical Specification
    Group (TSG) published the <strong>Georeference Extension</strong> specification.
  </p>
  <a href="https://iiif.io/news/2023/05/15/georef-extension-published/">
    <img
      alt="Georeference Annotation"
      src="/images/iiif-annual-conference-2023/georeference-annotation.jpg"
    />
  </a>
</section>

<section>
  <p>A Georeference Annotation stores data about a georeferenced image</p>
  <pre class="javascript">
		<code data-line-numbers="1-115|17-23|24-28|39-50" data-trim data-noescape
      ><script type="text/template">
{
  "type": "AnnotationPage",
  "@context": [
    "http://www.w3.org/ns/anno.jsonld"
  ],
  "items": [
    {
      "@context": [
        "http://iiif.io/api/extension/georef/1/context.json",
        "http://iiif.io/api/presentation/3/context.json"
      ],
      "id": "https://annotations.allmaps.org/maps/26e384d4efabdb32",
      "type": "Annotation",
      "motivation": "georeferencing",
      "target": {
        "type": "SpecificResource",
        "source": {
          // Reference to a IIIF resource
          "@id": "https://cdm21033.contentdm.oclc.org/digital/iiif/krt/1022",
          "type": "ImageService2",
          "height": 4292,
          "width": 3493
        },
        "selector": {
          // Optional SVG Selector to select the cartographic part of an image
          "type": "SvgSelector",
          "value": "<svg><polygon points=\"196,3324 861,3323 856,4061 369,4057 370,3925 305,3852 191,3851\" /></svg>"
        }
      },
      "body": {
        "type": "FeatureCollection",
        "transformation": {
          "type": "polynomial",
          "options": {
            "order": 1
          }
        },
        "features": [
          {
            // A list of ground control points (GCPs):
            //   resource coordinates and corresponding geospatial coordinates
            "type": "Feature",
            "properties": {
              "resourceCoords": [578, 3779]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [97.1805877, 3.2578402]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [349, 3855]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [95.7576865, 2.8399231]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [834, 3724]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [98.6704303, 3.5887634]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [396, 3629]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [96.1302895, 4.1471109]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [845, 4039]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [98.7838046, 1.7403690]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [252, 3345]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [95.3060364, 5.7804199]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [625, 3441]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [97.4831471, 5.2443204]
            }
          }
        ]
      }
    }
  ]
}
      </script></code
    >
  </pre>
</section>

<section>
  <div class="absolute top-0 left-0 w-full h-full">
    {#each Array(mapThumbnails.length) as _, i (i)}
      <img
        class="absolute w-56"
        style:transform={randomTransform()}
        style:left={randomFromInterval(-200, window.innerWidth) + 'px'}
        style:top={randomFromInterval(-200, window.innerHeight) + 'px'}
        alt="Random map thumbnail"
        src={`/images/iiif-annual-conference-2023/map-thumbnails/${mapThumbnails[i]}`}
      />
    {/each}
  </div>
  <!-- TODO: maps maps maps maps -->
  <p class="px-40">
    Using Georeference Annotations and IIIF, we can now georeference, warp and
    overlay <strong>millions of digitized maps</strong> from institutions around
    the world
  </p>
</section>

<!--
  Carta d'Italia alla scala di 1:500.000 / Touring Club Italiano (1950)
  Vrije Universiteit, Amsterdam
  https://vu.contentdm.oclc.org/digital/collection/krt/id/5842/rec/5
  https://cdm21033.contentdm.oclc.org/digital/iiif/krt/5842/info.json
  https://annotations.allmaps.org/images/7c93afcee077e889
-->
<section class="section-stretch section-horizontal section-full">
  <div class="p-4">
    <p>Carta d'Italia alla scala di 1:500.000 / Touring Club Italiano (1950)</p>
    <p class="font-light">Vrije Universiteit, Amsterdam</p>
  </div>
  <img
    alt="Carta d'Italia alla scala di 1:500.000 / Touring Club Italiano"
    class="image-cover"
    src="/images/iiif-annual-conference-2023/vu-carta-d-italia-alla-scala-di-1-500-000-touring-club-italiano-1950.jpg"
  />
</section>

<!--
  Pianta della Città di Napoli (1815)
  Universiteit Utrecht
  https://objects.library.uu.nl/reader/index.php?obj=1874-372626&lan=nl#page//20/17/88/20178884759236811049121307498336542186.jpg/mode/1up
  https://objects.library.uu.nl/manifest/iiif/v2/1874-372626
  https://annotations.allmaps.org/manifests/0ba97edae7d934bb
-->
<section class="section-stretch section-horizontal section-full">
  <div class="p-4">
    <p>Pianta della Città di Napoli (1815)</p>
    <p class="font-light">Universiteit Utrecht</p>
  </div>
  <img
    alt="Pianta della Città di Napoli"
    class="image-cover"
    src="/images/iiif-annual-conference-2023/uu-pianta-della-citta-di-napoli-1815.jpg"
  />
</section>

<!--
  Plan des fouilles de Pompei (1820)
  Universiteit Utrecht
  https://objects.library.uu.nl/reader/index.php?obj=1874-372629&lan=nl#page//65/23/59/65235916213323990237724153813730719399.jpg/mode/1up
  https://objects.library.uu.nl/manifest/iiif/v2/1874-372629
  https://annotations.allmaps.org/manifests/b900e0f16437cd5e
-->
<section class="section-stretch section-horizontal section-full">
  <div class="p-4">
    <p>Plan des fouilles de Pompei (1820)</p>
    <p class="font-light">Universiteit Utrecht</p>
  </div>
  <img
    alt="Plan des fouilles de Pompei"
    class="image-cover"
    src="/images/iiif-annual-conference-2023/uu-plan-des-fouilles-de-pompei-1820.jpg"
  />
</section>

<!--
  Nuova pianta degli scavi di Pompei (1850)
  Leventhal Map Center at the Boston Public Library
  https://www.digitalcommonwealth.org/search/commonwealth:ht250938v
  https://collections.leventhalmap.org/search/commonwealth:ht250938v/manifest
  https://annotations.allmaps.org/manifests/c49a85fa4a1230ba
-->
<section class="section-stretch section-horizontal section-full">
  <div class="p-4">
    <p>Nuova pianta degli scavi di Pompei (1850)</p>
    <p class="font-light">
      Leventhal Map & Education Center at the Boston Public Library
    </p>
  </div>
  <img
    alt="Nuova pianta degli scavi di Pompei"
    class="image-cover"
    src="/images/iiif-annual-conference-2023/lmec-nuova-pianta-degli-scavi-di-pompei-1850.jpg"
  />
</section>

<!--
  Plan de Pompeia (1890)
  Bibliothèque Nationale de France
  https://gallica.bnf.fr/ark:/12148/btv1b530297246.r=pompei?rk=236052;4
  https://gallica.bnf.fr/iiif/ark:/12148/btv1b530297246/f1/info.json
  https://annotations.allmaps.org/images/a2f8ff9579ddf337
-->
<section class="section-stretch section-horizontal section-full">
  <div class="p-4">
    <p>Plan de Pompeia (1890)</p>
    <p class="font-light">Bibliothèque Nationale de France</p>
  </div>
  <img
    alt="Plan de Pompeia"
    class="image-cover"
    src="/images/iiif-annual-conference-2023/bnf-plan-de-pompeia-1890.jpg"
  />
</section>

<Title dark={false}>
  <h1>Allmaps</h1>
  <p>Open source tools for curating, georeferencing and exploring IIIF maps</p>

  <div
    class="fragment absolute top-0 left-0 w-full h-full bg-white/70 text-left"
  >
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 strong">
          Allmaps works with any IIIF map, no need for complex GIS
          infrastructure, GeoTIFFs or map tiles!
        </p>
      </MapMonster>
    </div>
  </div>
</Title>

<section>
  <ol class="list-decimal px-40 space-y-8">
    <li>
      Georeference any IIIF map with <strong>Allmaps Editor</strong>. Allmaps
      Editor produces Georeference Annotations
    </li>
    <li>
      These annotations can be stored using <strong>Allmaps API</strong>. But
      you can also store them somewhere else, even on your own laptop
    </li>
    <li>
      <strong>Allmaps Viewer</strong> reads Georeference Annotations and can warp
      and overlay IIIF maps in the browser, using WebGL
    </li>
    <li>
      We are working on plugins for <strong>OpenLayers</strong> and
      <strong>Leaflet</strong>. And we've build a proxy server that produces XYZ
      tiles and a CLI to export GeoJSON and GeoTIFF
    </li>
  </ol>
</section>

<section>
  <!-- TODO use data-autoplay for each video element, -->
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    src="/video//iiif-annual-conference-2023/georeferencing-loc-venice.webm"
  />
</section>

<!-- Video showing two LMEC atlases:
  - https://collections.leventhalmap.org/search/commonwealth:vx024b87m/manifest
  - https://collections.leventhalmap.org/search/commonwealth:dj530101x/manifest
-->
<section>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    src="/video//iiif-annual-conference-2023/lmec-atlases.webm"
  />
</section>

<section>
  <a
    href="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fpresentations.allmaps.org%2Fannotations%2Fiiif-annual-conference-2023%2Fpompeii.json"
  >
    <img
      alt="Four maps of Pompeii, shown in Allmaps Viewer"
      src="/images/iiif-annual-conference-2023/pompeii.jpg"
    />
  </a>
</section>

<section class="rainbow-background">
  <a
    href="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fpresentations.allmaps.org%2Fannotations%2Fiiif-annual-conference-2023%2Fpompeii.json"
  >
    <img
      alt="Four maps of Pompeii, colorized with Allmaps Viewer"
      src="/images/iiif-annual-conference-2023/pompeii-colorized.png"
    />
  </a>
</section>

<section>
  <a href="https://latest.allmaps.org">
    <img
      alt="Allmaps Latest"
      src="/images/iiif-annual-conference-2023/allmaps-latest.jpg"
    />
  </a>
</section>

<section class="gap-2 grid-cols-7 grid-rows-5">
  <!-- TODO other monsters! -->
  {#each Array(9) as _, i (`${i}-${counter}`)}
    <div class={mapMonstersClass} style:transform={randomTransform()}>
      <MapMonster
        mood={randomMood()}
        color={randomColor()}
        shape={Math.floor(randomFromInterval(0, 5))}
      />
    </div>
  {/each}
  <div class="col-span-3 row-span-2">
    Institutions around the world are starting to use Allmaps, <strong
      >more than 23.000</strong
    > georeferenced maps are already available
  </div>

  {#each Array(20) as _, i (`${i}-${counter}`)}
    <div class={mapMonstersClass} style:transform={randomTransform()}>
      <MapMonster
        mood={randomMood()}
        color={randomColor()}
        shape={Math.floor(randomFromInterval(0, 5))}
      />
    </div>
  {/each}
</section>

<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- // Jules ////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<section>
  <img
    alt="Colonial Map collection at Leiden University Libraries"
    src="/images/iiif-annual-conference-2023/ubl/ubl-kit-digital-collections.jpg"
  />
  <div class="">
    <p>Leiden University Libraries</p>
  </div>
  <!-- https://digitalcollections.universiteitleiden.nl/view/collection/kitmaps -->
</section>

<section>
  <img
    alt="Excel with geospatial information"
    src="/images/iiif-annual-conference-2023/ubl/ubl-kit-original-excel.jpg"
  />
  <div>
    <p>Excel with geospatial information about the KIT-collection</p>
  </div>
</section>

<section>
  <video
    muted
    data-loop
    data-autoplay
    src="/videos/iiif-annual-conference-2023/ubl-kit-screen-cap-results.mp4"
  />
  <!-- https://observablehq.com/@allmaps/kit-maps -->
</section>

<section>
  <img
    alt="Map of LMEC"
    src="/images/iiif-annual-conference-2023/lmec/lmec-converted-example-landing-page.jpg"
  />
  <div>
    <p>Leventhal Map & Education Center at the Boston Public Library</p>
  </div>
  <!-- https://www.leventhalmap.org -->
</section>

<section>
  <img
    alt="Script to convert Map Warper data"
    src="/images/iiif-annual-conference-2023/lmec/lmec-repo.jpg"
  />
  <div>
    <p>Map Warper data to Georeference Annotations</p>
  </div>
  <!-- https://github.com/allmaps/lmec -->
</section>

<section>
  <img
    alt="LMEC map in Allmaps Editor"
    src="/images/iiif-annual-conference-2023/lmec/lmec-converted-example-editor.jpg"
  />
  <img
    alt="LMEC map in Allmaps Viewer"
    src="/images/iiif-annual-conference-2023/lmec/lmec-converted-example-viewer.jpg"
  />
  <div>
    <p>Map Warper data to Georeference Annotations</p>
  </div>
</section>

<section>
  <video
    muted
    data-loop
    data-autoplay
    src="/videos/iiif-annual-conference-2023/lmec-guide-screen-cap.mp4"
  />
  <div>
    <p>LMEC Guide for Georeferencing Boston Atlasses</p>
  </div>
  <!-- https://cartinal.leventhalmap.org/guides/georeferencing-with-allmaps.html -->
</section>

<section>
  <img
    alt="Atlascopify script"
    src="/images/iiif-annual-conference-2023/lmec/lmec-atlascopify-step1.gif"
  />
  <div>
    <p>Generating GeoTIFs for Atlascope</p>
  </div>
</section>

<section>
  <img
    alt="Atlascopify script"
    src="/images/iiif-annual-conference-2023/lmec/lmec-atlascopify-step2.gif"
  />
  <div>
    <p>Generating GeoTIFs for Atlascope</p>
  </div>
</section>

<section>
  <img
    alt="Atlascopify script"
    src="/images/iiif-annual-conference-2023/lmec/lmec-atlascope.jpg"
  />
  <div>
    <p>Atlascope</p>
  </div>
  <!-- https://www.atlascope.org -->
</section>

<section>
  <img
    alt="Soduco's website"
    src="/images/iiif-annual-conference-2023/soduco/soduco-website.jpg"
  />
  <div>
    <p>SODUCO research project</p>
  </div>
  <!-- https://soduco.github.io -->
</section>

<section>
  <img
    alt="Table of Parisian atlasses"
    src="/images/iiif-annual-conference-2023/soduco/soduco-atlasses-table.jpg"
  />
  <img
    alt="Sheet of atlas"
    src="/images/iiif-annual-conference-2023/soduco/soduco-atlas.jpg"
  />
  <img
    alt="Trade directory"
    src="/images/iiif-annual-conference-2023/soduco/soduco-directories-single.jpg"
  />
  <img
    alt="Comparison between trade directories"
    src="/images/iiif-annual-conference-2023/soduco/soduco-directories-comparison.jpg"
  />
  <div>
    <p>Source material: municipal atlasses and trade directories</p>
  </div>
  <!-- https://soduco.github.io/about/ -->
</section>

<section>
  <img
    alt="Atlas Verniquet in Gallica"
    src="/images/iiif-annual-conference-2023/soduco/soduco-verniquet-gallica.jpg"
  />
  <img
    alt="Atlas Verniquet in the David Rumsey Map Collection"
    src="/images/iiif-annual-conference-2023/soduco/soduco-verniquet-rumsey.jpg"
  />
  <div>
    <p>Atlas Verniquet in Gallica and the David Rumsey Map Collection</p>
  </div>
  <!-- https://soduco.github.io/AllmapsAnnotations/ -->
</section>

<section>
  <img
    alt="Scripts to convert QGIS exports to Georeference Annotations"
    src="/images/iiif-annual-conference-2023/soduco/soduco-scripts.jpg"
  />
  <div>
    <p>From QGIS to Georeference Annotations</p>
  </div>
  <!-- https://github.com/soduco/allmaps_annotations -->
</section>

<section>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img
    alt="Pull request of Soduco researcher for Image API 1.1 support"
    src="/images/iiif-annual-conference-2023/soduco/soduco-pr.jpg"
  />
  <div class="">
    <p>Adding Image API 1.1 support for Gallica</p>
  </div>
  <!-- https://github.com/allmaps/allmaps/pull/20 -->
</section>

<section>
  <video
    muted
    data-loop
    data-autoplay
    src="/videos/iiif-annual-conference-2023/soduco-verniquet-viewer-screen-capture.mp4"
  />
  <div class="">
    <p>Verniquet Atlas (1789-1799) in Allmaps</p>
    <p class="font-light">Gallica/David Rumsey Map Collection</p>
  </div>
  <!-- https://soduco.github.io/AllmapsAnnotations/ -->
</section>

<section>
  <video
    muted
    data-loop
    data-autoplay
    src="/videos/iiif-annual-conference-2023/soduco-viewer-municipal-atlas.mp4"
  />
  <div class="">
    <p>Municipal Atlas (1888) in Allmaps</p>
  </div>
  <!-- https://soduco.github.io/AllmapsAnnotations/ -->
</section>

<section>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img
    alt="Different types of image segmentation"
    src="/images/iiif-annual-conference-2023/soduco/soduco-images-segmentation-1.jpg"
  />
  <img
    alt="Vectorizing a map"
    src="/images/iiif-annual-conference-2023/soduco/soduco-images-segmentation-2.jpg"
  />
  <div>
    <p>Generating masks with image segmentation?</p>
  </div>
  <!-- https://icdar21-mapseg.github.io -->
</section>

<section>
  <img
    alt="Observable Notebook demonstrating the Allmaps OpenLayers Plugin"
    src="/images/iiif-annual-conference-2023/ohm/ohm-notebook-open-layers-plugin.jpg"
  />
  <div>
    <p>Allmaps OpenLayers Plugin</p>
  </div>
  <!-- https://observablehq.com/@allmaps/allmaps-openlayers-plugin -->
</section>

<section>
  <video
    muted
    data-loop
    data-autoplay
    src="/videos/iiif-annual-conference-2023/ohm-xyz-screen-cap.mp4"
  />
  <div>
    <p>XYZ Tile Server for OpenHistoricalMap</p>
  </div>
  <!-- https://observablehq.com/@allmaps/allmaps-tile-server -->
</section>

<section>
  <img
    alt="Mid term presentations"
    src="/images/iiif-annual-conference-2023/berlage/berlage-photo-mid-term.jpg"
  />
  <div>
    <p>
      Collaboration with The Berlage Center for Advanced Studies in Architecture
      and Urban Design
    </p>
  </div>
  <!-- https://theberlage.nl -->
</section>

<section>
  <img
    alt="Georeferenced river maps in the Allmaps Viewer"
    src="/images/iiif-annual-conference-2023/berlage/berlage-viewer-river-maps.jpg"
  />
  <div>
    <p>Georeferencing River Maps</p>
  </div>
  <!-- https://github.com/theberlage/river-maps -->
</section>

<section>
  <img
    alt="Annotations in Placemark"
    src="/images/iiif-annual-conference-2023/berlage/berlage-placemark-annotations-chao.jpg"
  />
  <div>
    <p>Annotating in Placemark</p>
  </div>
  <!-- https://www.placemark.io -->
</section>

<!-- <section>
  <img
    alt="Annotations in Placemark"
    src="/images/iiif-annual-conference-2023/berlage/berlage-placemark-annotations-lenneke.jpg"
  />
  Annotating in Placemark
</section> -->

<section>
  <img
    alt="Feedback in Placemark"
    src="/images/iiif-annual-conference-2023/berlage/berlage-placemark-final-conversation-2.jpg"
  />
  <div>
    <p>And even feedback!</p>
  </div>
</section>

<section>
  <img
    alt="River Atlas exhibition"
    src="/images/iiif-annual-conference-2023/berlage/berlage-exhibition-photo.jpg"
  />
  <div>
    <p>River Atlas</p>
    <p class="font-light">Physical exhibition</p>
  </div>
</section>

<section>
  <video
    muted
    data-loop
    data-autoplay
    src="/videos/iiif-annual-conference-2023/berlage-river-atlas-screen-cap.mp4"
  />
  <div>
    <p>River Atlas</p>
    <p class="font-light">Digital app</p>
    <!-- https://riveratlas.theberlage.nl -->
  </div>
</section>

<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- // Bert & Jules /////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<section class="section-horizontal section-stretch section-no-logo">
  <p>
    See <a class="underline" href="https://allmaps.org">allmaps.org</a> and
    <a class="underline" href="https://github.com/allmaps">github.com/allmaps</a
    >
    for more details about Allmaps!
  </p>
  <video
    muted
    data-loop
    data-autoplay
    src="/video//iiif-annual-conference-2023/allmaps-website.webm"
  />
</section>

<section class="section-no-logo section-horizontal section-stretch">
  <p>Thanks!</p>

  <MapMonster mood="excited" color="purple">
    <p class="text-left">Scan this QR code to view this presentation:</p>
    <a href="https://presentations.allmaps.org/iiif-annual-conference-2023">
      <img
        class="w-full"
        alt="QR code that links to these slides"
        src="/images/iiif-annual-conference-2023/qr-code.svg"
      /></a
    >
  </MapMonster>
</section>

<section>Video about Bryan and pin!</section>
