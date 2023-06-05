<script lang="ts">
  import Title from '$lib/components/Title.svelte'
</script>

<svelte:head>
  <title>Allmaps in Practice - IIIF Annual Conference 2023</title>
</svelte:head>

<Title>
  <h1 class="text-white">Allmaps<br /> in Practice</h1>
</Title>

<section class="section-horizontal section-stretch">
  <p class="">
    3 weeks ago, the IIIF Consortium and the IIIF Maps Technical Specification
    Group (TSG) published the <strong>Georeference Extension</strong> specification.
  </p>
  <a
    class=""
    href="https://iiif.io/news/2023/05/15/georef-extension-published/"
  >
    <img
      alt="Georeference Annotation"
      src="/images/iiif-annual-conference-2023/georeference-annotation.jpg"
    />
  </a>
</section>

<section>
  <p>A Georeference Annotation stores data about a georeferenced image</p>
  <pre>
		<code
    data-line-numbers="1-115|17-23|24-28|39-50"
    data-trim data-noescape><script type="text/template">
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
    </script></code>
  </pre>
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
    <p class="font-light">Leventhal Map & Education Center at the Boston Public Library</p>
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

<section>
  Allmaps: Open source tools for curating, georeferencing and exploring IIIF
  maps
</section>

<section>Georeference Annotations: Used by all Allmaps components</section>

<section>Works with any IIIF map, no need for GIS infrastructure</section>

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
<!-- SODOCU -->
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
