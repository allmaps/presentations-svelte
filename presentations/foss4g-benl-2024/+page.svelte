<script lang="ts">
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'

  import { currentSlide } from '$lib/shared/stores/reveal.js'

  import mapThumbnails from './map-thumbnails.json'

  function shuffle<T>(array: readonly T[]): T[] {
    let arrayCopy: T[] = [...array]

    let currentIndex = array.length,
      randomIndex

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
        arrayCopy[randomIndex],
        arrayCopy[currentIndex]
      ]
    }

    return arrayCopy
  }

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

  let mapMonsterInterval1: number | undefined
  let mapMonsterInterval2: number | undefined
  let mapMonsterCounter = 0

  const mapMonstersClass = 'w-28'

  let sectionThumbnails: HTMLElement
  let sectionMapMonsters1: HTMLElement
  let sectionMapMonsters2: HTMLElement

  let mapThumbnailInterval: number | undefined
  let shuffledMapThumbnails = shuffle(mapThumbnails)
  let slicedMapThumbnails: string[] = []
  let slideSeconds = 0

  function newSlide(currentSlide: HTMLElement) {
    if (sectionThumbnails === currentSlide) {
      if (!mapThumbnailInterval) {
        mapThumbnailInterval = setInterval(() => {
          slicedMapThumbnails = shuffledMapThumbnails.slice(
            0,
            Math.min(slicedMapThumbnails.length + 1, mapThumbnails.length)
          )
        }, 200)
      }
    } else {
      slicedMapThumbnails = []
      clearInterval(mapThumbnailInterval)
      mapThumbnailInterval = undefined
    }

    if (sectionMapMonsters1 === $currentSlide) {
      if (!mapMonsterInterval1) {
        mapMonsterInterval1 = setInterval(() => {
          mapMonsterCounter++
        }, 1000)
      }
    } else {
      mapMonsterCounter = 0
      clearInterval(mapMonsterInterval1)
      mapMonsterInterval1 = undefined
    }

    if (sectionMapMonsters2 === $currentSlide) {
      if (!mapMonsterInterval2) {
        mapMonsterInterval2 = setInterval(() => {
          mapMonsterCounter++
        }, 1000)
      }
    } else {
      mapMonsterCounter = 0
      clearInterval(mapMonsterInterval2)
      mapMonsterInterval2 = undefined
    }
  }

  slideSeconds = 0
  setInterval(() => slideSeconds++, 1000)

  $: {
    if ($currentSlide) {
      newSlide($currentSlide)
    }
  }
</script>

<svelte:head>
  <title>FOSS4G BE+NL 2024</title>
</svelte:head>

<Title>
  <h2 class="text-white">Allmaps</h2>
  <p class="text-white r-fit-text">FOSS4G BE+NL 2024</p>
</Title>

<Title dark={false}>
  <h1>Allmaps</h1>
  <p>Open source tools for curating, georeferencing and exploring IIIF maps</p>
  <div
    class="fragment absolute top-0 left-0 w-full h-full bg-white/70 text-left text-4xl"
  >
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="neutral" color="green">
        <p class="p-4 max-w-xl">IIIF maps?</p>
      </MapMonster>
    </div>
  </div>
  <div class="fragment absolute top-0 left-0 w-full h-full text-left text-4xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 max-w-xl">
          International<br />Image<br />Interoperability<br />Framework!
        </p>
      </MapMonster>
    </div>
  </div>
  <div class="fragment absolute top-0 left-0 w-full h-full text-left text-4xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="neutral" color="green">
        <p class="p-4 max-w-xl">
          International<br />Image<br />Interoperability<br />Framework?
        </p>
      </MapMonster>
    </div>
  </div>
  <div class="fragment absolute top-0 left-0 w-full h-full text-left text-4xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <ul class="px-12 py-4 max-w-xl space-y-8">
          <li>
            <strong>Open standards</strong> for sharing images and metadata.
          </li>
          <li>Used by <strong>archives</strong>, libraries and museums.</li>
          <li>
            Serving high resolution images using <strong
              >tiles and zoomlevels</strong
            >.
          </li>
        </ul>
      </MapMonster>
    </div>
  </div>
</Title>

<section>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/video/iiif-annual-conference-2023/georeferencing-loc-venice.webm"
  />
</section>

