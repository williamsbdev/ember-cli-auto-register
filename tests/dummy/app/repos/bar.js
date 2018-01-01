import { computed } from '@ember/object';
import EmberObject from '@ember/object';

var BarRepo = EmberObject.extend({
    wat: computed(function() {
        return "bar";
    })
});

export default BarRepo;
