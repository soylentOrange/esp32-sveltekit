---
hide:
  - navigation
  - toc
---

# Factory Settings

The factory default settings, either after flashing the binary to the board for the first time or after applying from the System Status menu are managed in [factory_setting.ini](https://github.com/soylentOrange/esp32-sveltekit/blob/main/factory_settings.ini).

## Access Point

By default, the Access Point offers a network with: 

- SSID: ESP32-#{unique_id} 
- password: esp-sveltekit 
- ip-address: 192.168.4.1

After logging in as admin to the board, just set the WiFi credendials for connecting to your WiFi. When connected successfully, the Access Point will be stopped (if not configured otherwise). 

## Users

By default, a guest and an admin user are defined. 
The credentials are simply:

- guest/guest
- admin/admin