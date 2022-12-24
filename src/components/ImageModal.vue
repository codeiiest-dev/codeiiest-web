<template>
    <div id="defaultModal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full backdrop-blur-lg bg-white/30 dark:bg-black/70">
        <div class="relative mx-auto top-50 w-full h-full max-w-5xl md:h-auto ">
            <div class="absolute top-0 right-0 z-50 p-4">
                <button @click="toggleModal">
                    <carbon-close class="text-4xl text-white hover:text-white-500 hover:text-5xl ease-in duration-100"
                        aria-hidden="true" />
                </button>
            </div>
            <!-- Left and Right image buttons -->
            <div class="absolute bottom-0 left-0 z-50 p-4">
                <button @click="prev">
                    <carbon-chevron-left
                        class="text-4xl text-white hover:text-white-500 hover:text-5xl ease-in duration-100"
                        aria-hidden="true" />
                </button>

            </div>

            <div class="absolute bottom-0 right-0 z-50 p-4">
                <button @click="next">
                    <carbon-chevron-right
                        class="text-4xl text-white hover:text-white-500 hover:text-5xl ease-in duration-100"
                        aria-hidden="true" />
                </button>
            </div>

            <div class="relative w-full h-full">
                <img :src="image" class="object-cover" />
            </div>
        </div>
    </div>
</template>

<script>
import { onBeforeUnmount } from 'vue';

export default {
    name: 'ImageModal',
    props: {
        image: {
            type: String,
            required: true,
        },
        prev: {
            type: Function,
            required: true,
        },
        next: {
            type: Function,
            required: true,
        },
    },
    setup(props) {
        // toggle modal
        const toggleModal = () => {
            const modal = document.getElementById('defaultModal');
            modal.classList.toggle('hidden');
        };

        // close modal on escape key
        const closeModal = (e) => {
            if (e.key === 'Escape' && !document.getElementById('defaultModal').classList.contains('hidden')) {
                toggleModal();
            }
        };

        // close modal on click outside
        const closeOnClick = (e) => {
            if (e.target.id === 'defaultModal') {
                toggleModal();
            }
        };

        // shift to next image on right arrow key
        const imageShift = (e) => {
            if (e.key === 'ArrowRight') {
                props.next();
            } else if (e.key === 'ArrowLeft') {
                props.prev();
            }
        };

        // add event listeners
        window.addEventListener('keydown', closeModal);
        window.addEventListener('click', closeOnClick);
        window.addEventListener('keydown', imageShift);


        // remove event listeners
        onBeforeUnmount(() => {
            window.removeEventListener('keydown', closeModal);
            window.removeEventListener('click', closeOnClick);
        });

        return {
            toggleModal,
        };
    },
};
</script>