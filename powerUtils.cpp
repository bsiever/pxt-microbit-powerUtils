/**
* Bill Siever
* 2024-03-07 Initial Version
*
* Development environment specifics:
* Written in Microsoft PXT
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions 
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/

#include "pxt.h"
#include "MicroBit.h"

using namespace pxt;

namespace powerUtils { 
    //%
    int usbPower() {
        MicroBitPowerSource source = uBit.power.getPowerSource();
        return source == PWR_USB_ONLY || source == PWR_USB_AND_BATT;
    }

    //%
    int powerConsumption() {
        return uBit.power.getPowerConsumption();
    }
}