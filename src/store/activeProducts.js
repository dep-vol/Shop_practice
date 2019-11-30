import { observable, action, computed } from 'mobx';

class activeProducts {
    constructor (rootStore) {
        this.rootStore = rootStore;
    }
    @observable actionState = {}

    @action changeAct = (id,state = this.actionState[id] || false ) => {
        this.actionState[id] = !state
    }

    
   

}

export default activeProducts;