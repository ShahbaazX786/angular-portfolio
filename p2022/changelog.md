CL:2.4.5: Styled contact section:
- Added some overlay hover effects in skills tab. Also changed the style of the headings in contact and skills section.

CL:2.4.4: Styled contact section:
 - Added hover effects to cards in contact section
 
CL:2.4.3: Added a new hobby component:
  - Updated Update Guide for Portfolio v3.

CL:2.4.2: Added a new hobby component:
  - Added Github,Linkdin Links in Hero Section.
  - Created some more planning for V3 of portfolio.
  - 
CL:2.4.1: Added a new hobby component:
  - Added i18n, Extracted i18n tags, translated each and every source to target tag and finally built the hindi build.
  - Added hindi language translation to hobby component.

CL:2.4.0: Added a new hobby component:
  - Added hobby component.
  - Added routing for hobby component.
  - Used gif images for making website (جميلة) beautiful.
  - Used mat-card angular material component.
  - Deleted some old images don't know why I preserved them until now.


CL:2.3.17: Adding Internationalization:
  - Revamped the styles and UI of the dialog component and buttons.

CL:2.3.16: Adding Internationalization:
  - Replaced Mat menu with Mat Dialog for language selector button.
  - changed some styles for .language class (ai:stretch).
  - Deployed latest version to firebase and hosted on shahbaaz.tk.

CL:2.3.15: Adding Internationalization:
  - Made a simple mistake of not modifying the route for telugu and this lead to urdu language only on deployment lol.


CL:2.3.14: Adding Internationalization:
  - Telugu translations quality:4/5.
  - Added a new script to test Telugu translations in serve mode.
  - Added a button for Telugu in change language in footer section.
  - Added config for telugu language.
  - Added Telugu translations to the website.

CL:2.3.13: Adding Internationalization:
  - Added docs(build folder) folder and the .firebase cache folder to gitignore.

CL:2.3.12: Adding Internationalization:
  - Added config for Urdu language in angular.json(main), package.json(scripts), Added an Urdu translation file aswell.
  - Added Urdu translations for footer, header,skills,contact,about and hero sections.

CL:2.3.11: Adding Internationalization:
  - Added some Japanese translations for footer and about me section.
  - Added i18n tags for about, contact,services and skills sections.

CL:2.3.10: Adding Internationalization:
  - Added Hindi translation for hero and navbar sections.

CL:2.3.9: Adding Internationalization:
  - Added a button to select the languages in footer(Not plenty with the design.)
  - Now it works in server(hosted mode) but will give 404 error in serve.

CL:2.3.8: Adding Internationalization:
  - Generated new transalation source file.
  - Added japanese translations for hero component.
  - Simplified build script for localize.

CL:2.3.7: Adding Internationalization:
  - Firebase deploy is done for multilingual website.
  - Added config in firebase.json to support multilingual hosting.
  - Made some changes to angular.json to avoid generating multiple translation files for en.(ex:en-us and en were getting generated before.)
  - Process:
    - ng i -g firebase-tools
    - firebase init
      - Are you ready to proceed? = yes
      - Which firebase features do you want to set up for thid directory? = firebase hosting and configure files for firebase hosting ...
      - What do you want to use as your public directory? dist(any name here but it should match with build folder name ex: dist or docs)
      - configure as a single-page app? yes
      - set up automatic builds and deploys with GitHub? No.
      - Firebase initialiation complete.
    - ng build --localize.
    - firebase deploy.
      - Goto the given URL and check your built app.


CL:2.3.6: Adding Internationalization:
  - Trying some more configuration changes now.
  - Added en translation bro.... but why !!!!????

CL:2.3.5: Adding Internationalization:
  - Adding some configurations and i noticed that we need en.xlf aswell even though we have the messages.xlf file already.

CL:2.3.4: Adding Internationalization:
  - Added japanese translations for navbar list items.
  
CL:2.3.3: Adding Internationalization:
  - Followed the steps 3-5 in previous CL.
  - Configured the en,jp locales under both build and serve.
  - Status Update for portfolioV2.md
  - Added translations for some japanese words in jp file.
  - Will add component by component later.

