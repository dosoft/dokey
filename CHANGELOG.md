# Changelog

All notable changes to dokey will be documented in this file.

## [1.1.2]

- When started manually, relaunch dokey with administrator rights so layout switching also works
  in elevated applications; if elevation is declined, keep running and offer to restart as
  administrator from a shield-marked WPF tray menu. A warning badge and tooltip keep the limited
  mode visible until then.
- Fix autostart on laptops: dokey now starts on battery power, is no longer stopped when the laptop
  is unplugged, and is no longer terminated after three days of uptime. Existing autostart entries
  are repaired automatically.
- If dokey's autostart entry is missing or broken, ask for administrator confirmation to repair it
  each time dokey starts.
- Restore autostart automatically when dokey has been reinstalled or moved to another folder.
- Report the problem in a tray notification when Windows refuses to let dokey watch the keyboard,
  instead of quitting without a word.

## [1.1.1]

- Improve the RU/EN tray icons with larger color badges and clearer spacing around the labels.

## [1.1.0]
- Introduce a new blue/red Shift logo across the application icon, Settings hero, and README.

- Remove the Settings minimize button because the window is intentionally absent from the taskbar.

## [1.0.1]

- Add automatic update checks and one-click installation of new versions from the tray menu.
- Automatically enable autostart on first run so dokey launches on Windows sign-in.
- Add English and Russian interface languages with instant switching in Settings.
- Show version, release, and license information in the Settings.

## [1.0.0]

- Initial release with single-file, self-contained installer (Velopack).
- Single clean Shift press switches layout (RU/EN) without breaking normal Shift behavior.
- Tray icon shows current keyboard layout (RU/EN).
- Settings for shift direction, hold threshold, ignore mouse click, autostart.
- File-based logging with rotation.
