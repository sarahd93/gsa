# SUMMARY OF RELEASE CHANGES FOR GREENBONE SECURITY ASSISTANT

For detailed code changes, please visit
 https://github.com/greenbone/gsa/commits/master
or get the entire source code repository and view log history:
$ git clone https://github.com/greenbone/gsa.git
$ cd gsa && git log

## gsa 9.0 unreleased

 * Use HTTPS for documentation links

## gsa 8.0.1 (unreleased)

 * Add tooltips to deactived textfields in AlertDialog #1269
 * Fix displaying reserved filter keywords in content composer #1268
 * Disable inputs for improper option selection in EmailMethodPart of
   AlertDialog #1266
 * Removed obsolete CLI arguments #1265
   * --login-label
   * --http-guest-chart-frame-opts
   * --http-guest-chart-csp
   * --guest-username
   * --guest-password
 * Fix GSA version at about page #1264
 * Fix link to protocol documentation at about page #1264
 * Cleanup get_report function in gsad #1263
 * Fix testing alerts #1260
 * Fix release build #1259, #1265

## gsa 8.0.0 (2018-04-05)

This is the first release of the gsa module 8.0 for the Greenbone
Vulnerability Management (GVM) framework.

This release introduces an entirely re-written version of GSA with an overhauled
new user interface technology, switching from XSLT-generated web pages per
request to a single page JavaScript application. The XSLT got removed
completely and was replaced by a modern JS application allowing to add features
and usability improvements faster and easier in future.

The web server daemon (gsad) got a big code cleanup and improvements. Due to
changing to a JS application it doesn't generate any HTML code anymore. Now gsad
only ships static files and acts as some kind of http proxy between the JS
based GSA and gvmd.

Apart from this, the module covers a number of significant advances
and clean-ups compared to the previous gsa module.

 * Display error message if an entity couldn't be loaded #1252
 * Support old secinfo URLs and redirect to replacement pages #1247
 * Add guest user login support #1246
 * Allow to set default host and operating system filters #1243
 * Don't crash if start or end date for performance page are invalid #1237
 * Change order of options in target dialog #1233
 * Don't limit the input field lengths anymore #1232
 * Convert first filter keyword values less then one to one #1228
 * Always use equal relation for first and rows filter keywords #1228
 * Add confirmation dialog when creating a user without a role #1224
 * Use dialogs to edit LDAP and RADIUS authentication #1212 #1213
 * Renamed "PGP Key" credential to "PGP Encryption Key" #1208
 * Add link referencing the performance during scan time to the report details
 * Allow to pass start time, end time and sensor/slave id as URL parameters to
 performance page.
 * New feature: Remediation Tickets #1126
 * Fix issues with updating user authentication and logging out active
 sessions after changing the password of a user #1159
 * Tags can now contain backslashes, forward slashes and percent signs in the
 value as well as hyphens in the name to allow using the special task tag
 "smb-alert:file_path". #1107 #1142 #1145
 * Allow to sort the nvts table at the edit scan config families dialog by
 name, oid, severity, timeout and selected #1210
 * Add feature: Scan Report Content Composer #1073 #1084 #1086 #1090
 * Add solution type to report details powerfilter #1091
 * Sort alerts at task details alphanumerically #1094
 * Add Alemba vFire alert to GUI #1100
 * Add Sourcefire PKCS12 password support #1150
 * Fix crash of Task dialog without user having get_config, get_scanner,
   get_tags and get_targets permissions #1220
 * Ensure host ordering is valid in task dialog #1220
 * Disable tag selection if not task should be added in create task dialog #1220
 * Don't show add tag fields when editing a task #1220
 * Fix race condition resulting in not displaying scan config details at task
   dialog when opening the dialog for the first time #1220
 * Fix saving run schedule once setting from Task dialog #1220
 * Don't create a container task from the task dialog accidentally #1220
 * Use "Do not automatically delete reports" as default again in task dialog
   #1220


## gsa 8.0+beta2 (2018-12-04)

Many thanks to everyone who has contributed to this release:
Christian Fischer (cfi-gb), Matthew Mundell (mattmundell), Timo Pollmeier
(timopollmeier), Bjoern Ricks (bjoernricks), Steffen Waterkamp (swaterkamp),
Michael Wiegand (wiegandm) and asmaack.

Main changes compared to 8.0+beta1

  * Refined appearance of the GUI #987, #991, #995, #998, #1004, #1021, #1025,
    #1026, #1030, #1037, #1043, #1053, #1058
  * Allow rename main dashboards #1076
  * Don't close dialog on outer clicks #1074
  * Allow to encrypt alert emails via smime and pgp #1070
  * New credential types smime and pgp for alert email encryption #1070
  * Fixed displaying the Observer icon #1053
  * New reworked icon set #1053
  * Add cancel button to all dialogs #1048
  * Don't crash GSA completely if an unexpected error did occur #1046
  * Fix saving nvt preferences in gsad #1045
  * Fix "Current User" inheritance on "Delete User" #1038
  * Don't show links to details pages for entities in Trashcan #1035
  * Remove maxlength of hosts for notes and overrides #1033
  * Allow to store dashboard chart specific data #1022
  * Updated and improved Line Charts #1012 #1022
  * Cleaned up wizards #1001
  * Split Results Host column into IP and Name #999 #998
  * Update to Create React App 2.0 #997
  * Put NVT preferences into own tab on details page #991
  * Change report summary table appearance #991
  * Allow to toggle chart legend and 2D/3D view of pie charts #989
  * Changed visual appearance of Tables #983
  * Changed Donut Chart to a Pie Chart #982
  * Improved visual appearance of Donut Charts while resizing #979
  * Set min size for Line Charts and reduce number of x-axis labels to not
    overlap #977
  * Removed Scan, Asset, SecInfo Dashboards and added Dashboard "templates" to
    the main dashboard #974
  * Removed Dashboard Display menus with an icon overlay #971, #972
  * Don't set an unknown locale #966
  * Require NodeJS >= 8 #964
  * Replaced glamorous with styled-components for settings styles
    #913, #919, #922, #924, #925, #929, #934, #938, #948, #949, #950
  * Support for cmake and cmake3 executables #936
  * Support for yarn offline mode #935
  * Fixed sorting of tables at Report details #929
  * Use Tabs for structuring data at User Settings #927
  * Adjusted auto reload interval automatically #917
  * Automatically logout user after session has timed out #908
  * Fixed saving the default severity #907
  * Allow to filter results by solution type via powerfilter dialog #906
  * Extend the session timeout on user interaction
    #865, #902, #905
  * Don't show external link dialog when clicking on Greenbone links #904
  * Added indicators for notes and overrides applied to results #898
  * Always load data into the redux store
    #748, #753, #776, #777, #828, #833, #836, #853, #861, #897, #923, #939
  * Fixed displaying Nvt tags #880
  * Added comments to Target table #870
  * Added remove filter button to powerfilters #863, #893
  * Improved login page layout #859
  * Removed sticky menu in header #857
  * Update locales if they are changed at the User Settings #856
  * Refined the menu appearance #852, #869
  * Reduced default max height for dialogs to 400px #843
  * Show Report page header before report is loaded #825
  * Clear/Flush redux store on logout #797
  * Allow to add multiple tags simultaneously
    #701, #723, #728, #748, #752, #768, #771, #786, #871, #887
  * Added hostname to result hosts #765
  * Added delta reports to alerts #743, #754
  * Extended Schedules based on ical data
    #720, #724, #729, #731, #739
  * Renamed Task status "Internal Error" to "Interrupted" #718, #719
  * Don't show default dashboard if settings haven't been loaded yet #714
  * Allow to add Tags to scanners #702
  * Removed support for severity class OpenVAS Classic #709

## gsa 8.0+beta1 (2018-05-25)

This is the first beta release of the gsa module 8.0 for the Greenbone
Vulnerability Management (GVM) framework.

This release introduces an entirely re-written version of GSA with an overhauled
new user interface technology, switching from XSLT-generated web pages per
request to a single page JavaScript application. The XSLT got removed
completely and was replaced by a modern JS application allowing to add features
and usability improvements faster and easier in future.

