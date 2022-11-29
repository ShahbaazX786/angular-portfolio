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
