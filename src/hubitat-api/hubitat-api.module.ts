/**
 * The HubitatApi module allows to communicate with the
 * [Hubitat Elevation hub](https://hubitat.com/) using the built-in
 * [Maker API app](https://docs.hubitat.com/index.php?title=Maker_API).
 *
 * The communication involves:
 * - Querying devices on Hubitat hub
 * - Receiving device events from Hubitat hub
 * - Sending commands to Hubitat's devices
 *
 * The HubitatApi requires the connection details to be provided via the
 * [ConfigService](https://docs.nestjs.com/techniques/configuration) in form
 * of three configuration values:
 * - `HUBITAT_IP` - IP address of the Hubitat Hub
 * - `HUBITAT_MAKER_API_APP_ID` - The id of the Maker API app in Hubitat hub.
 * - `HUBITAT_MAKER_API_ACCESS_TOKEN` - The access token generated by the Maker
 *      Api app.
 *
 * For the HubitatApi module to be able to receive device events from the
 * Hubitat Hub, the Maker API app needs to be configured to *send device events
 * by POST* to: `http://<HubHazard server IP>:3000/api/hubitat/event`, for
 * example: `http://10.0.0.83:3000/api/hubitat/event`
 *
 * @packageDocumentation
 * @module HubitatApi
 * @preferred
 */

import { Module } from '@nestjs/common';
import { HubitatApiController } from './hubitat-api.controller';
import { HubitatApiService } from './hubitat-api.service';

/**
 * A Nest.js module providing the functionality of the HubHazard's hubitat-api
 * module.
 */
@Module({
  imports: [],
  controllers: [HubitatApiController],
  providers: [HubitatApiService],
  exports: [HubitatApiService],
})
export class HubitatApiModule {}
