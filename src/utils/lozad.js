import lozad from "lozad";
import { onMount } from "svelte";

export function useLozad(id) {
  onMount(() => {
    const el = document.querySelector(`#${id}`);
    const observer = lozad(el);
    observer.observe();
  });
}
