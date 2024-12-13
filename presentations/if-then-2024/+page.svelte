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
  <title
    >Allmaps</title
  >
</svelte:head>

<Title>
  <h3 class="text-white big">
    How to play with maps
  </h3>
  <i class="text-white font-light small">
    Ian Spangler, Emily Bowe, and Bert Spaan
  </i>
</Title>

<!-- ######################### -->
<!-- ######################### -->
<!-- IF/THEN SLIDES START HERE -->
<!-- ######################### -->
<!-- ######################### -->

<section class="section-stretch">
  <p>Boston Public Library</p>
  <img
    title="allmaps"
    alt="bpl"
    src="https://www.boston-discovery-guide.com/image-files/1080-bpl-exterior.jpg"
  />
</section>

<section class="section-stretch">
  <p>
    Leventhal Map & Education Center
  </p>
  <img
    title="allmaps"
    alt="bpl"
    src="/images/if-then-2024/prop.jpg"
  />
</section>

<section class="section-stretch">
  <h2>~250,000 cartographic objects</h2>
</section>

<section class="section-stretch">
  <p>Flat maps</p>
  <img
    title="allmaps"
    alt="bpl"
    src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:3f463831d/full/1200,/0/default.jpg"
  />
</section>

<section class="section-stretch">
  <p>Rolled maps</p>
  <img
    title="allmaps"
    alt="bpl"
    src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:6108vw12v/full/1200,/0/default.jpg"
  />
</section>

<section class="section-stretch">
  <p>Globes</p>
  <img
    title="allmaps"
    alt="bpl"
    src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:x633f889c/full/1200,/0/default.jpg"
  />
</section>

<section class="section-stretch">
  <p>Charts</p>
  <img
    title="allmaps"
    alt="bpl"
    src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:x633f9536/full/1200,/0/default.jpg"
  />
</section>

<section class="section-stretch">
  <p>Horns</p>
  <img
    title="allmaps"
    alt="bpl"
    src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:q524n341z/full/1200,/90/default.jpg"
  />
</section>

<section class="section-stretch">
  <p>Surveyor's chains</p>
  <img
    title="allmaps"
    alt="bpl"
    src="https://www.leventhalmap.org/wp-content/uploads/2019/04/at2_3_3a1.jpg"
  />
</section>

<section class="section-stretch">
  <p>Urban atlases</p>
  <img
    title="allmaps"
    alt="atlases"
    src="/images/if-then-2024/atlas1.jpg"
  />
</section>

<section class="section-stretch">
  <p>Urban atlases</p>
  <img
    title="allmaps"
    alt="atlases"
    src="/images/if-then-2024/atlas2.jpg"
  />
</section>

<section class="section-stretch">
  <p>Urban atlases online</p>
  <img
    title="allmaps"
    alt="atlases"
    src="/images/if-then-2024/atlases.png"
  />
</section>

<section class="section-stretch">
  <iframe
    title="atlascope"
    src="https://atlascope.org/"
  />
</section>

<section>
  <h2>
    How do we get here?
  </h2>
</section>

<section class="section-stretch">
  <h2>
    Georeferencing:<br /><span class="font-light">Turning images of maps into spatial data</span>
  </h2>
</section>

<section class="section-stretch">
  <img
    title="qgis"
    alt="qgis"
    src="https://www.qgistutorials.com/en/_images/1456.png"
  >
  <div>
    <MapMonster mood="sad" color="green">
    </MapMonster>
  </div>
</section>

<section class="section-stretch">
  <iframe
    title="allmaps"
    src="https://allmaps.org/"
  />
</section>

<section class="section-stretch">
  <p>
    Dozens of the largest map libraries in the world use IIIF...
  </p>
</section>

<section class="section-stretch">
  <p>
    ... which means millions of maps<br />can be georeferenced using Allmaps!
  </p>
</section>

<section>
  <p>
    Allmaps' core functionality converts<br /><strong class="pink">pixel coordinates</strong> of a map image to 
    <br /><strong class="aqua">geospatial coordinates</strong> in the real world <br />
  </p>
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

<section class="section-stretch">
  <a href="https://collections.leventhalmap.org/" target="blank">
  <img 
    title='lmec'
    src="/images/if-then-2024/lmec-collections.png"
    alt="lmec">
  </a>
</section>

<section>
  <h2>
    Who's this for?
  </h2>
  <ul>
    <li>Educators and teachers</li>
    <li>Researchers and scholars</li>
    <li>Developers and cartographers</li>
    <li>Anyone who wants to overlay a map!</li>
  </ul>
</section>

<section>
  <h2>
    Explore
  </h2>
</section>

<section class="section-stretch">
  <iframe
    title="Explore"
    class="w-full h-full"
    data-src="https://dev.explore.allmaps.org/#10.59/42.3125/-71.057"
    data-preload
  />
</section>

<section>
  <h2>
    Compare
  </h2>
</section>

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://cursor.allmaps.org"
    data-preload
  />
</section>

<section>
  <h2>
    Locate
  </h2>
</section>

<section class="section-stretch">
  <a href="https://here.allmaps.org/" target="blank">
    <img
      title="Allmaps Here"
      alt="Allmaps Here"
      src="/images/if-then-2024/here.png"
    />
  </a>
</section>

<section>
  <h2>
    Play
  </h2>
</section>

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://arcade.allmaps.org"
    data-preload
  />
</section>

<section>
  <p>Or go to Delft!</p>

  <div class="flex flex-row gap-8 [&>*]:min-w-0">
    <img
      alt="Allmaps Arcade cabinet #2"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/arcade-cabinet-2.jpg"
    />
    <img
      alt="Allmaps Arcade cabinet #1"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/arcade-cabinet-1.jpg"
    />
  </div>
</section>

<section>
  <h2>
    Remix
  </h2>
</section>

<section class="section-stretch">
  <img
    title="Glitch"
    alt="Glitch"
    src="/images/if-then-2024/glitch.png"
  />
</section>

<section class="section-stretch">
  <img
    title="leaflet"
    alt="leaflet"
    src="/images/if-then-2024/leaflet.png"
  />
</section>

<section class="section-stretch">
  <iframe
    title="Glitch"
    class="w-full h-full"
    data-src="https://compare-allmaps.glitch.me/"
    data-preload
  />
</section>

<section>
  <div
    class="rainbow-background absolute bottom-0 right-0 h-full text-left bg-white/70 flex items-end px-24 py-12 drop-shadow-md"
  >
  <div>
    <img
      alt="qr"
      title="qr"
      src="/images/if-then-2024/qr.png"
    >
  </div>
  <i class="small text-white" style="padding-left:25px;">
    This work is funded by a National Endowment for the Humanities Digital Humanities Advancement Grant (Award HAA-293491-23)
  </i>
    <MapMonster mood="excited" color="pink">
      <div class="max-w-md p-4">
        <p class="text-left">
          Thanks for watching!<br /><br />
          Questions?<br /><br />
          <code class="small">ispangler@leventhalmap.org </code><br />
          <code class="small">ebowe@leventhalmap.org</code>
        </p>
      </div>
    </MapMonster>
  </div>
</section>

<!-- ######################### -->
<!-- ######################### -->
<!-- IF/THEN SLIDES STOP HERE -->
<!-- ######################### -->
<!-- ######################### -->