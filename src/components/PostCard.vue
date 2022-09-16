<template>
    <div>
        <div class="card text-center">
            <div class="card-header">
                featured {{info}}
            </div>
            <div class="card-body p-0">
                <img class="card-img-top" :src="info"/>
            </div>
            <div class="card-footer text-muted">
                2 days ago
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['info'],
    name: 'PostCard',
};

</script>

<style lang="scss">
.card {
    margin-bottom: 20px;
}

</style>