<section>
  <p>
    <strong>Georeference Annotation:</strong>
    <br /> Web Annotation that contains <br />all data required to georeference
    a IIIF image
  </p>
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
            // resource coordinates and corresponding geospatial coordinates
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
  <div class="fragment absolute top-0 left-0 w-full h-full text-left text-3xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="purple">
        <p class="p-4">
          Annotations can be stored <strong>locally or on a url</strong>:
        </p>
        <p class="p-4">
          <code class="text-2xl"
            >https://annotations.allmaps.org/maps/26e384d4efabdb32</code
          >
        </p>
      </MapMonster>
    </div>
  </div>
</section>

<section class="section-horizontal section-stretch">
  <div class="space-y-4 text-4xl">
    <p>IIIF Consortium published the</p>
    <p>
      <strong>Georeference Extension</strong>
    </p>
    <p>to the IIIF API, specifying</p>
    <p>Georeference Annotations</p>
  </div>
  <a href="https://iiif.io/news/2023/05/15/georef-extension-published/">
    <img
      loading="lazy"
      alt="Georeference Annotation"
      src="/images/iiif-annual-conference-2023/georeference-annotation.jpg"
    />
  </a>
</section>

<section bind:this={sectionThumbnails}>
  <div class="absolute top-0 left-0 w-full h-full">
    {#each slicedMapThumbnails as url, i (i)}
      <img
        class="absolute w-56"
        style:transform={randomTransform()}
        style:left={randomFromInterval(-200, window.innerWidth) + 'px'}
        style:top={randomFromInterval(-200, window.innerHeight) + 'px'}
        alt="Random map thumbnail"
        src={`/images/iiif-annual-conference-2023/map-thumbnails/${url}`}
      />
    {/each}
  </div>
  <p class="p-4 z-50 bg-white/80 rounded-lg max-w-4xl">
    Using Georeference Annotations <br />
    we can georeference, warp and overlay <br />
    <strong>millions of digitized IIIF maps</strong> <br />
    from institutions around the world
  </p>
</section>

<section>
  <!--
  Mention: compare with current toolchain:
  - You can currently georeference in QGIS
  - Steps of downloading and rehosting are omitted
  -->
  <p class="p-8">
    <strong>Allmaps is a toolbox</strong> <br />for working with Georeference
    Annotations
  </p>
  <div class="grid grid-cols-6 gap-10 text-left p-4 text-3xl">
    <div class="fragment col-span-2 font-bold" data-fragment-index="1">
      Allmaps Editor
    </div>
    <div class="fragment col-span-4" data-fragment-index="1">
      Create by georeferening any IIIF map
    </div>
    <div class="fragment col-span-2 font-bold" data-fragment-index="2">
      Allmaps Viewer
    </div>
    <div class="fragment col-span-4" data-fragment-index="2">
      View in browser
    </div>
    <div class="fragment col-span-2 font-bold" data-fragment-index="3">
      Allmaps OpenLayers <br />Allmaps Leaflet<br />Allmaps MapLibre
    </div>
    <div class="fragment col-span-4" data-fragment-index="3">
      Plugin to a webmap
    </div>
    <div class="fragment col-span-2 font-bold" data-fragment-index="4">
      Allmaps Tile Server
    </div>
    <div class="fragment col-span-4" data-fragment-index="4">
      Add to app via XYZ tiles
    </div>
    <div class="fragment col-span-2 font-bold" data-fragment-index="5">
      Allmaps CLI
    </div>
    <div class="fragment col-span-4" data-fragment-index="5">
      Use to transform points, generate GeoTIFFs, ...
    </div>
  </div>
  <div class="fragment absolute top-0 left-0 w-full h-full text-left">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="yellow">
        <p class="p-4 strong max-w-xl text-3xl">
          Meanwhile, <strong>Allmaps API</strong> keeps track of annotations
          created in Editor, thus constructing a public database of
          <i>all maps</i>...
        </p></MapMonster
      >
    </div>
  </div>
</section>

<section class="section-horizontal section-stretch">
  <div class="space-y-10">
    <h4>Under the hood</h4>
    <ol class="space-y-6 text-3xl">
      <li>
        Build <strong>tranformation</strong>
        <code>image→geo</code> from GCPs
      </li>
      <li>Find <strong>IIIF zoom-level & tiles</strong> for viewport</li>
      <li class="invisible">
        <strong>Triangulate</strong> mask in <code>image</code> space
      </li>
      <li class="invisible">
        <strong>Render triangles</strong> in <code>geo</code> space with WebGL
      </li>
    </ol>
  </div>
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-fragment-index="1"
    data-src="https://cursor.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fimages%2F5afc515e4d10fd95"
    data-preload
  />
  <!-- https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fimages%2F5afc515e4d10fd95 -->
</section>

<section class="section-horizontal section-stretch">
  <div class="space-y-10">
    <h4>Under the hood</h4>
    <ol class="space-y-6 text-3xl">
      <li>
        Build <strong>tranformation</strong>
        <code>image→geo</code> from GCPs
      </li>
      <li>Find <strong>IIIF zoom-level & tiles</strong> for viewport</li>
      <li>
        <strong>Triangulate</strong> mask in <code>image</code> space
      </li>
      <li>
        <strong>Render triangles</strong> in <code>geo</code> space with WebGL
      </li>
    </ol>
  </div>
  <img
    loading="lazy"
    alt="WebGL Triangles"
    src="/images/foss4g-benl-2024/lowercountries_{slideSeconds % 4 < 2
      ? 'tps'
      : 'triangles'}.png"
  />
  <!-- https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fimages%2F5afc515e4d10fd95 -->
