# Changelog

All notable changes to dokey will be documented in this file.

## [2.0.1]

- Fix tray menu responsiveness and language icon updates.

## [2.0.0]

- Reduce the app executable from 30.86 MiB to 12.21 MiB.
- Reduce background memory use from 69.8 MiB to 15.1 MiB of working memory.
- Reduce startup time from a median of 544 ms to 78 ms.
- Fit the Settings window on displays with limited vertical space.

## [1.2.2]

- Fix autostart: the entry dokey creates for Windows was rejected, so dokey never started at sign-in
  even with the setting enabled. The entry is created again the next time dokey starts.

## [1.2.1]

- Add Terminal Dark theme option to Settings.
- Fix vertical alignment of labels, toggles, and dropdown text in Settings.

## [1.2.0]

- Simplify Settings dialog.
- Add light, dark, and follow-Windows theme options to Settings.
- Memory optmization (~35%)

## [1.1.3]

- The tray context menu now fades in instead of sliding down from above.
- The "No updates found" dialog now reports the currently installed version, so it is clear which
  version was checked.

## [1.1.2]

- When started manually, relaunch dokey with administrator rights so layout switching also works
  in elevated applications; if elevation is declined, keep running and offer to restart as
  administrator from a marked tray menu. A warning badge and tooltip keep the limited
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
