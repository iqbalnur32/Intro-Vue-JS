<template>
    <button :type="type" @click="clicked">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'submit',
            }
        },
        methods: {
            clicked(){
                this.$emit('clicked')
            }
        }
    }
</script>
