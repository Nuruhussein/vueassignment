export default {
    template: `
        <form @submit.prevent="addAssignment" class="mb-6">
            <input 
                v-model="newAssignment" 
                type="text" 
                placeholder="New Assignment" 
                class="p-2 rounded-lg bg-gray-800 text-gray-100 w-full"
            />
            <button 
                type="submit" 
                class="mt-2 p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
            >
                Add Assignment
            </button>
        </form>
    `,

    data() {
        return {
            newAssignment: '' // For the input field
        };
    },

    methods: {
        addAssignment() {
            if (this.newAssignment.trim() === '') return;

            this.$emit('add', {
                name: this.newAssignment,
                complete: false,
                id: Date.now() // Generate a unique ID
            });

            this.newAssignment = ''; // Clear the input field
        }
    }
};