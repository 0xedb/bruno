<script>
  import Index from "../components/Index.svelte";
  import Content from "../components/Content.svelte";
  import MeIntro from "../components/MeIntro.svelte";
  import MePush from "../components/MePush.svelte";
  import MeTech from "../components/MeTech.svelte";
  import MeNext from "../components/MeNext.svelte";
  import Navaid from "../components/Navaid.svelte";
</script>

<svelte:head>
  <title>theBashShell::Bruno Edoh</title>
</svelte:head>
<Navaid />
<Content>
  <MeIntro />
  <MePush />
  <MeTech />
  <MeNext />
</Content>
