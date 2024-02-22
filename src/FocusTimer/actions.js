import state from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function toggleForest(){
    state.isOnForest = document.documentElement.classList.toggle('forest-on')

    if(state.isOnForest) {

        state.isOnRain = false
        state.isOnShop = false
        state.isOnFireplace = false

        sounds.rainAudio.pause()
        sounds.coffeeShopAudio.pause()
        sounds.fireplaceAudio.pause()

        document.documentElement.classList.remove('rain-on')
        document.documentElement.classList.remove('shop-on')
        document.documentElement.classList.remove('fireplace-on')

        sounds.forestAudio.play()

        return
    }

    sounds.forestAudio.pause()
}

export function toggleRain(){
    state.isOnRain = document.documentElement.classList.toggle('rain-on')

    if(state.isOnRain) {

        state.isOnForest = false
        state.isOnShop = false
        state.isOnFireplace = false

        sounds.forestAudio.pause()
        sounds.coffeeShopAudio.pause()
        sounds.fireplaceAudio.pause()

        document.documentElement.classList.remove('forest-on')
        document.documentElement.classList.remove('shop-on')
        document.documentElement.classList.remove('fireplace-on')

        sounds.rainAudio.play()
        return
    }

    sounds.rainAudio.pause()
}

export function toggleCoffee(){
    state.isOnShop = document.documentElement.classList.toggle('shop-on')

    if(state.isOnShop) {

        state.isOnForest = false
        state.isOnRain = false
        state.isOnFireplace = false

        sounds.rainAudio.pause()
        sounds.forestAudio.pause()
        sounds.fireplaceAudio.pause()

        document.documentElement.classList.remove('forest-on')
        document.documentElement.classList.remove('rain-on')
        document.documentElement.classList.remove('fireplace-on')

        sounds.coffeeShopAudio.play()
        return
    }

    sounds.coffeeShopAudio.pause()
}

export function toggleFireplace(){
    state.isOnFireplace = document.documentElement.classList.toggle('fireplace-on')

    if(state.isOnFireplace) {

        state.isOnForest = false
        state.isOnRain = false
        state.isOnShop = false

        sounds.rainAudio.pause()
        sounds.forestAudio.pause()
        sounds.coffeeShopAudio.pause()

        document.documentElement.classList.remove('forest-on')
        document.documentElement.classList.remove('rain-on')
        document.documentElement.classList.remove('shop-on')

        sounds.fireplaceAudio.play()
        return
    }

    sounds.fireplaceAudio.pause()
}

export function addFive(){

    state.minutes = state.minutes + 5
    state.seconds = 0

    timer.updateDisplay()
}

export function minusFive(){

    state.minutes = state.minutes - 5
    state.seconds = 0

    timer.updateDisplay()
}