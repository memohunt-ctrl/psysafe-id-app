
PsySafe Android NFC Project (WebView + Native NFC bridge)
=========================================================

What this is:
- An Android Studio project that wraps a web demo in a WebView and adds native NFC handling.
- When an NFC wristband/tag is detected, the native code reads the tag UID and invokes a JavaScript function onNfcScan(tagUid) inside the WebView.
- The web app maps tag UIDs to patient records (simple local mapping for demo). Replace UIDs with your programmed wristband IDs.

How to set up wristbands (summary):
1. Purchase writable NFC tags or wristbands (NTAG21x family recommended).
2. Program each tag with an identifier (UID is hardware fixed; you can also write the patient ID into a text record).
3. Note the UID (hex) for each tag and add a mapping in app/assets/www/app.js -> tagToPatient object.

Build to APK (recommended using Android Studio):
1. Open Android Studio and choose "Open" -> select the folder containing this project (psysafe_android_nfc_project).
2. Let Gradle sync. Install SDK components if prompted.
3. Connect a test Android device or use an emulator (emulator may not support NFC).
4. Build -> Generate Signed Bundle / APK -> APK -> follow the steps to sign and export.
5. Install the signed APK on your test device.

Notes and limitations:
- Some devices require enabling NFC and unlocking the screen before reading tags.
- UID format depends on tag type; the example mapping uses uppercase hex (e.g., 04A1B5C27E).
- For production use, replace local mapping with secure backend calls over HTTPS and add authentication and logging.
- Test thoroughly to ensure wristbands cannot be misused and follow hospital policies for patient privacy.

Security & privacy reminder:
- Do not store sensitive patient details in the app without proper encryption and access controls.
- Follow local regulations and hospital ethics boards when deploying such a system.
