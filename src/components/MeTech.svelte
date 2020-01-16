<script>
  import Tech from "../components/Tech.svelte";
  import { CONSTANTS } from "../util/constants.js";
  const { technologies } = CONSTANTS;
</script>

<Tech title="Languages + Core" technology={technologies.languages} />
<Tech title="Frameworks + Libraries" technology={technologies.frameworks} />
<Tech title="Tools + ..." technology={technologies.tools} />
