angular.module("app.core.config", [])
.constant("APP_CONFIG", {"menu_speed":200,"smartSkin":"smart-style-0","apiRootUrl":"api","skins":[{"name":"smart-style-0","logo":"build/img/logo.png","class":"btn btn-block btn-xs txt-color-white margin-right-5","style":"background-color:#2196F3;","label":"Smart Default"}]})
.constant("REDIRECIONAR_NAO_AUTORIZADO", "redirecionar.nao.autorizado");