The web server daemon (gsad) got a big code cleanup and improvements. Due to
changing to a JS application it doesn't generate any HTML code anymore. Now gsad
only ships static files and acts as some kind of http proxy between the JS
based GSA and gvmd.

Apart from this, the module covers a number of significant advances
and clean-ups compared to the previous gsa module.

Many thanks to everyone who has contributed to this release:
Hani Benhabiles, Christian Fischer, Juan Jose Nicola, Matthew Mundell,
Timo Pollmeier, Bjoern Ricks, Steffen Waterkamp, Jan-Oliver Wagner and
Michael Wiegand.

Main changes compared to the 7.0 series:

  * The web user interface has been transformed into a single page application
    which is loaded once and then only updates the in-browser data from the
    server.
  * All data loading processes are asynchronous and don't block the GUI from
    reacting to user input.
  * Refreshing of data is done in the background now. Therefore the user doesn't
    need to specify a refresh rate anymore.
  * The its "face" has been removed.
  * The extra help pages has been replaced by links to the documentation.
  * The 'excluded' list option when a New Target is created has been added.
  * The 'classic hosts' asset has been removed.
  * New view on scan results by vulnerability has been added.
  * A link to Scanconfigs from scanner details has been added.
  * The edit dialog for overrides and notes has been improved and is now more
    flexible.
  * The report details view has been overhauled.
  * Multiple dashboards can be defined by the user at the main entry page.
  * The edit mode of the dashboards has been removed. Dashboards are always
    editable now.
  * nodejs >= 6 is required to generate the new JS based version of GSA.
  * npm or yarn is required for installing the JavaScript dependencies.
  * libxslt is no longer required because all XSLT has been removed.
  * The required minimum version of new dependency GVM Libraries is 1.0 and
    the dependency to the openvas-libraries module has been removed. Therefore
    many include directives have been adapted to the new source code.
  * Minimum required version of glib has been raised to 2.42.
  * Minimum required version of cmake has been raised to 3.0.

## gsa 7.0.0 (2016-11-09)

This is the first release of the Greenbone Security Assistant (GSA) 7.0 module
for the Open Vulnerability Assessment System release 9 (OpenVAS-9). It is the
web client that makes the full feature set of OpenVAS Manager available in a web
browser.

GSA 7.0 introduces an entirely new layout and style of the user interface.
This includes a new dashboard feature as well as numerous new charts.
The new GSA also introduces the explicit asset management for hosts and
operating systems.

Many thanks to everyone who has contributed to this release:
Benoît Allard, Hani Benhabiles, Björn Ricks, Matthew Mundell, Timo Pollmeier,
Jan-Oliver Wagner and Michael Wiegand.

Main changes compared to the 6.0 series:
* Comprehensively updated user interface with new style and workflows, dialogs
  and various comfort functions using JS technology.
* Introduced configurable dashboards.
* Several new charts, from schedule gantt to host network topology.
* Explicit asset management for hosts and operating systems.
* Built-in CVE Scanner for immediate offline evaluation of assets.
* Increased several build dependencies.

Main changes compared to 6.1+beta4:
* Comprehensive rework of the charts.
* Comprehensive rework of the dialogs.
* Send filter when creating assets from a report, so that the overrides
  and min QOD settings are used.
* Scanner OMP Slave replaces the Slaves type and require valid TLS certificate.
* Reworked I18N support and added first parts of Portuguese, French,
  Turkish and Arabic.
* Changed performance overview to use from-to ranges.
* Add "Most vulnerable Operating Systems" chart.
* Add alert method SNMP.
* Added a global dashboard.
* Combine individual feed management pages into a single one.
* SCP and verinice credentials now credentials objects.
* Added dashboards to more sections.
* Add Default CA Cert setting.
* Replaced png graphics by svg graphics.
* Add support for connecting to Manager over a UNIX socket.
* Add command line options --munix-socket and --unix-socket.
* Add command line options --http-sts and --http-sts-max-age.
* Increase limit of maximum connections per IP.
* Increase dependency for gnutls from 2.8 to 3.2.15.
* Increase dependency for glib from 2.16 to 2.32.
* Increase required cmake version from 2.6 to 2.8.
* Numerous minor fixes and improvements.
* Some improvements for the logging.
* Fixes for UTF-8.
* Reduced memory consumption and fixed memory leaks.


## gsa 6.1+beta4 (2016-04-15)

This is the fourth beta release of the upcoming version 6.1 of the
Greenbone Security Assistant (GSA). It will be part of the upcoming
OpenVAS-9 release. This module is the web client that makes the
full feature set of OpenVAS Manager available in a web browser.

This release addresses an issue which caused the tar ball of gsa 6.1+beta3 to
be missing a file, making it impossible to build from the release tar ball. It
also improves memory handling during XSL transformations.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner and Michael Wiegand.

Main changes since 6.1+beta3:
* Update list of files to be ignored for tar balls to avoid accidentally
  excluding necessary files.
* Reduce memory usage during XSL transformations.


## gsa 6.1+beta3 (2016-04-14)

This is the third beta release of the upcoming version 6.1 of the
Greenbone Security Assistant (GSA). It will be part of the upcoming
OpenVAS-9 release. This module is the web client that makes the
full feature set of OpenVAS Manager available in a web browser.

This release comprehensively updates the user interface style and
workflows, using JS technologies for dialogs, widgets and various other
elements.

Many thanks to everyone who has contributed to this release:
Benoît Allard, Hani Benhabiles, Matthew Mundell, Timo Pollmeier,
Jan-Oliver Wagner and Michael Wiegand.

Main changes since 6.1+beta2:
* Replace login and password in slaves with credential and show slaves
  using a credential on the credential details page.
* Replace the Certificate and Private Key in Scanners with a Credential.
* Add new alert method 'SCP'.
* Split the autogenerate option into "Autogenerate password" and
* Add new SNMP credential type.  Simplify use of "New Credential" dialog
* Add SNMP credentials to targets.
* Add new client certificate credential type "Autogenerate SSH key pair".
* Add alert conditions for triggering alerts according to result counts
  matched by a filter.
* Add alert event for any SecInfo type.
* Add alert method "Send", for sending the report to a TCP listener.
* Introduce a icon toolbar for overview and details pages.
* Turn Filter section into a toolbar-like compact element.
* New, more dynamic method for creating dashboards / chart boxes
  which makes their size adapt to the screen width, and which also allows
  editing of dashboards like rearranging, removing and adding of new
  components and resizing the row heights.
* Add task preference for auto deleting reports.
* Added links inside charts to respective filters or resources.
* Use the new filter syntax for report results in the filter box.
* Introduce a new info dialog.
* Turned several edit/new pages into dialogs.
* Add syncing of OSP scan configs.
* Apply PRG pattern across entire GUI.
* Reworked login page.
* Add --unix-socket option.
* Add Radius support for authentication.
* Introduce new style for help pages, compatible with the new style
  of the overview pages.
* Get tags working for Assets.
* Various code improvements.


## gsa 6.1+beta2 (2015-10-21)

This is the second beta release of the upcoming version 6.1 of the
Greenbone Security Assistant (GSA). It is the web client that makes the
full feature set of OpenVAS Manager available in a web browser.

This release comprehensively updates the user interface style and
workflows, using JS technologies for dialogs, widgets and various other
aspects.
Also a explicit Asset Management was added for hosts and operating
systems. Several new charts were introduced and a considerable number of
other new features.

Many thanks to everyone who has contributed to this release:
Benoît Allard, Hani Benhabiles, Matthew Mundell, Timo Pollmeier,
Jan-Oliver Wagner, Michael Wiegand and Winland Q. Yang

Main changes since 6.1+beta1:
* New: Hosts and Operating Systems for Asset Management. The previous
  Hosts menu item is renamed to "Hosts (classic).
* New style of the header.
* Add new popup dialogs for any "new" and "edit" dialog.
* Use of the full width of the browser window.
* New layout and interaction scheme of resource list views.
* Add jQuery on all pages except the login page.
* Add subject and message input for email alerts and allow the use of
  various variables in the message text.
* Various extensions to support OSP 1.0 and first 1.1 features.
* Add charts to reports section.
* Split any dual form pages into separate ones for using the popup
  dialogs (for example new/upload combinations).
