# Project Overview

This is a portfolio website for photographer Caleb Henderson. 

## MVP

- Mobile-responsive layout
- Immediate image-load time via AWS S3 services
- Cursor that displays Caleb's full name
- Translucent overlay menu that displays Caleb's email address, accessed by a:
- Contact link below image

## Post-MVP

- Functionality for Caleb to update/add photos and collections to the site independently of me

## Live site

TBD

## Development Build

Temporarily hosting this site on surge.

Run `npm run build` from the /client folder
cd into /build
Run surge

## Wireframes & React Architecture

- [Mobile landing page](https://res.cloudinary.com/eloise/image/upload/v1573066206/caleb-henderson/mobile_wireframe.jpg)
- [Desktop landing page](https://res.cloudinary.com/eloise/image/upload/v1573066206/caleb-henderson/desktop_landing_wireframe.jpg)
- [Desktop overlay menu](https://res.cloudinary.com/eloise/image/upload/v1573066206/caleb-henderson/desktop_menu_wireframe.jpg)
- [React architecture](https://drive.google.com/file/d/1GifPaR1qw5z0nr4ImdTJPQ9uyUxf0BCX/view?usp=sharing)

## Components

| Component | Description | 
| --- | :---: |  
|  App | Calls Title, CurrentImage, Contact and Menu | 
|  Title | Renders Caleb's name on mobile and is hidden on desktop | 
|  CurrentImage | Renders the first available image on page load, followed by the next image as a user clicks through the images | 
|  Contact | Renders Caleb's email below CurrentImage on mobile, and 'Contact' on desktop - when clicked renders Menu component | 
|  Menu | Renders overlay across entire viewport with Caleb's email and a translucent background | 

## Potential breakpoints for responsive design

Galaxy S5 | 360 x 640
Pixel 2 | 411 x 731
Pixel 2XL | 411 x 823
iPhone 5/SE | 320 x 568
iPhone 6/7/8 | 375 x 667
iPhone 6/7/8 Plus | 414 x 736
iPhone X | 375 x 812
iPad | 768 x 1024
iPad Pro | 1024 x 1366