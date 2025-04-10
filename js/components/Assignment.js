export default {
    template: `
        <li>
            <label class="fancy-checkbox">
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.complete">
                <span class="checkmark"></span>
            </label>
        </li> 
    `,

    props: {
        assignment: Object
    }
}