* Add an upload icon to the Reports page header.
* New: Credentials type.
* Add options to have a user inherit resources from a user being deleted.
* Add alert method "Start Task".
* Add further charts to tasks section, among this the new gantt chart.
* Add charts to Results, among this the new word cloud chart.
* Add option to move a Task to a new slave on the details and edit pages.
* Add a datepicker to support the date entry for new schedules.
* Support IPv6 redirection case.
* Add content security headers.
* Update of Chinese translation.
* Add separate style sheet for login dialog.
* Changed handling of translation strings to allow for standard po file
  management.


## gsa 6.1+beta1 (2015-07-17)

This is the first beta version of the upcoming 6.1 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release -- in combination with the OpenVAS Manager 6.1+beta1 release --
adds support for CVE scanning. It also contains a number of internal
improvements and minor bugfixes.

Many thanks to everyone who has contributed to this release:
Benoît Allard, Hani Benhabiles, Sven Haardiek, Ilmar Habibulin, Matthew Mundell,
Timo Pollmeier, Jan-Oliver Wagner and Michael Wiegand.

Main changes since 6.0 series:
* Support for CVE scanning has been added.
* Internal improvements and various minor bugfixes.
* Updated documentation.


## gsa 6.0.1 (2015-04-01)

This is the first maintenance release of the Greenbone Security Assistant (GSA)
6.0 module for the Open Vulnerability Assessment System release 8 (OpenVAS-8).

This release addresses, apart from various fixes all over the GUI, especially
the usability improvement for powerfilters, making the less crowded with
standard filter elements.

Many thanks to everyone who contributed to this release:
Hani Benhabiles, Matthew Mundell, Timo Pollmeier and Michael Wiegand.

Main changes compared to 6.0.0:
* Moved standard keywords away from the powerfilter string to
  make the text entry less crowded. The elements are still visible
  below the entry field and can be specified in the powerfilter
  in case these should be changed.
* Allow access to the Create Permissions page even if the user has limited
  subject access.
* Changed connection timeout to allow for very large report downloads.
* Improvements to the package configure and build system.
* Various improvements to the online help.
* Various minor bugfixes.


## gsa 6.0.0 (2015-03-17)

This is the first release of the Greenbone Security Assistant (GSA) 6.0 module
for the Open Vulnerability Assessment System release 8 (OpenVAS-8). It is the
web client that makes the full feature set of OpenVAS Manager available in a web
browser.

GSA 6.0 implements all of the new features of the protocol OMP 6.0.
This includes scanner management, new user roles and Quality of Detection (QoD)
information. The new GSA also introduces support for charts and dashboards as
well as bulk actions and contains a number of other new features and
improvements. Please see the comprehensive list below for more details.

Many thanks to everyone who has contributed to this release:
Michal Ambroz, Benoît Allard, Hani Benhabiles, Matthew Mundell, Timo Pollmeier and Michael
Wiegand.

Main changes compared to the 5.0 series:
* Support for configuring OTP and OSP based scanners has been added. The classic
  OpenVAS Scanner is pre-configured.
* Support for displaying charts has been added.
* A "SecInfo" dashboard showing 4 charts that can be individually be configured
  regarding type, object type and filter has been added
* A scan configuration editor for the OSP based scanner type "ovaldi" has been
  added.
* Support for the SecInfo object type "CERT-Bund" has been added.
* Support for guest user logins has been added.
* Support for new "Super Admin" role in Manager has been added.
* Support for displaying the "Solution Type" of an NVT has been added.
* A "Results" section has been added in the "Scan Management" menu.
* Support for modifying the file name format of exported resource lists,
  resource details and reports has been added.
* Support for bulk actions has been added.
* A "Modify Task" wizard has been added.
* New super permissions for group administration have been added.
* Support for editing user names has been added.
* Support for handling Quality of Detection (QoD) information has been added.
* Support for displaying the success or failure of SSH, SMB and ESXi
  authentication has been added.
* Support for editing of task schedule periods has been added.
* A "Backend operation" line is now included in the page footer. This is the
  time taken to get from the start of the page handler to the start of the XSL
  transform.
* GSA will now use libxslt by default for XSLT processing instead of spawning an
  external 'xsltproc' process.
* Users are now allowed to have multiple simultaneous sessions, as long as the
  sessions are on different browsers.
* Support for adding ESXi credentials to targets has been added.
* The public key requirement has been removed from the Credentials creation.
* The target locator feature has been removed as this is not being fully
  supported by the back end anyway.
* Support for mixing objects owned by different users has been extended.
* The ITS (IT-Schwachstellenampel) face has been updated.
* Setting the user timezone is now easier.
* Permission handling has been improved.
* Powerfilter configuration has been simplified.
* Signal handling has been improved.
* The auto refresh feature has been improved.
* The handling of user groups when dropping privileges has been improved.
* Library checks during package configuration have been improved and are now
  more comprehensive and consistent.
* Handling of linker and compiler flags during package configuration has been
  improved and simplified.
* Documentation has been updated.
* Numerous small improvements and bugfixes.

Main changes compared to 6.0+beta6:
* Support for connection timeouts and limits for concurrent connections per IP
  has been added.
* Powerfilter configuration has been simplified.
* Support for setting scanner keys and certificates has been added.
* Signal handling has been improved.
* Documentation has been updated.


## gsa 6.0+beta6 (2015-02-11)

This is the sixth beta version of the upcoming 6.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds support for displaying OSP scanner details, Quality of
Detection (QoD) information and authentication success or failure. It also adds
support for editing task schedule periods and improves the display of solution
type information and contains a number of other bug fixes and improvements.

Many thanks to everyone who has contributed to this release:
Hani Benhabiles, Matthew Mundell, Timo Pollmeier, Jan-Oliver Wagner and Michael
Wiegand.

Main changes since 6.0+beta5:
* Support for displaying OSP scanner details has been added.
* Support for handling Quality of Detection (QoD) information has been added.
* Support for displaying the success or failure of SSH, SMB and ESXi
  authentication has been added.
* Support for editing of task schedule periods has been added.
* Support for displaying solution types has been improved.
* An issue which could cause the GSA session to be terminated prematurely under
  certain circumstances has been fixed.
* An issue which prevented users with the "Super Admin" role from seeing notes
  and overrides created by other users has been fixed.
* An issue which prevented users with the "Super Admin" role from cloning
  certain objects has been fixed.
* Handling of errors caused by incorrect database entries has been improved.
* MIME types for forms are now consistent.
* Error messages for alerts with missing RFPs have been made more consistent.
* Library checks during package configuration have been improved and are now
  more comprehensive and consistent.
* Handling of linker and compiler flags during package configuration has been
  improved and simplified.
* Documentation has been updated.


## gsa 6.0+beta5 (2015-01-12)

This is the fifth beta version of the upcoming 6.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds support for sharing slaves, bulk actions and a "Modify Task"
wizard as well as support for improved group administration and editing user
names. It also improves support for OSP scanners and default resource selection
in wizards and addresses a number of smaller issues.

Many thanks to everyone who has contributed to this release:
Hani Benhabiles, Matthew Mundell, Timo Pollmeier, Jan-Oliver Wagner and Michael
Wiegand.

Main changes since 6.0+beta4:
* Support for sharing slaves has been added.
* Support for bulk actions has been added.
* A "Modify Task" wizard has been added.
* New super permissions for group administration have been added.
* Support for editing user names has been added.
* Support for OSP scanners has been improved.
* Improved support for default resource selection in wizards.
* Support for "Super Admin" role has been improved.
* Ensured auto refresh refreshes the correct page.
* Handling of solution type information has been improved and made more
  accessible.
* Documentation has been updated.
* Numerous small improvements and bugfixes.


## gsa 6.0+beta4 (2014-11-21)

This is the fourth beta version of the upcoming 6.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds support for the new "Super Admin" role and for displaying NVT
solution types and contains a number of smaller improvements.

Many thanks to everyone who has contributed to this release:
Michael Ambroz, Hani Benhabiles, Matthew Mundell, Timo Pollmeier, Jan-Oliver
Wagner and Michael Wiegand.

Main changes since 6.0+beta3:
* Support for new "Super Admin" role in Manager has been added.
* Support for displaying the "Solution Type" of an NVT has been added.
* Setting the user timezone is now easier.
* Permission handling has been improved.
* Handling of the guest token when requesting charts has been improved.
* Support for modifying the file name format of exported resource lists,
  resource details and reports has been added.
