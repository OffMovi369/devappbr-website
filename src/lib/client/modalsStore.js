import { writable } from 'svelte/store';

export default writable({
    modalWindow: '',
    showModal: false,
    data: {}
});