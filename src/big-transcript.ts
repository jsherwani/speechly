import el from './big-transcript.svelte';

if (!customElements.get("big-transcript")) {
    customElements.define("big-transcript", el as any as CustomElementConstructor);
}