* The handling of user groups when dropping privileges has been improved.
* The build process has been adjusted for changes in OpenVAS Libraries.
* GSA is now only linked against libgthread in environments where this is
  required, i.e. when building with GLib =< 2.30.
* Documentation has been updated.
* Numerous small improvements and bugfixes.


## gsa 6.0+beta3 (2014-10-14)

This is the third beta version of the upcoming 6.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release makes multiple improvements to various charts, such as adding
support for line charts, adding charts to the tasks page and adding support for
exporting data as an HTML table. It also changes the default behaviour for XSLT
processing from spawning an external process to using libxslt and restores
compatibility with older GLib versions.

Many thanks to everyone who has contributed to this release:
Benoît Allard, Hani Benhabiles, Matthew Mundell, Timo Pollmeier and Michael
Wiegand.

Main changes since 6.0+beta2:
* Support for line charts has been added.
* The charts request parameter is now processed for all HTTP GET requests.
* Charts have been added to the tasks page.
* Support for exporting data as an HTML table has been added to charts.
* Numerous cleanups and consolidations for various charts.
* GSA will now use libxslt by default for XSLT processing instead of spawning an
  external 'xsltproc' process.
* Compatibility with older GLib versions (2.30 and before) has been restored.
* Documentation has been updated.


## gsa 6.0+beta2 (2014-09-23)

This is the second beta version of the upcoming 6.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release introduces support for guest user logins and extends support for
multiple scanners. It also allows multiple simultaneous sessions per user and
contains a number of other improvements to the user interface.

Many thanks to everyone who has contributed to this release:
Hani Benhabiles, Michael Meyer, Matthew Mundell, Timo Pollmeier, Jan-Oliver
Wagner and Michael Wiegand.

Main changes since 6.0+beta1:
* Support for guest user logins has been added.
* Support for multiple scanners has been improved further.
* Users are now allowed to have multiple simultaneous sessions, as long as the
  sessions are on different browsers.
* Support for displaying a "Affected Software/OS" section in the results has
  been added.
* The 'clone' action is now available directly from the details pages.
* Support for "NVTs by family" bubble charts has been added.
* Selections in drop-down menus are now automatically submitted if JavaScript is
  available.
* Support for adding ESXi credentials to targets has been added.
* GPLv2+ licence notices now contain the exact wording suggested by the Free
  Software Foundation.
* Documentation has been updated.
* Numerous small improvements and bugfixes.


## gsa 6.0+beta1 (2014-08-23)

This is the first beta version of the upcoming 6.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release -- in combination with the OpenVAS Manager 6.0+beta1 release --
enables a number of new features like the multi-scanner support, the first
charts in SecInfo, the new Cert-BUND in SecInfo and the new results section
under Scan Management.

Many thanks to everyone who has contributed to this release:
Hani Benhabiles, Matthew Mundell, Timo Pollmeier, Jan-Oliver Wagner.

Main changes since 5.0 series:
* New: Configure menu "Scanners" for OTP and OSP based scanners. The classic
  OpenVAS Scanner is pre-configured.
* New: For Task objects there is now a scanner selection. Scanner-specific
  settings are grouped with the respective scanner type. Apart from the
  classic OpenVAS Scanner now a OSP-based OVAL Scanner "ovaldi" is an optional
  scanner type.
* New: Scan Configuration editor for OSP-based scanner type "ovaldi".
* New: Chart types "bar-chart" and "donut", based on the d3 library, for
  each of the SecInfo object types.  These are used for showing severity
  and severity classes.
* New: SecInfo dashboard showing 4 charts that can be indivually be configured
  regarding type, object type and filter.
* New: SecInfo object type "CERT-Bund", a german CERT.
* New: "Results" section in menu "Scan Management".
* Added "Backend operation" in the page footer. This is the time taken to get
  from the start of the page handler to the start of the XSL transform.
* Added warning if login password does not comply with password policy.
* Remove public key requirement from Credentials creation.
* Removed target locator feature as this is not being fully
  supported by the backend anyway.
* Removed any remains of handling Pause status of tasks.
* ITS (IT-Schwachstellenampel, now at 1.1):
  * Added settings page and password warning.
* Various small fixes and improvements.


## gsa 5.0.0 (2014-04-23)

This is the first release of the Greenbone Security Assistant (GSA) 5.0 module
for the Open Vulnerability Assessment System release 7 (OpenVAS-7).
It is the web client that makes the full feature set of OpenVAS Manager
available in a web browser.

GSA 5.0 implements all of the new features of the protocol OMP 5.0.
This includes the Groups, Roles and Permissions management and Tags.
Further major changes are the new results browser, multi-language support
and the switch from "threat" to "severity" concept. For a complete list of
changes, please refer to the list below.

Many thanks to everyone who has contributed to this release:
Benoît Allard, Hani Benhabiles, Michael Meyer, Matthew Mundell, Timo Pollmeier,
Jan-Oliver Wagner and Michael Wiegand.

Main changes since 4.0.x:
* New: CVSS Score calculator.
* New: User, group, role and permission management.
* New: Tags and tag management.
* New: Internationalization support.
* New: Support for app icons.
* New: Support for displaying gathered SSL certificates.
* New: Support for Alterable Tasks.
* New: Setting of the Source Interface for Tasks.
* New: Alive Test for Tasks.
* Changed: The default result filter now includes "low" and "log" messages as well.
* Changed: GSA now requires the user's existing password when changing passwords.
* The concept of "Threat" is replaced by "Severity".
* Improved: Display of prognostic results.
* The interface has been simplified, improved and made more consistent in a
  number of places.
* Support for the alternative face "IT-Schwachstellenampel" has been added.
* The required minimum GnuTLS version has increased to 2.8.
* The required minimum libmicrohttpd version has increased to 0.9.0.
* Added support for setting the priorities for cipher suites when using HTTPS.
* Add --drop option to drop privileges once the chroot is established.
  Attention: This action was previously part of the --chroot parameter, if
  required, this now needs to be explicitly set.
* Add --face to support switching between different layouts.
* Code cleanup.

And additionally changes compared to last release candidate 5.0+beta13:
* Added permission-style check for Trashcan menu item.
* Improved package configuration.
* Various bug-fixes, cleanups and improvements, especially for consistency.

## gsa 5.0+beta13 (2014-04-10)

This is the thirteenth beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is a web client that makes the full feature set of
OpenVAS Manager available through a web browser.

This release adds support for an alternative GSA face called
"IT-Schwachstellenampel" ("IT vulnerability traffic light") and improves support
for role editing. It also improves the handling of signals and libmicrohttpd
error messages.

Many thanks to everyone who has contributed to this release:
Benoît Allard, Hani Benhabiles, Matthew Mundell, Timo Pollmeier, Jan-Oliver
Wagner and Michael Wiegand.

Main changes since 5.0+beta12:
* Signal handling has been improved.
* Logging of libmicrohttpd error messages has been improved.
* Support for role editing has been added.
* The display of permissions for tasks has been improved.
* The i18n documentation has been updated and improved.
* Support for the alternative face "IT-Schwachstellenampel" has been added.


## gsa 5.0+beta12 (2014-03-28)

This is the twelfth beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is a web client that makes the full feature set of
OpenVAS Manager available through a web browser.

This release adds a delete possibility to the role editor, and fix an issue
with redirect locations.

Many thanks to everyone who has contributed to this release:
Matthew Mundell and Hani Benhabiles.

Main changes since 5.0+beta10:
* Complete deleting of roles.
* Use the Host header from the client request to determine the Location
  response header value. Drop back to relative if not provided.
* Code cleanup.


## gsa 5.0+beta11 (2014-03-26)

This is the eleventh beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is a web client that makes the full feature set of
OpenVAS Manager available through a web browser.

This release adds a new role editor, extends the German translation as well as
makes the interface more consistent with the commands available to the user.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Timo Pollmeier and Hani Benhabiles.

Main changes since 5.0+beta10:
* Adjust tags pages to new OMP syntax that uses "resource" instead of "attach"
  and "orphan" instead of "orphaned". Add markers for orphaned tags and
  resources in trash. Make tags trash more consistent with normal table.
