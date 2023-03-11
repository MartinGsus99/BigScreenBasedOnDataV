<template lang="">
<button>
    {{this.label}}
</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        label: {
            type: String,
            default: 'Button',
        },
        opertaion: {
            type: String,
            default: null,
        }
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="">
button {
    font-size: 18px;
    color: #e1e1e1;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
    text-align: center;
}

button:focus,
button:hover {
    color: #fff;
}

button:focus:after,
button:hover:after {
    width: 100%;
    left: 0%;
}

button:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
}
</style>
