#applicationCache#

html5 中新特性，applicationCache 如果在手机端页面开发中合理使用，将得到不少便捷.

##usage##

MIME TYPE：text/cache-manifest

eg. nginx:

location ~ \.manifest$ {
    default_type text/cache-manifest;
}


注意：

自动缓存引用了manifest文件的页面即使在 NETWORK 中指定 “*”（所有的页面都）使用网络，还是不能解决它自动缓存当前页面。

##License##

Released under the MIT license

_*[hechangmin@gmail.com](mailto://hechangmin@gmail.com)*_