* Add creating of roles, and basis for deleting and editing roles.
* Improvement to the wizard
* Switch filters associated with alerts from "report" to "result".
* More translations to German language.
* Code cleanup.


## gsa 5.0+beta10 (2014-03-18)

this is the tenth beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is a web client that makes the full feature set of
OpenVAS Manager available through a web browser.

This release extends the German translation as well as makes the interface
more consistent with the commands available to the user.

Many thanks to everyone who has contributed to this release:
Benoît Allard, Timo Pollmeier and Matthew Mundell.

Main changes since 5.0+beta9:
* Add Slave and Network	Source Interface fields to the report summary.
* More translations to German language.
* Code cleanup.


## gsa 5.0+beta9 (2014-03-12)

This is the ninth beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is a web client that makes the full feature set of
OpenVAS Manager available in a web browser.

This release now preserves the user's input upon errors during Setting editing,
and extends the German translation.

Many thanks to everyone who has contributed to this release:
Timo Pollmeier and Matthew Mundell.

Main changes since 5.0+beta8:
* Preserve user's input after error on `Edit My Settings`.
* More translations to German language.
* Code cleanup.


## gsa 5.0+beta8 (2014-03-06)

This is the eighth beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is a web client that makes the full feature set of
OpenVAS Manager available in a web browser.

This release now requires the user's existing password when changing passwords
and expects NVT information to be in the new style. It also makes the interface
more consistent with the commands available to the user and extends the German
translation.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Hani Benhabiles and Timo Pollmeier.

Main changes since 5.0+beta7:
* Make interface more consistent with available commands.
* More translations to German language.
* NVT information is now expected to be in the new style.
* GSA now requires the user's existing password when changing passwords.
* Code cleanup.


## gsa 5.0+beta7 (2014-02-27)

This is the seventh beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is a web client that makes the full feature set of
OpenVAS Manager available in a web browser.

This release adds numerous improvements to the user interface.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Hani Benhabiles and Timo Pollmeier.

Main changes since 5.0+beta6:
* Show or hide dialog elements according to the availability of commands.
* Prevent targets currently used for being modified.
* More translations to German language.
* Improved i18n implementation.
* Code cleanup and various small bug-fixes.


## gsa 5.0+beta6 (2014-02-16)

This is the sixth beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is a web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds the setting for user interface language and Alive Test
to Target management.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner, Timo Pollmeier and Benoît Allard.

Main changes since 5.0+beta5:
* Add Alive Test to Create Target, Modify Target and Target Details.
* Add setting User Interface Language.
* More translations to German language.
* Improved i18n implementation.
* Code cleanup and various small bug-fixes.


## gsa 5.0+beta5 (2014-01-28)

This is the fifth beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is a web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds internationalization support to the GSA, support for different
'faces' via the new --face parameter as well as numerous improvements to the user
interface.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner, Timo Pollmeier and Benoît Allard.

Main changes since 5.0+beta4:
* Add --face to support switching between different layouts.
* Add internationalization support (english and german included, new translations in
  the form of contributions are welcome).
* The interface has been simplified, improved and made more consistent in a
  number of places.
* Code cleanup.


## gsa 5.0+beta4 (2014-01-13)

This is the fourth beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds a new --drop parameter to instruct the GSA to drop its privileges
once the chroot has been established, as well as numerous improvements to the user
interface.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Timo Pollmeier and Hani Benhabiles.

Main changes since 5.0+beta3:
* Add --drop option to drop privileges once the chroot is established.
  Attention: This action was previously part of the --chroot parameter, if
  required, this now needs to be explicitly set.
* The interface has been simplified, improved and made more consistent in a
  number of places.
* Code cleanup.


## gsa 5.0+beta3 (2013-11-22)

This is the third beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds support for Alterable Tasks and Source Interface access
control. It changes the default result filter to include "low" and "log"
messages as well and adds support for selecting the cipher suite to be used for
the HTTPS connection, as well as numerous improvements to the user interface.

Many thanks to everyone who has contributed to this release:
Hani Benhabiles, Michael Meyer, Matthew Mundell, Timo Pollmeier, Jan-Oliver
Wagner and Michael Wiegand.

Main changes since 5.0+beta2:
* Support for Alterable Tasks has been added.
* Support for setting of the Source Interface has been added.
* Support for the new "Severity" concept has been added in more places.
* The default result filter now includes "low" and "log" messages as well.
* Add support for setting the priorities for cipher suites when using HTTPS.
* The required minimum libmicrohttpd version has increased to 0.9.0.
* The interface has been simplified, improved and made more consistent in a
  number of places.
* Code cleanup.


## gsa 5.0+beta2 (2013-09-30)

This is the second beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release fixes an issue with XSL transformations and another one causing
issues after changing the password of the user currently logged in. It also
enables a number of new features added to OpenVAS Manager since the last GSA
release and contains a number of improvements to the user interface.

Many thanks to everyone who has contributed to this release:
Hani Benhabiles, Matthew Mundell, Timo Pollmeier and Jan-Oliver Wagner.

Main changes since 5.0+beta1:
* Support for the new "Severity" concept has been added in a number of places.
* An issue which caused segmentation faults when errors in XSL transformations
  were encountered has been fixed.
* The interface has been simplified, improved and made more consistent in a
  number of places.
* An issue which caused permission issues after changing passwords has been
  fixed.
* Support for debug parameter has been added.
* Parameter handling has been improved.
* Code cleanup.


## gsa 5.0+beta1 (2013-07-01)

This is the first beta version of the upcoming 5.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release -- in combination with the OpenVAS Manager 5.0+beta1 release --
enables a number of new features like improved results display, support for
advanced user and permission management and internationalization.

Many thanks to everyone who has contributed to this release:
Hani Benhabiles, Matthew Mundell, Timo Pollmeier, Jan-Oliver Wagner and Michael
Wiegand.

Main changes since 4.0 series:
* The display of prognostic results has been improved.
* Support for user, group, role and permission management has been added.
* The user interface has been updated to match new and changed functionality in
  OpenVAS Manager.
* The results display has been updated to support new style NVTs.
* The required minimum GnuTLS version has increased to 2.8.
* The required minimum OpenVAS Libraries version has increased to 7.0.0.
* A CVSS Score calculator has been added.
* Tag management and support for tags in a number of places has been added.
* Internationalization support has been added.
* The handling of bad or missing tokens has been improved.
* Support for app icons has been added.
* Support for displaying the network topology natively has been added.
* Support for displaying gathered SSL certificates has been added.
* Code cleanup.


## gsa 4.0+beta5 (2013-02-22)

This is the fifth beta version of the upcoming 4.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds support for new features in OpenVAS Manager 4.0+beta5
like the improved Powerfilters, easy access to CVE, OVAL and DFN-CERT data and
various improvements to the interface.

Many thanks to everyone who has contributed to this release:
Hani Benhabiles, Henri Doreau, Andre Heinecke, Werner Koch, Matthew Mundell,
Timo Pollmeier, Jan-Oliver Wagner, Michael Wiegand and Felix Wolfsteller.

Main changes since 4.0+beta4:
* Support for browsing the CVE database has been added.
* Support for accessing OVAL and DFN-CERT data has been added.
* Powerfilters have been improved and are now available in more places.
* SCAP synchronization can now be triggered from the web interface.
* Date selection for schedules has been improved.
* The documentation available through the Help menu has been updated and
  extended.
* Exporting and editing is now supported for more objects.


## gsa 4.0+beta4 (2012-11-05)

This is the fourth beta version of the upcoming 4.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds support for new features in OpenVAS Manager 4.0+beta4 like
the automatic filtering of false positives, multiple alerts and a wizard for
new users.

Many thanks to everyone who has contributed to this release:
Andre Heinecke, Matthew Mundell, Jan-Oliver Wagner and Michael Wiegand.

Main changes since 4.0+beta3:
* Support for Auto-FP feature and trusted vendor updates has been added.
* Support for multiple alerts per task has been added.
* Support for a wizard for new users has been added.
* Support for filter management has been added.
* Help texts have been improved.
* Powerfilters are now available in more places.
* CPE Management has been improved.


## gsa 4.0+beta3 (2012-05-04)

