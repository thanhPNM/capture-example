<script>
    import { ErrorPage } from 'ui'
    import { page } from '$app/stores'
</script>

<ErrorPage {page} canGoBack={false} />
