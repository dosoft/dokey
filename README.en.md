# dokey

<p align="center">
  <a href="README.md">Русский</a> · <strong>English</strong>
</p>

<p align="center">
  <img src="assets/dokey-logo-readme.png" width="220" height="220" alt="dokey blue and red logo">
  <br>
  <img src="assets/dos-prompt.svg" width="300" height="56" alt="C:\> DOKEY_">
</p>

<p align="center">
  <a href="https://github.com/dosoft/dokey/releases/latest"><img src="https://img.shields.io/github/v/release/dosoft/dokey?style=flat-square&label=release" alt="Latest release"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT License"></a>
  <a href="https://github.com/dosoft/dokey/releases"><img src="https://img.shields.io/github/downloads/dosoft/dokey/total?style=flat-square&label=downloads" alt="Total downloads"></a>
</p>

A small Windows application that switches keyboard layouts using the **Shift** keys. By default, left Shift selects English and right Shift selects Russian; you can swap this assignment in Settings.

Pressing the same key repeatedly does not change the layout. You do not need to remember which language is currently active—press the appropriate **Shift** key and continue typing.

I first used this switching method in DOS with **KeyRus**, and later in Windows with **Punto Switcher**. Punto Switcher eventually became too heavyweight and inconvenient for this single task, so I created a small dedicated application.

## Installation

Download `dokey-win-Setup.exe` from the [Releases](https://github.com/dosoft/dokey/releases) page and run it. The application installs automatically. On its first launch, dokey enables autostart (a UAC prompt may appear) so that it starts with Windows. You can disable autostart in the application settings.

**Note:** the application and installer are not digitally signed yet, so Windows SmartScreen or Microsoft Defender may display a warning. This is expected—select “More info” → “Run anyway” to continue the installation.

## Usage

- By default, press **right Shift** to select the Russian layout.
- By default, press **left Shift** to select the English layout.
- Swap the left and right Shift assignments in Settings if needed.
- The tray icon shows the current layout of the active window.
- Double-click the tray icon to open Settings.

## Activation conditions

The layout changes only after a **clean** Shift press:

- no other key is pressed at the same time (Ctrl, Alt, Win, letters, arrows, and so on);
- no mouse button is clicked while Shift is held;
- if Shift is held for longer than 300 ms (configurable), the layout is not changed.

Normal Shift behavior—including Shift+letter, Shift+arrow, and Shift+click—is unaffected.

## Requirements

- Windows 10 or 11.
- RU (`0419`) and EN (`0409`) layouts installed in Windows language settings.
- The installer includes the .NET Runtime as part of the self-contained build.

## Updates

The application uses [Velopack](https://github.com/velopack/velopack). It checks for updates automatically and displays a tray notification when a new version is available.

## Known limitations

- **Elevated windows (UAC):** if the active window runs as administrator while dokey does not, layout switching will not work in that window. Run `dokey.exe` as administrator as well. The built-in autostart does this automatically.
- Only two layouts are supported: RU (`0x0419`) and EN (`0x0409`).

## Support

If you find dokey useful and want to support its development, you can:

- ⭐ Star the repository on GitHub — it helps others discover the project.
- 💰 [Donate via PayPal](https://paypal.me/olegda).
- 💰 Donate via USDT (TRC20): `TH1EKSqqK8EqGtfjpVbGi9YWjqpqy2rC7h`.
- 💰 Donate via TON: `UQDIDJxzNDWlkv2ZQl6nxourhU7nwlBkErXDE3W7wJkJ_dGf`.

Your support helps the project grow and motivates further development.

## License and feedback

dokey is licensed under the [MIT License](LICENSE).

If you encounter an issue or have a suggestion, please [open an issue](https://github.com/dosoft/dokey/issues).

## Links

- [Releases and installer](https://github.com/dosoft/dokey/releases)
- [Changelog](CHANGELOG.md)
