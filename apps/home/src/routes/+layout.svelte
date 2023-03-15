<script lang="ts">
  import { page } from '$app/stores';
  import { Header } from 'ui';
</script>

<Header user={{ name: 'Admin' }} {page} />
<slot />
