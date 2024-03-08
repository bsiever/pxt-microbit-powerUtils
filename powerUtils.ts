

//% color=#000000 
//% icon="\uf1e6"
//% block="Power Utilities"
//% group="micro:bit (V2)"
namespace powerUtils {

    

    //% block="USB Power"
    //% shim=powerUtils::usbPower
    //% group="micro:bit (V2)"
    export function usbPower() : boolean {
        // Per https://github.com/microsoft/pxt-microbit/issues/4292
        return true;
    }

    //% block="instantaneous power consumption"
    //% shim=powerUtils::powerConsumption
    //% group="micro:bit (V2)"
    export function powerConsumption() : number {
        // Per https://github.com/microsoft/pxt-microbit/issues/4292
        return 0;
    } 
}
