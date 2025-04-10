export default {
    template: `
        <form @submit.prevent="addAssignment" class="mb-6">
            <input 
                v-model="newAssignment.name" 
                type="text" 
                placeholder="New Assignment" 
                class="p-2 rounded-lg bg-gray-800 text-gray-100 w-full"
            />
            <select 
                v-model="newAssignment.category" 
                class="p-2 rounded-lg bg-gray-800 text-gray-100 w-full mt-2"
            >
                <option disabled value="">Select Category</option>
                <option>Work</option>
                <option>Study</option>
                <option>Personal</option>
            </select>
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
            newAssignment: {
                name: '',
                category: ''
            }
        };
    },

    methods: {
        addAssignment() {
            if (this.newAssignment.name.trim() === '' || this.newAssignment.category === '') return;

            this.$emit('add', {
                ...this.newAssignment,
                complete: false,
                id: Date.now()
            });

            this.newAssignment = { name: '', category: '' }; // Reset the form
        }
    }
};