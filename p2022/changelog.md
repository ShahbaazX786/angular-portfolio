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
