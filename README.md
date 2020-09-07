 # 2 Young
 
 A not so special blog theme for [Hexo](//hexo.io)
 
 ## Installation
 
 In hexo blog directory:
 ```shell script
 git clone --depth 1 https://github.com/nobody-65534/hexo-theme-2young.git themes/2young
 
 mv themes/2young/_config.example.yml _config.yml
```
 
 In `_config.yml` of hexo:
 ```yaml
theme: 2young

# Writing
highlight:
    hljs: true  # Enable hljs class otherwise code highlighting will not work
```
 
 ## TODO
 
 - [ ] Apostrophe
 - [ ] Add more comment provider
 - [ ] Add more analytics provider
 - [x] TOC follow page scroll
 - [ ] Custom header image for post
 - [ ] Clean up the style sh*t
 - [ ] CDN failover
 - [x] Gulpify
     - [x] Babel JS