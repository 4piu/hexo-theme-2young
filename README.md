 # 2 Young
 
 A not so special blog theme for [Hexo](//hexo.io)

 ## Features

* Responsive (>320px)
* Switch light/dark theme on the fly
* RTL support
* Post comment (Disqus)
* Post outdate warning
* Copyright claim
* Analytics (Google)
 
 ## Installation
 
 In hexo blog directory:
 ```shell script
 git clone --depth 1 https://github.com/nobody-65534/hexo-theme-2young.git themes/2young
 
 mv themes/2young/_config.example.yml _config.yml
```
 
 In `_config.yml`:
 ```yaml
theme: 2young

# Writing
highlight:
    hljs: true  # Enable hljs class otherwise code highlighting will not work
```
 
 ## TODO
 
 - [ ] Add more comment provider
 - [ ] Add more analytics provider
 - [ ] TOC follow page scroll
 - [ ] Custom header image for post
 - [ ] Clean up the style sh*t
 - [ ] CDN failover
 - [x] Gulpify
     - [x] Babel JS