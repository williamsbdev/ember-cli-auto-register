import { computed } from '@ember/object';
import EmberObject from '@ember/object';

var FooRepo = EmberObject.extend({
    wat: computed(function() {
        return "foo";
    })
});

export default FooRepo;