</section>

<section class="section-horizontal section-stretch">
  <!--
  Mention:
  - Reuse single source => Metadata conserved, No unnecessary copies
  - Warp on device => Much faster process, Improvable georeferening
  - Open data stays open => Derivates of open images stay accessible, Reusable GCP data (e.g. distortions, transform)
  - FOSS tools you can host => Github, No vendor lock-in
  -->
  <img
    alt="Allmaps API Containedby"
    loading="lazy"
    src="/images/foss4g-benl-2024/open_data.png"
  />
  <div class="space-y-10">
    <h4>Principles</h4>
    <div class="space-y-4 text-3xl">
      <p>Reuse single source</p>
      <p>Warp on device</p>
      <p>Open data stays open</p>
      <p>FOSS tools you can host</p>
    </div>
  </div>
</section>

<section bind:this={sectionMapMonsters1} class="gap-2 grid-cols-7 grid-rows-5">
  <!-- TODO other monsters! -->
  {#each Array(16) as _, i (`${i}-${mapMonsterCounter}`)}
    <div class={mapMonstersClass} style:transform={randomTransform()}>
      <MapMonster
        mood={randomMood()}
        color={randomColor()}
        shape={Math.floor(randomFromInterval(0, 5))}
      />
    </div>
  {/each}
  <div class="col-span-3 row-span-1">Some cool features</div>

  {#each Array(16) as _, i (`${i}-${mapMonsterCounter}`)}
    <div class={mapMonstersClass} style:transform={randomTransform()}>
      <MapMonster
        mood={randomMood()}
        color={randomColor()}
        shape={Math.floor(randomFromInterval(0, 5))}
      />
    </div>
  {/each}
</section>

<section>
  <p>Background removal</p>
  <img
    alt="Map with background"
    class={slideSeconds % 4 < 2 ? '' : 'hidden'}
    loading="lazy"
    src="images/iiif-annual-conference-2023/tps/lowercountries_affine.png"
  />
  <img
    alt="Map without background"
    class={slideSeconds % 4 < 2 ? 'hidden' : ''}
    loading="lazy"
    src="images/iiif-annual-conference-2023/tps/lowercountries_affine_removebackground.png"
  />
</section>

<section>
  <!-- https://observablehq.com/d/0b57d3b587542794 -->
  <p>Thin Plate Spline Transformation</p>
  <video
    muted
    data-loop
    data-autoplay
    data-src="/videos/soduco-bnf-seminar-2023/tps-metro-paris.mp4"
  />
</section>

<section>
  <p>Map Series</p>
  <div class="flex flex-row gap-8 [&>*]:min-w-0">
    <img
      alt="Results in Allmaps Viewer"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/tmk-results.png"
    />
    <img
      alt="Results in Allmaps Viewer"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/bonnebladen-results.png"
    />
  </div>
</section>

<section>
  <!-- <div class="space-y-10">
    <h4>Under the hood</h4>
    <ol class="space-y-6 text-3xl"> -->
  <p>Open Source TS packages</p>
  <div class="space-y-6 text-3xl">
    <p>Allmaps' building blocks you can use</p>
    <p></p>
  </div>
  <pre class="javascript">
		<code data-line-numbers="" data-trim data-noescape
      ><script type="text/template">
        import { parseAnnotation } from '@allmaps/annotation'
        import { GcpTransformer } from '@allmaps/transform'

        const annotationUrl =
          'https://annotations.allmaps.org/images/e861bd9af6573765'
        const annotation = await fetch(annotationUrl).then((response) =>
          response.json()
        )
        const maps = parseAnnotation(annotation)

        const transformer = new GcpTransformer(maps[0].gcps)

        const coordinates = transformer.transformToGeo([100, 100])
      </script></code
    ></pre>
  <div class="space-y-6 text-3xl">
    <p>
      Example: Transform geometries <code>image↔︎geo</code> with
      <code>@allmaps/transform</code>
    </p>
  </div>
</section>

<section>
  <p>Command Line Interface (CLI)</p>
  <div class="space-y-6 text-3xl">
    <p>Make use of Georeference Annotations</p>
    <p></p>
  </div>
  <img
    alt="Allmaps CLI"
    loading="lazy"
    src="/images/foss4g-benl-2024/cli-transform.png"
  />
  <div class="space-y-6 text-3xl">
    <p>
      Example: Transform points <code>image↔︎geo</code>
    </p>
  </div>
</section>

<section>
  <p>Working towards an explorable database</p>

  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/allmaps-explore.webm"
  />
</section>

<!-- <section>
  <p>Query annotation database using API</p>

  <img
    alt="Allmaps API Containedby"
    loading="lazy"
    src="/images/foss4g-benl-2024/api-containedby.png"
  />
</section> -->

<section bind:this={sectionMapMonsters1} class="gap-2 grid-cols-7 grid-rows-5">
  <!-- TODO other monsters! -->
  {#each Array(16) as _, i (`${i}-${mapMonsterCounter}`)}
    <div class={mapMonstersClass} style:transform={randomTransform()}>
      <MapMonster
        mood={randomMood()}
        color={randomColor()}
        shape={Math.floor(randomFromInterval(0, 5))}
      />
    </div>
  {/each}
  <div class="col-span-3 row-span-1">Bonus round!</div>

  {#each Array(16) as _, i (`${i}-${mapMonsterCounter}`)}
    <div class={mapMonstersClass} style:transform={randomTransform()}>
      <MapMonster
        mood={randomMood()}
        color={randomColor()}
        shape={Math.floor(randomFromInterval(0, 5))}
      />
    </div>
  {/each}
</section>

<section class="section-stretch">
  <iframe
    title="Observable notebook Baarle"
    width="100%"
    height="500"
    frameborder="0"
    src="https://observablehq.com/embed/4a7b34984b3bd4b8@1021?cell=*"
  ></iframe>
  <div
    class="fragment absolute bottom-0 right-0 w-1/2 h-full text-left flex items-end px-24 py-12 z-10"
  >
    <MapMonster mood="excited" color="purple">
      <div class="max-w-md p-4">
        <p class="text-left">This notebook:</p>
        <a href="https://observablehq.com/d/4a7b34984b3bd4b8">
          <img
            class="w-96"
            alt="QR code that links to this notebook"
            src="/images/foss4g-benl-2024/qr-code-notebook.svg"
          /></a
        >
      </div>
    </MapMonster>
  </div>
</section>

<!-- <section class="section-stretch">
  <p>Allmaps Arcade</p>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/allmaps-arcade.webm"
  />
  <p>
    → <a class="underline" href="https://arcade.allmaps.org"
      >arcade.allmaps.org</a
    >
  </p>
</section> -->

<section>
  <p class="p-8">Accidental shader art</p>
  <div class="grid grid-rows-2 grid-cols-3 gap-10 text-left p-4 text-3xl">
    {#each [1, 2, 3, 4, 5, 6] as index}
      <img
        alt="Bad map"
        loading="lazy"
        src="/images/foss4g-benl-2024/badmap_{index}.png"
      />
    {/each}
  </div>
</section>

<section class="section-horizontal section-stretch section-no-logo">
  <div>
    <p class="p-6">Thanks!</p>
    <p class="text-4xl">
      <a class="underline" href="https://allmaps.org">allmaps.org</a>
      <br /><a class="underline" href="https://github.com/allmaps"
        >github.com/allmaps</a
      >
    </p>
  </div>
  <div
    class="fragment absolute bottom-0 right-0 w-1/2 h-full text-left flex items-end px-24 py-12"
  >
    <MapMonster mood="excited" color="purple">
      <div class="max-w-md p-4">
        <p class="text-left">This presentation:</p>
        <a href="https://presentations.allmaps.org/foss4g-benl-2024">
          <img
            class="w-96"
            alt="QR code that links to these slides"
            src="/images/foss4g-benl-2024/qr-code.svg"
          /></a
        >
      </div>
    </MapMonster>
  </div>
</section>
