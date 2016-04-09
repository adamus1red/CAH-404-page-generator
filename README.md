# CAH-404-page-generator
A Cards Against Humanity static 404 page generator

This is designed to be used with [nginx random index](http://nginx.org/en/docs/http/ngx_http_random_index_module.html) to randomly display one of the 404 pages generated. 

You may of course use this and select the best or base a dynamic generator using this.

## Nginx Setup

```
  location /404/ {
        root /var/www/html
        random_index on;
    }
```
