#Nginx Boilerplate 

Awesome Nginx configuration template and a set of handy must-have snippets.

## Features
 * Convenient include-based config structure
 * Optimized defaults
 * Connection and requests rate limiting settings
 * Backend response caching
 * Various predefined locations
 * Advanced logging
 
## Requirements (at least one)
 * [Docker](https://www.docker.com/docker-toolbox) to run it anywhere
 * `Nginx` >= `1.7` to run it "bare"
 * /etc/hosts needs changing for local development (see `test/hosts`) 

## Running with Docker (recommended)
 * `cd ~`
 * `git clone git@github.com:Umkus/nginx-boilerplate.git`
 * `cd nginx-boilerplate/`
 * `docker-compose up`
 * Update your `/etc/hosts` in accordance with `test/hosts` if required

## Running "bare"
 * `git clone git@github.com:Umkus/nginx-boilerplate.git`
 * `sudo cp -R nginx-boilerplate/src/ /etc/nginx/`
 * Restart nginx
 * Update your `/etc/hosts` in accordance with `test/hosts` if required

## If something doesn't work
 * Make sure you have `cgi.fix_pathinfo` set to `1` or commented out in php.ini
 * Check the contents of `/test/logs/`
 * Make sure to have proper file/folder permissions for config files
 * Create an issue on the project's github page
