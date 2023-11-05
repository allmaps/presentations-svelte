<script lang="ts">
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'

  import { currentSlide } from '$lib/shared/stores/reveal.js'

  import mapThumbnails from './map-thumbnails.json'
  import './style.css'

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

  let mapMonsterInterval: number | undefined
  let mapMonsterCounter = 0

  const mapMonstersClass = 'w-28'

  let sectionThumbnails: HTMLElement
  let sectionMapMonsters: HTMLElement

  let mapThumbnailInterval: number | undefined
  let shuffledMapThumbnails = shuffle(mapThumbnails)
  let slicedMapThumbnails: string[] = []

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

    if (sectionMapMonsters === $currentSlide) {
      if (!mapMonsterInterval) {
        mapMonsterInterval = setInterval(() => {
          mapMonsterCounter++
        }, 1000)
      }
    } else {
      mapMonsterCounter = 0
      clearInterval(mapMonsterInterval)
      mapMonsterInterval = undefined
    }
  }

  $: {
    if ($currentSlide) {
      newSlide($currentSlide)
    }
  }
</script>

<svelte:head>
  <title>SODUCO-BNF seminar 2023</title>
</svelte:head>

<Title>
  <h2 class="text-white">Georeferencing with Allmaps<br/>and IIIF</h2>
  <p class="text-white r-fit-text">SODUCO-BNF seminar 2023</p>
</Title>

<Title dark={false}>
  <h1>Allmaps</h1>
  <p>Open source tools for curating, georeferencing and exploring IIIF maps</p>
  <div
    class="fragment absolute top-0 left-0 w-full h-full bg-white/70 text-left"
  >
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 strong max-w-xl">
          Allmaps works with any map that is available with the standards of the
          International Image Interoperability Framework
        </p>
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

<section class="section-horizontal section-stretch">
  <p>
    Allmaps is centred around the <strong>Georeference Extension</strong> published by the IIIF Consortium.
  </p>
  <a href="https://iiif.io/news/2023/05/15/georef-extension-published/">
    <img
      loading="lazy"
      alt="Georeference Annotation"
      src="/images/iiif-annual-conference-2023/georeference-annotation.jpg"
    />
  </a>
</section>

<section>
  <p>Georeference Annotation contains all the required data</p>
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
  <p class="p-4 z-50 bg-white/50 rounded-lg max-w-3xl">
    Using Georeference Annotations and IIIF, we can now georeference, warp and
    overlay <strong>millions of digitized maps</strong> from institutions around
    the world
  </p>
</section>

<section>
  <ol class="list-decimal px-40 space-y-8 text-4xl">
    <li>
      Georeference any IIIF map with <strong>Allmaps Editor</strong>. Allmaps
      Editor produces Georeference Annotations
    </li>
    <li>
      These annotations can be stored using <strong>Allmaps API</strong>. But
      you can also store them somewhere else, even locally
    </li>
    <li>
      <strong>Allmaps Viewer</strong> reads Georeference Annotations and can warp
      and overlay IIIF maps in the browser, using WebGL
    </li>
    <li>
      Integrate into your applications by using the plugins for <strong>OpenLayers</strong> and
      <strong>Leaflet</strong>. Or use the proxy server for XYZ map tiles, or the Allmaps CLI
      to generate GeoTIFFs
    </li>
  </ol>
</section>

<section bind:this={sectionMapMonsters} class="gap-2 grid-cols-7 grid-rows-5">
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
  <div class="col-span-3 row-span-1">
    Some new features...
  </div>

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
  <!-- https://observablehq.com/@allmaps/leaflet-plugin -->
  <!-- Plan général de l'Exposition universelle de 1889 -->
  <!-- https://archive.org/details/plangeneraldelex00unse -->
  <!-- https://annotations.allmaps.org/images/7e491a36c6e3de09 -->
  <p>Leaflet Plugin</p>
  <img
    alt="Map of LMEC"
    loading="lazy"
    src="/images/soduco-bnf-seminar-2023/leaflet-plugin.png"
  />
</section>

<section>
  <!-- Plan de Paris avec indication exacte des Maisons et Monuments incendiées [sic], des Batteries et Barricades construites en Mai 1871 et numérotage des Bastions de l'Enceinte (1871) -->
  <!-- https://gallica.bnf.fr/ark:/12148/btv1b8494157x/f1.item.zoom -->
  <!-- https://annotations.allmaps.org/images/d1035e5f5d30a169 -->
  <p>Background Removal</p>
  <video
    muted
    data-loop
    data-autoplay
    data-src="/videos/soduco-bnf-seminar-2023/barricades-background-removal.mp4"
  />
</section>

<section>
  <!-- Verniquet Atlas -->
  <!-- https://soduco.geohistoricaldata.org/AllmapsAnnotations/ -->
  <!-- https://dataverse.harvard.edu/api/access/datafile/7002730 -->
  <p>Colorization</p>
  <video
    muted
    data-loop
    data-autoplay
    data-src="/videos/soduco-bnf-seminar-2023/verniquet-colorize.mp4"
  />
</section>

<section>
  <!-- https://observablehq.com/@allmaps/kit-maps -->
  <p>Thin Plate Spline Transformation</p>
  <video
    muted
    data-loop
    data-autoplay
    data-src="/videos/soduco-bnf-seminar-2023/tps-metro-paris.mp4"
  />
</section>

<section>
  <!-- Daguerre's diorama in  Architectonographie des théâtres de Paris (1821) -->
  <!-- https://gallica.bnf.fr/ark:/12148/bpt6k1526013d -->
  <!-- https://gallica.bnf.fr/iiif/ark:/12148/bpt6k1526013d/manifest.json -->
  <!-- https://annotations.allmaps.org/images/0cd4ee5d84dc9c65 -->
  <!-- Atlas Verniquet used as reference map -->

  <p>Custom Reference Map</p>
  <div class="flex flex-row w-full [&>*]:min-w-0">
    <img
      alt="Georeferencing the plan of the diorama in the Allmaps Editor"
      loading="lazy"
      src="/images/soduco-bnf-seminar-2023/diorama-editor.png"
    />
    <img
      alt="Viewing the plan of the diorama in the Allmaps Viewer"
      loading="lazy"
      src="/images/soduco-bnf-seminar-2023/diorama-viewer.png"
    />
  </div>
</section>

<section class="section-horizontal section-stretch section-no-logo">
  <div>
    <p>Thanks!</p>
    <p>
      See <a class="underline" href="https://allmaps.org">allmaps.org</a> and
      <a class="underline" href="https://github.com/allmaps"
        >github.com/allmaps</a
      >
      for more details about Allmaps!
    </p>
  </div>
  <video
    muted
    data-loop
    data-autoplay
    data-src="/video/iiif-annual-conference-2023/allmaps-website.webm"
  />

  <div
    class="fragment absolute bottom-0 right-0 w-1/2 h-full text-left bg-white/70 flex items-end px-24 py-12"
  >
    <MapMonster mood="excited" color="purple">
      <div class="max-w-md p-4">
        <p class="text-left">This presentation:</p>
        <a href="https://presentations.allmaps.org/soduco-bnf-seminar-2023">
          <img
            class="w-full"
            alt="QR code that links to these slides"
            src="/images/soduco-bnf-seminar-2023/qr-code.svg"
          /></a
        >
      </div>
    </MapMonster>
  </div>
</section>
