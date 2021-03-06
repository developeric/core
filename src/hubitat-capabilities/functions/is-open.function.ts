/**
 * @packageDocumentation
 * @module HubitatCapabilities
 */

import { HubitatDevice } from '../../hubitat-device-events/hubitat-device';
import { ECapability } from '../../hubitat-device-events/capability.enum';
import { getContactSensorStatus, getDevice, getDoorPosition, getValvePosition, getWindowShadePosition } from '..';

/**
 * Returns a value whether the device is open.
 *
 * Capabilities:
 * - [ContactSensor](https://docs.hubitat.com/index.php?title=Driver_Capability_List#ContactSensor)
 * - [DoorControl](https://docs.hubitat.com/index.php?title=Driver_Capability_List#DoorControl)
 * - [GarageDoorControl](https://docs.hubitat.com/index.php?title=Driver_Capability_List#GarageDoorControl)
 * - [Valve](https://docs.hubitat.com/index.php?title=Driver_Capability_List#Valve)
 * - [WindowShade](https://docs.hubitat.com/index.php?title=Driver_Capability_List#WindowShade)
 *
 * @param device A target device.
 * @returns `true` if the device is open; `false` if sensor is closed or
 * encountered an error.
 */
export function isOpen(device: HubitatDevice): boolean;

/**
 * Returns a value whether the device is open.
 *
 * Capabilities:
 * - [ContactSensor](https://docs.hubitat.com/index.php?title=Driver_Capability_List#ContactSensor)
 * - [DoorControl](https://docs.hubitat.com/index.php?title=Driver_Capability_List#DoorControl)
 * - [GarageDoorControl](https://docs.hubitat.com/index.php?title=Driver_Capability_List#GarageDoorControl)
 * - [Valve](https://docs.hubitat.com/index.php?title=Driver_Capability_List#Valve)
 * - [WindowShade](https://docs.hubitat.com/index.php?title=Driver_Capability_List#WindowShade)
 *
 * @param device A target device.
 * @param defaultValue A value returned in case getting the device status has
 * failed.
 * @returns `true` if the device is open; `false` if sensor is closed.
 */
export function isOpen(device: HubitatDevice, defaultValue: boolean): boolean;

/**
 * Returns a value whether the device is open.
 *
 * Capabilities:
 * - [ContactSensor](https://docs.hubitat.com/index.php?title=Driver_Capability_List#ContactSensor)
 * - [DoorControl](https://docs.hubitat.com/index.php?title=Driver_Capability_List#DoorControl)
 * - [GarageDoorControl](https://docs.hubitat.com/index.php?title=Driver_Capability_List#GarageDoorControl)
 * - [Valve](https://docs.hubitat.com/index.php?title=Driver_Capability_List#Valve)
 * - [WindowShade](https://docs.hubitat.com/index.php?title=Driver_Capability_List#WindowShade)
 *
 * @param deviceId An ID of the target device.
 * @returns `true` if the device is open; `false` if sensor is closed.
 */
export function isOpen(deviceId: number): boolean;

/**
 * Returns a value whether the device is open.
 *
 * Capabilities:
 * - [ContactSensor](https://docs.hubitat.com/index.php?title=Driver_Capability_List#ContactSensor)
 * - [DoorControl](https://docs.hubitat.com/index.php?title=Driver_Capability_List#DoorControl)
 * - [GarageDoorControl](https://docs.hubitat.com/index.php?title=Driver_Capability_List#GarageDoorControl)
 * - [Valve](https://docs.hubitat.com/index.php?title=Driver_Capability_List#Valve)
 * - [WindowShade](https://docs.hubitat.com/index.php?title=Driver_Capability_List#WindowShade)
 *
 * @param deviceId An ID of the target device.
 * @param defaultValue A value returned in case getting the device status has
 * failed.
 * @returns `true` if the device is open; `false` if sensor is closed or
 * encountered an error.
 */
export function isOpen(deviceId: number, defaultValue: boolean): boolean;

export function isOpen(deviceOrId: HubitatDevice | number, defaultValue = false): boolean {
  const device = getDevice(deviceOrId);

  if (device.hasCapability(ECapability.ContactSensor)) {
    const status = getContactSensorStatus(device, defaultValue ? 'open' : 'closed');
    return status === 'open';
  }

  if (device.hasCapability(ECapability.DoorControl) || device.hasCapability(ECapability.GarageDoorControl)) {
    const status = getDoorPosition(device);
    return status === 'open';
  }

  if (device.hasCapability(ECapability.Valve)) {
    const status = getValvePosition(device);
    return status === 'open';
  }

  if (device.hasCapability(ECapability.WindowShade)) {
    const status = getWindowShadePosition(device);
    return status === 'open' || status === 'partially open';
  }

  return defaultValue;
}