This is the third beta version of the upcoming 4.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds support for new features in OpenVAS Manager
4.0+beta3 and includes several small UI fixes.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Michael Wiegand and Felix Wolfsteller.

Main changes since 4.0+beta3:
* Support for OMP capabilities has been added.
* Several small inconsistencies in the user interfaces have been addressed.


## gsa 4.0+beta2 (2012-04-25)

This is the second beta version of the upcoming 4.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release fixes a compatibility issue with Firefox 3.5, includes updates to
the CMake infrastructure and adds support for new features in OpenVAS Manager
4.0+beta2.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner and Michael Wiegand.

Main changes since 4.0+beta2:
* The CMake infrastructure has been cleaned up to ensure that compilation with
  modern gccs works.
* A compatibility issue with Firefox 3.5 has been resolved.
* Support for new features in OpenVAS Manager 4.0+beta2 has been added.


## gsa 4.0+beta1 (2012-04-16)

This is the first beta version of the upcoming 4.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release -- in combination with the OpenVAS Manager 4.0+beta1 release --
introduces the renaming of "Escalator" to "Alert" and an improved handling
of the Targets list.

Many thanks to everyone who has contributed to this release:
Matthew Mundell.

Main changes since 3.0 series:

* Renamed "Escalator" to "Alert".
* Added keyword filter, pagination, export and edit to Targets.
* "New Target" now a page of its own.
* Updated Target details page slightly.
* Split and updated help pages for targets into multiple pages, each linked
  by corresponding dialogs.


## gsa 3.0.0 (2012-03-26)

This is the first release of the Greenbone Security Assistant (GSA) 3.0 module
for the Open Vulnerability Assessment System release 5 (OpenVAS-5).
It is the web client that makes the full feature set of OpenVAS Manager
available in a web browser.

GSA 3.0 implements all of the new features of the protocol OMP 3.0.
This includes Asset Management, Port Lists, SecInfo Management with SCAP data,
delta reports and prognostic reports.

Many thanks to everyone who has contributed to this release:
Henri Doreau, Stephan Kleine, Matthew Mundell, Michael Wiegand and Jan-Oliver
Wagner.

Main changes since 2.0.x:

* New: Configure object Port Lists.
* New: References info box in results view.
* New: Product detection info box in results view.
* New: Allow target list upload from file.
* New: Support for note/overrides lifetimes.
* New: Support for empty passwords has been added.
* New: Support for changing user passwords.
* New: Asset Management.
* New: Exporting notes and overrides.
* New: Prognostic scans.
* New: Task observers.
* New: SecInfo Database with SCAP data CVE and CPE.
* New: Individual user settings, starting with time zone.
* New: Delta reports.
* New: Display single result details.
* Changed: The max_host and max_checks scan performance parameters have
  been moved from scan configs to tasks.
* New: Indicators for detected operating systems.
* New: Uploading additional reports to a container task.
* New: Displaying the hostname in the result.
* Changed: Limitations on passwords allowed for LSC credentials have been reduced
  further.
* New: Trashcan. It is now possible to place objects in a trashcan
  instead of deleting them directly.
* New: Number of results per page adjustable.
* The GSA no longer terminates upon receiving a SIGHUP signal to better match
  expected behavior.
* The login behaviour has been improved.
* Support for listing NVTs addressing a certain CVE has been added.
* Support for listing CVEs affecting a certain CPE has been added.
* An issue which caused uploaded PKCS #12 certificates to be incorrectly
  truncated has been fixed.
* The internal handling of request parameters has been improved.
* The user interface design has been updated.
* Support for improved handling of ISO timestamps has been added.
* A bug which caused valid hostnames to be rejected in the LDAP host field has
  been fixed.
* GET and POST requests are now used consistently throughout the GSA.
* A number of inconsistencies in the interface have been addressed.
* A number of compiler warnings discovered by Stephan Kleine have been
  addressed.

And additionally changes compared to last release candidate 3.0+rc1:

* New: Per-user LDAP authentication configurable.
* Allow to create notes/overrides for observed tasks.
* Allows ',' as separator for observer lists.


## gsa 3.0+rc1 (2012-03-15)

This is the first release candidate of the upcoming 3.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds the Port Lists feature and report download for delta
reports and prognostic reports.

Many thanks to everyone who has contributed to this release:
Henri Doreau, Matthew Mundell and Felix Wolfsteller.

Main changes since 3.0+beta8:
* New feature Port Lists.
* New references info box in results view.
* New product detection info box in results view.
* Allow target list upload from file.
* Various bug fixes.


## gsa 3.0+beta8 (2011-12-02)

This is the eight beta version of the upcoming 3.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds support for note lifetimes and empty passwords and improves
input validation and the navigation when viewing delta reports.

Many thanks to everyone who has contributed to this release:
Matthew Mundell and Michael Wiegand.

Main changes since 3.0+beta7:
* The navigation when viewing delta reports had been improved.
* Support for note lifetimes has been added.
* Support for empty passwords has been added.
* Input validation has been improved.


## gsa 3.0+beta7 (2011-11-23)

This is the seventh beta version of the upcoming 3.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release add support for improved handling of ISO timestamps and fixes
visual inconsistencies in asset management and override information display.

Many thanks to everyone who has contributed to this release:
Matthew Mundell and Michael Wiegand.

Main changes since 3.0+beta6:
* Support for improved handling of ISO timestamps has been added.
* A number of visual inconsistencies in the asset management have been
  addressed.
* A bug with cause override information to be displayed even when no overrides
  were applied has been fixed.


## gsa 3.0+beta6 (2011-11-16)

This is the sixth beta version of the upcoming 3.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds support for changing the user password through GSA, improves
the display of SCAP data and adds support for exporting notes and overrides and
for override lifetimes. It also fixes a bug which cause sessions to expire
prematurely and a bug in the hostname validation for LDAP hosts.

Many thanks to everyone who has contributed to this release:
Henri Doreau, Matthew Mundell, Michael Wiegand and Jan-Oliver Wagner.

Main changes since 3.0+beta5:
* Support for changing user passwords has been added.
* Support for listing NVTs addressing a certain CVE has been added.
* Support for listing CVEs affecting a certain CPE has been added.
* Support for exporting notes and overrides has been added.
* A bug which caused sessions to expire prematurely with some browsers has been
  fixed.
* Support for displaying the SCAP update timestamp has been added.
* Support for override lifetimes has been added.
* A bug which caused valid hostnames to be rejected in the LDAP host field has
  been fixed.


## gsa 3.0+beta5 (2011-10-11)

This is the fifth beta version of the upcoming 3.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release adds support for a number of new features, including asset
management, displaying SCAP data, prognostic scans, task observers and
individual settings for users. It also features a redesigned user interface and
improved internal handling of request parameters.

Many thanks to everyone who has contributed to this release:
Henri Doreau, Matthew Mundell, Michael Wiegand and Jan-Oliver Wagner.

Main changes since 3.0+beta4:
* Support for asset management has been added.
* The internal handling of request parameters has been improved.
* The user interface design has been updated.
* Support for prognostic scans has been added.
* Support for task observers has been added.
* Support for displaying SCAP data has been added.
* Support for individual user settings has been added.
* Support for individual time zones for users has been added.


## gsa 3.0+beta4 (2011-07-21)

This is the fourth beta version of the upcoming 3.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release addresses a number of minor issues which were discovered after the
release of GSA 3.0+beta3 and improves the display of delta report and individual
result details. For details, please refer to the list of changes below.

Many thanks to everyone who has contributed to this release:
Henri Doreau, Matthew Mundell, Michael Wiegand and Jan-Oliver Wagner.

Main changes since 3.0+beta3:
* A number of inconsistencies in the interface have been addressed.
* Support for displaying delta reports has been improved.
* Support for viewing individual result details has been improved.
* The max_host and max_checks scan performance parameters have been moved from
  scan configs to tasks.


## gsa 3.0+beta3 (2011-06-24)

This is the third beta version of the upcoming 3.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release addresses a number of minor issues which were discovered after the
release of GSA 3.0+beta2 and introduces a number of new features. For details,
please refer to the list of changes below.

