import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
import CategoryFilter from "./CategoryFilter.js";

export default {
    components: { AssignmentList, AssignmentCreate, CategoryFilter },

    template: `
        <section class="space-y-6 p-6 bg-gray-900 text-gray-100 min-h-screen">
            <assignment-create @add="addAssignment"></assignment-create>

      <category-filter 
    :categories="categories" 
    :current-category="currentCategory"
    @update:currentCategory="currentCategory = $event"
></category-filter>

            <assignment-list 
                :assignments="filters.inProgress" 
                :title="currentCategory ? currentCategory + ' - In Progress' : 'In Progress'" 
                class="bg-gray-800 p-4 rounded-lg shadow-md"
            ></assignment-list>
            <assignment-list 
                :assignments="filters.completed" 
                :title="currentCategory ? currentCategory + ' - Completed' : 'Completed'" 
                class="bg-gray-800 p-4 rounded-lg shadow-md"
            ></assignment-list>
        </section>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1, category: 'Work' },
                { name: 'Read Chapter 4', complete: false, id: 2, category: 'Study' },
                { name: 'Turn in Homework', complete: false, id: 3, category: 'Study' },
                { name: 'Buy groceries', complete: true, id: 4, category: 'Personal' }
            ],
            currentCategory: 'All' // Default to 'All'
        };
    },

    methods: {
        addAssignment(newAssignment) {
            this.assignments.push(newAssignment);
        }
    },

    computed: {
        categories() {
            return ['All', ...new Set(this.assignments.map(a => a.category))];
        },
        filters() {
            let relevantAssignments = this.currentCategory === 'All'
                ? this.assignments
                : this.assignments.filter(
                    a => a.category === this.currentCategory
                );
    
            return {
                inProgress: relevantAssignments.filter(a => !a.complete),
                completed: relevantAssignments.filter(a => a.complete)
            };
        }
    }
    
};