CL:2.3.2: Adding Internationalization:
  - Step3: Create a translation source file (.xlf) using the command "ng xi18n --output-path src/translate/locales(this can be anything after src/).
    - This will create a folder called translate and in it will have the english(default) transalation source file
  - Step4: Now create a copy of the TSF and rename it to messages.jp.xlf to make it a japanese translation file.
    - Now just check the source tag text and translate it using google(for personal projects) or language expert(in mnc's) and add the target tags with translated text under the source tags.
  - Step5: Now we setup the angular.config so that our app runs in serve/prod/build modes
    - 1. Define locales in build config.
    - 2. Set the localize build config option.
    - 3. Configure for the prod build.

CL:2.3.1: Adding Internationalization:
  - Step2: Add i18n attribute tags in html file all over the project.(currently testing with header component)
    - Use i18n for selecting simple tags(p,h1 etc) and i18nx for selecting internal html tags(placeholder, alt etc)
    - We can have both tags in a single element.

CL:2.3.0: Adding Internationalization:
  - Step1: npm add @angular/cli

CL:2.2.14: New update:
  - Added localization lib in angular. [ng add @angular/localize]

CL:2.2.13: Bug Fix:
  - Fixed a bug where the "made by" line was hidden under the bottom special navigation bar.

CL:2.2.12: Update:
  - Added Angular Material.

CL:2.2.11: Revamping services section-5:
  - Modified services section with hover and media queries effects.

CL:2.2.10: Revamping Skills section-4:
  - Added hover effects for cards of skills section.

CL:2.2.9: Revamping Skills section-4:
  - Added a heading for skills section.
  - Improving heading for all sections with emoji.
  
CL:2.2.8: Revamping Skills section-4:
  - Recreated skills section from scratch.
  - Added glass effect to cards and text underneath icons too.
  - Added media queries to achieve great responsiveness.
  - Added a new skill jest.

CL:2.2.7: Revamping Hero Section-3:
  - Though of just rendering Github and Linkedin in screens<600px using angular but the buttons looked absurd somehow, so just changed the text to follow me on socials

CL:2.2.6: Revamping Hero Section-3:
  - Revamped the boring line with a 4 worded tacky line.
  - Added some cool effects on name.
  - Added gradient colors for the buttons.
  - Added media queries to make it responsive on screens<600px. 

CL:2.2.5: Revamping Footer-2:
  - Revamped the colors of the scroll bar to match the blue theme
  - Added some guides for photo ideas

CL:2.2.4: Revamping Footer-2:
  - Added some guides for other components also added some little modifications in css of footer to make the links in footer a bit closer to each other (compact).

CL:2.2.3: Revamping Footer-2:
  - Added some guides for other components.

CL:2.2.2: Revamping Footer-2:
  - Fixed the navbar issue in s9+ where the brand name and the social icons were misaligned a little.

CL:2.2.1: Revamping Footer-2: 
  - Added scroll to top settings in app.routing.module
    -  Now Every route change will reset position of the page to top of the screen.

CL:2.2.0: Revamping Footer-2:
  - Revamped the whole footer design
  - Added pages, social, language sections
    - Pages(hobbies and interests needs to be impleted)
    - Need to social links
    - Need to add Internationalization(i18n) for multiple languages.
      - For Language section in screens <600px need to implement a dropdown selecter menu to choose languages from it.
  - need to add github or linkdin link to the name below and need to add cool neon slider name animation for it.
  - Slightly reduced the bottom nav icon size from 35 to 32 to fix issue in s9+.

CL:2.1.9: Revamping Navbar-1:
  - Some minor tweaks for mobile view.

CL:2.1.8: Revamping Navbar-1:
  - Added new colored icons for the bottom nav bar which triggers in screens <=600px
  - Removed old icons as the concept(changing empty icon to filled icon) was not found correctly on internet.
  - Added text below the icons for quick readability.
  - Used the translate Y to align the icons and text exactly in the middle of the special-down-nav.
  - Used the filter : greyscale property to make it black and white at idle and colored in active or focus states.


CL:2.1.7: Revamping Navbar-1:
  - Added the icons and bottom navigation with flex
  - Added focus effect.
  - Need to add a cool tranistion animation to it.s
  - The color and styles needs to be fixed.
  - The color of the icons needs to be flexible enough to invert colors in day/night modes.


CL:2.1.6: Revamping Navbar-1:
  - Added a bottom navbar on screens<=600
  - Added icons for bottom navbar
  - Added target to open the social icons in new tab
  - Added hidden,1,2 classes which hides and shows at different sizes
  - Added the margin auto to move the social icons to the left most side by using the nth child selector. 

CL:2.1.5: Revamping Navbar-1:
  - Removed unused/old css
  - Added new media queries
  - Working fine:
    - The brand name works fine
    - The hamburgir button is visible in md screens(<=992px)
    - The icons on the right side are working fine.
    - The menu item is working fine
  - Not working fine:
    - The hamburgir button is not getting closed after the menu item is clicked.
    - (tried using data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" but it is giving error in large screen menu)

CL:2.1.4: Revamping Navbar-1:
  - Added Brand name hover effects
  - Removed some nav links so that it looks minimal / simple
  - Changed nav links hover and active effects
  - Added social media icons
  - Added mode switcher icon
  - Added changelog file from this to avoid very long commit messages.