Many thanks to everyone who has contributed to this release:
Henri Doreau, Stephan Kleine, Matthew Mundell, Michael Wiegand and Jan-Oliver
Wagner.

Main changes since 3.0+beta2:
* Support for displaying delta reports has been added.
* Support for showing detected operating systems has been improved.
* Support for uploading additional reports to a container task has been added.
* A number of compiler warnings discovered by Stephan Kleine have been
  addressed.
* An issue which caused uploaded PKCS #12 certificates to be incorrectly
  truncated has been fixed.
* The display of command results has been improved.
* Support for displaying the hostname in the result has been added.
* Support for viewing individual result details has been added.


## gsa 3.0+beta2 (2011-05-19)

This is the second beta version of the upcoming 3.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release addresses a number of minor issues which were discovered after the
release of GSA 3.0+beta1. For details, please refer to the list of changes
below.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Michael Wiegand and Jan-Oliver Wagner.

Main changes since 3.0+beta1:
* Limitations on passwords allowed for LSC credentials have been reduced
  further.
* GET and POST requests are now used consistently throughout the GSA.
* The GSA no longer terminates upon receiving a SIGHUP signal to better match
  expected behavior.


## gsa 3.0+beta1 (2011-05-05)

This is the first beta version of the upcoming 3.0 release of the Greenbone
Security Assistant (GSA). It is the web client that makes the full feature set
of OpenVAS Manager available in a web browser.

This release -- in combination with the OpenVAS Manager 3.0+beta1 release --
introduces a number of new features. For details, please refer to the list of
changes below.

Many thanks to everyone who has contributed to this release:
Henri Doreau, Matthew Mundell, Michael Wiegand and Jan-Oliver Wagner.

Main changes since 2.0 series:
* New feature: Trashcan. It is now possible to place objects in a trashcan
  instead of deleting them directly.
* The login behaviour has been improved.
* Support for Host Details reported by OpenVAS Scanner has been added.
* Support for container task (imported reports) has been added.
* Support for specifying an SSH port for Local Security Checks has been added.
* Support for escalating result to a Sourcefire Defense Center has been added.
* Support for using an SSH key pair for SSH authentication has been added.
* Support for setting the number of results displayed on one page has been
  added.


## gsa 2.0.1 (2011-03-02)

This is the first maintenance release of the Greenbone Security Assistant (GSA)
2.0 module for the Open Vulnerability Assessment System release 4 (OpenVAS-4).
It is the web client that makes the full feature set of OpenVAS Manager
available in a web browser.

This release fixes three memory and resource leaks discovered after the release
of GSA 2.0.0. It also switches XSL transformations to a separate process, which
protects the GSA from threading and memory errors in libxslt and libxml.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Pavel Sejnoha, Michael Wiegand and Felix Wolfsteller.

Main changes since 2.0.0:
* Two memory leaks discovered by Pavel Sejnoha and one resource leak discovered
  by Felix Wolfsteller have been closed.
* GSA now does XSL transformation in a separate process by default.


## gsa 2.0.0 (2011-02-21)

This is the first release of the Greenbone Security Assistant (GSA) 2.0 module
for the Open Vulnerability Assessment System release 4 (OpenVAS-4).
It is the web client that makes the full feature set of OpenVAS Manager
available in a web browser.

GSA 2.0 implements all of the new features of the protocol OMP 2.0.
This includes the plugin based report format framework, the master-slave
mode and many other changes and improvements. It also brings several
improvements to existing features, like credential management, session
management and an improved build environment.

Many thanks to everyone who has contributed to this release:
Stephan Kleine, Matthew Mundell, Jan-Oliver Wagner, Michael Wiegand and Felix
Wolfsteller.

Main changes since 1.0.x:
* Support for report format plugin framework has been added.
* Support for master-slave mode has been added.
* Support for editing credentials has been added.
* Support for agent verification has been added.
* Input validation for user names and passwords has been improved.
* Support for Microsoft Internet Explorer has been improved.
* The usability and layout of the web interface has been improved.
* GSA now builds with libmicrohttpd 0.9.2 and above.
* Target credentials for SMB and SSH are now separated.
* The user interface for displaying filtered reports and for report downloads
  has been improved.
* Hardening flags are now enabled during compile time to increase code quality.
* Support for setting the port range for a target has been added.
* If no port is specified, GSA will now attempt to listen on the appropriate
  privileged port (80 or 443) and fall back to listening on its default port
  (9392) if those are unavailable.
* GSA now uses pkg-config to find required libraries.
* The HTTP Basic Auth based session management has been replace with a token
  based session management.
* A JavaScript indicator has been added.
* Support for fallback system reports has been added.
* The "About" page has been reworked.
* Cookie based session identification has been added.

Main changes since 2.0+rc5:
* The JavaScript indicator has been improved.
* GSA now checks for required libxml threading support.


## gsa 2.0+rc5 (2011-02-18)

This is the fifth release candidate for the upcoming 2.0 release of the
Greenbone Security Assistant (GSA). It is the web client that makes the full
feature set of OpenVAS Manager available in a web browser.  Release 2.0 is part
of OpenVAS 4, the next generation of the Open Vulnerability Assessment System.

This release fixes an issue which caused some actions in the GSA to fail due to
an error in the cookie base session identification and improves the handling of
relogins after expired sessions.

Many thanks to everyone who has contributed to this release:
Matthew Mundell.

Main changes since 2.0+rc4:
* The cookie base session identification has been improved.
* An issue with parsing the session cookie has been fixed.
* The handling of POST requests after a relogin has been improved.


## gsa 2.0+rc4 (2011-02-17)

This is the fourth release candidate for the upcoming 2.0 release of the
Greenbone Security Assistant (GSA). It is the web client that makes the full
feature set of OpenVAS Manager available in a web browser.  Release 2.0 is part
of OpenVAS 4, the next generation of the Open Vulnerability Assessment System.

This release features a new cookie based session identification infrastructure,
several improvements to user interface, documentation and build environment and
adds support for fallback system reports.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner and Michael Wiegand.

Main changes since 2.0+rc3:
* The documentation and the build environment have been updated.
* The scan config overview now shows the number of selected NVT through family
  selection as well.
* A JavaScript indicator has been added.
* Support for fallback system reports has been added.
* An issue which caused logins to fail under certain circumstances due to overly
  strict input validation has been fixed.
* The "About" page has been reworked.
* Cookie base session identification has been added.


## gsa 2.0+rc3 (2011-02-04)

This is the third release candidate for the upcoming 2.0 release of the
Greenbone Security Assistant (GSA). It is the web client that makes the full
feature set of OpenVAS Manager available in a web browser.  Release 2.0 is part
of OpenVAS 4, the next generation of the Open Vulnerability Assessment System.

This release features a complete replacement of the HTTP Basic Auth based
session management with a token based session management. It also contains
improved documentation and improvements to the build environment.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner and Michael Wiegand.

Main changes since 2.0+rc2:
* A notice is added to the log if binding to the default port failed and the
  fallback port was used.
* GSA now uses pkg-config to find required libraries.
* The HTTP Basic Auth based session management has been replace with a token
  based session management.
* GSA now provides a manual page for the gsad binary.


## gsa 2.0+rc2 (2011-01-21)

This is the second release candidate for the upcoming 2.0 release of the
Greenbone Security Assistant (GSA). It is the web client that makes the full
feature set of OpenVAS Manager available in a web browser.  Release 2.0 is part
of OpenVAS 4, the next generation of the Open Vulnerability Assessment System.

This release extends the range of valid characters for LSC credential passwords,
improves the behavior if no port is specified and makes the output of --version
compliant with the GNU Coding Standards.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner and Michael Wiegand.

Main changes since 2.0+rc1:
* The output of --version now complies with the GNU Coding Standards.
* The range of valid characters for LSC credential passwords has been extended
  further.
* If no port is specified, GSA will now attempt to listen on the appropriate
  privileged port (80 or 443) and fall back to listening on its default port
  (9392) if those are unavailable.


## gsa 2.0+rc1 (2010-12-21)

This is the first release candidate for the upcoming 2.0 release of the
Greenbone Security Assistant (GSA). It is the web client that makes the full
feature set of OpenVAS Manager available in a web browser.  Release 2.0 is part
of OpenVAS 4, the next generation of the Open Vulnerability Assessment System.

