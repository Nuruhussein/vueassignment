export default {
    template: `
        <div class="flex space-x-4">
            <button 
                v-for="category in categories" 
                :key="category" 
                @click="$emit('update:currentCategory', category)"
                :class="{
                    'bg-blue-600 text-white': currentCategory === category,
                    'bg-gray-800 text-gray-100': currentCategory !== category
                }"
                class="p-2 rounded-lg"
            >
                {{ category }}
            </button>
        </div>
    `,

    props: {
        categories: {
            type: Array,
            required: true
        },
        currentCategory: {
            type: String,
            required: true
        }
    }
};