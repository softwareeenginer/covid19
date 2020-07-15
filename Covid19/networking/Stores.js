import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {observable, action, computed} from "mobx";
import {create,persist} from "mobx-persist";


function extend(src) {
    Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
    return obj;
}

class IStoreC {
    @persist @observable promotion = false;
    @action setPromotion(val) {
        this.promotion = val;
    }
    @computed get getPromotion() {
        return this.promotion;
    }
    @action setModal(val) {
        this.modal = extend(val);
    }
    @computed get getModal() {
        return this.modal;
    }
}



class StoreC {
    @persist('object') @observable user = {};
    @persist @observable token = "";
    @persist @observable promotion = false;
    @persist @observable language = "tr-TR";

    @action setLanguage(val) {
        this.language = val;
    }
    @computed get getLanguage() {
        return this.language;
    }

    @action setPromotion(val) {
        this.promotion = val;
    }
    @computed get getPromotion() {
        return this.promotion;
    }

    @action setToken(val) {
        this.token = val;
    }
    @computed get getToken() {
        return this.token;
    }

    @action setUser(val) {
        this.user = val;
    }
    @computed get getUser() {
        return this.user;
    }



}
const hydrate = create({
    storage:AsyncStorage,
    jsonify:true
});

export const Store = new StoreC();
hydrate("store",Store).then( (res) => {
    console.log('Store created!');
});

export const IStore = new IStoreC();