This release adds support for separate SMB and SSH credentials and for setting
per-target port ranges. It improves the user interface for displaying filtered
reports and for report downloads.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner and Michael Wiegand.

Main changes since 2.0+beta1:
* Error handling for reports has been improved.
* A bug which cause credential comments to be ignored when creating new LSC
  credentials has been fixed.
* Target credentials for SMB and SSH are now separated.
* The user interface for displaying filtered reports and for report downloads
  has been improved.
* Hardening flags are now enabled during compile time to increase code quality.
* Support for setting the port range for a target has been added.


## gsa 2.0+beta1 (2010-11-19)

This is the first beta version of the upcoming 2.0 release of the
Greenbone Security Assistant (GSA). It is the web client that makes
the full feature set of OpenVAS Manager available in a web browser.
Release 2.0 is part of OpenVAS 4, the next generation
of the Open Vulnerability Assessment System.

GSA 2.0 implements all of the new features of the protocol OMP 2.0.
This include the plugin based report format framework, the master-slave
mode and many other changes and improvements.

Many thanks to everyone who has contributed to this release:
Stephan Kleine, Matthew Mundell, Jan-Oliver Wagner, Michael Wiegand and Felix
Wolfsteller.

Central new features of Greenbone Security Assistant 2.0:

* Support for report format plugin framework has been added.
* Support for master-slave mode has been added.
* Support for editing credentials has been added.
* Support for agent verification has been added.
* Input validation for user names and passwords has been improved.
* Support for Microsoft Internet Explorer has been improved.
* The usability and layout of the web interface has been improved.
* GSA now builds with libmicrohttpd 0.9.2 and above.


## gsa 1.0.0 (2010-08-02)

This is the 1.0.0 release of GSA (Greenbone Security Assistant), an OMP web client
for the Open Vulnerability Assessment System (OpenVAS).

GSA 1.0 represents almost 2 years of intensive work. The mission of GSA is to be
a web client to the OpenVAS Manager 1.0 via the OpenVAS Management Protocol (OMP).

GSA offers a complete implementation of OMP in order to access all features
to organize and manage OpenVAS vulnerability scans. Additionally, GSA
optionally acts as a client for the upcoming openvas-administrator using the
OpenVAS Administration Protocol (OAP) which allows e.g. management of scan users.

Central features of Greenbone Security Assistant are:

* Full OMP 1.0 client. The XML-based OMP responses are transformed into
  web pages via XSLT.

* No additional web-server required. The GSA daemon (gsad) uses microhttpd
  to implement a HTTP service on its own.

* Plain HTML. Neither cookies, JavaScript nor other dynamic elements are used.
  GSA works stateless and uses HTTP Basic Auth.

Greenbone Security Assistant is Free Software (Open Source), licensed
under GNU General Public License Version 2 or any later version.

The OpenVAS development team offers support for any efforts to create binary
packages for the various Linux distributions in order have this new server
readily available for users as soon as possible. Please use our openvas-distro
mailing list for this purpose.


Many thanks to everyone who has contributed to this release since 1.0.0.rc1:
Matthew Mundell, Michael Wiegand.

Main changes since 1.0.0.rc1:
* A bug which caused NVT preferences to be saved incorrectly under certain
  circumstances has been fixed.


## gsa 1.0.0.rc1 (2010-07-16)

This is the first release candidate of the optional gsa module for the Open
Vulnerability Assessment System (OpenVAS) leading up to the upcoming gsa 1.0.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner, Michael Wiegand and Felix Wolfsteller.

Main changes since 1.0.0-beta6:
* Support for LDAP and ADS has been added.
* A number of changes have been made to stay compatible with the updated OMP
  specification.
* Initial support for fetching targets from external sources has been added.
* Support for threat overrides has been added.
* Support for Syslog and SNMP escalators has been added.
* Support for agents has been improved.


## gsa 1.0.0-beta7 (2010-05-28)

This is the seventh beta release of the optional gsa module for the Open
Vulnerability Assessment System (OpenVAS) leading up to the upcoming gsa 1.0.

Many thanks to everyone who has contributed to this release:
Hartmut Goebel, Matthew Mundell, Jan-Oliver Wagner, Michael Wiegand and Felix
Wolfsteller.

Main changes since 1.0.0-beta6:
* An issue which caused empty charts in the performance monitor has been fixed.
* An issue which caused a new task created with both an escalator and a schedule
  to lose the schedule has been fixed.
* Support for Internet Explorer 6 clients has been improved.
* Support for using the "Threat Level Change" escalator condition has been
  added.
* The handling of uploaded preference files has been improved.
* The handling of requests for nonexistent pages has been improved.
* Support for pausing of tasks has been added.
* Support for displaying CVSS scores and Risk Factor values has been added.
* The handling of errors during XSL transformation has been improved.
* The scan start time and end time for individual host are now displayed in the
  report.
* Support for excluding hosts without results from the report has been added.
* Support for filtering results based on CVSS scores has been fixed.


## gsa 1.0.0-beta6 (2010-04-15)

This is the sixth beta release of the optional gsa module for the Open
Vulnerability Assessment System (OpenVAS) leading up to the upcoming gsa 1.0.

Many thanks to everyone who has contributed to this release:
Stephan Kleine, Matthew Mundell, Mareike Piechowiak, Karl-Heinz Ruskowski,
Jan-Oliver Wagner and Michael Wiegand.

Main changes since 1.0.0-beta5:

* Support for ITG and CPE reports has been improved.
* Support for resuming stopped tasks has been added.
* Support for task scheduling has been added.
* Initial support for editing tasks has been added.
* Support for displaying the version of an installed feed has been added.
* A number of build issues have been fixed.
* The documentation available via the "?" icon has been updated.
* The gsad binary is now installed to /usr/sbin instead of /usr/bin.


## gsa 1.0.0-beta5 (2010-03-04)

This is the fifth beta release of the optional gsa module for the Open
Vulnerability Assessment System (OpenVAS) leading up to the upcoming gsa 1.0.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner, Michael Wiegand and Felix Wolfsteller.

Main changes since 1.0.0-beta4:

* Support for notes has been added.
* Support for ITG and CPE reports has been added.
* Improved HTTP conformity.
* Significant speed-up.
* Various cosmetic changes of the html pages
  as well as of some report types.


## gsa 1.0.0-beta4 (2010-02-05)

This is the fourth beta release of the optional gsa module for the Open
Vulnerability Assessment System (OpenVAS) leading up to the upcoming gsa 1.0.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner, Michael Wiegand and Felix Wolfsteller.

Main changes since 1.0.0-beta3:

* Improved HTTP conformity.
* Improved Feed synchronization support.
* Improved line wrapping in reports.
* A bug in the report pagination has been fixed.


## gsa 1.0.0-beta3 (2010-01-27)

This is the third beta release of the optional gsa module
for the Open Vulnerability Assessment System (OpenVAS) leading up to the
upcoming gsa 1.0.

Many thanks to everyone who has contributed to this release:
Matthew Mundell and Felix Wolfsteller.

Main changes since 1.0.0-beta2:

* Improved HTTP conformity.
* Fixed resource leak.
* Improved input checking.
* Add option to run in chroot.


## gsa 1.0.0-beta2 (2010-01-27)

This is the second beta release of the optional gsa module
for the Open Vulnerability Assessment System (OpenVAS) leading up to the
upcoming gsa 1.0.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner and Felix Wolfsteller.

Main changes since 1.0.0-beta1:

* Integrated online help extended.
* Improved handling of feed management.
* Added support for administrator feature to edit
  scanner settings.
* Added support for administrator feature to edit
  user details (password, IP-based access rules).
* Allow "\" as part of a credential login name.
* Remain on the task page after deleting the
  task's last report.
* Improved handling of XML/HTML report exports.
* Added command line option "--listen", "--alisten",
  "--mlisten".


## gsa 1.0.0-beta1 (2010-01-12)

This is the first beta release of the optional gsa module
for the Open Vulnerability Assessment System (OpenVAS) leading up to the
upcoming gsa 1.0.

Many thanks to everyone who has contributed to this release:
Matthew Mundell, Jan-Oliver Wagner, Felix Wolfsteller and Michael Wiegand.
