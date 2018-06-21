# Gilded Rose JS


[![Build Status](https://travis-ci.org/JohnNewman1/GildedRoseJS.svg?branch=master)](https://travis-ci.org/JohnNewman1/GildedRoseJS)

This Project was set by Makers Academy as a practise tech test.

### Specification

https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/master/GildedRoseRequirements.txt

### Planning

- Full feature test for the legacy code
- Add the new feature
- Refactor the legacy code to be easier to use and read

### Installation

1. Fork and clone the repository
2. Open ``GildedRose.html`` in the browser, It will show you calculations for ten days

### Improvements

This code base could be improved by making seperate classes for each item, Some items have specific behaviour where others follow a similar pattern. By adding delta(increment or decrement rate) to Item you could make the code a lot easier to read. The special casses are tickets and legendary items which would need their own update methods.

Item entry is also not checked. For example Legendary items can be entered with a quality of less than 80. The Items should be checked when added to the shop for any specification conflicts.

### Testing

The project was tested via Jasmine

To run the tests open ``npm run test`` in the command line.

Code Coverage

![Code Coverage](CodeCoverage.png)
