# Angular Practice App

## install angular/cli globally (latest)
    $ npm install -g @angular/cli@latest

## Create new angular application
    $ ng new app_name

## install dependencies
    1. get inside project directory (in our case it's "angular-app") and execute follwing command
    $ npm install

## To run angular app
    1. get inside project directory as mentioned above
    $ ng serve (command to run project, by default project runs at http://localhost:4200)

    open http://localhost:4200 in browser to view output

## To create component
    ng g c component_name (g=generate, c=component, complete words can be used)

## To create service
    ng g s service_name (s=service)

## Copyright/Sources
    for style, css framework bootstrap has been used from https://getbootstrap.com/
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    to support bootstrap, following links are added
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
