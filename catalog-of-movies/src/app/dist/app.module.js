"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var flex_layout_1 = require("@angular/flex-layout");
var menu_1 = require("@angular/material/menu");
var divider_1 = require("@angular/material/divider");
var home_page_component_1 = require("./pages/home/home-page.component");
var grid_list_1 = require("@angular/material/grid-list");
var core_2 = require("@angular/material/core");
var card_1 = require("@angular/material/card");
var main_nav_component_1 = require("./core/header/main-nav/main-nav.component");
var layout_1 = require("@angular/cdk/layout");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var checkbox_1 = require("@angular/material/checkbox");
var select_1 = require("@angular/material/select");
var movie_page_component_1 = require("./pages/movie/movie-page.component");
var info_movie_component_1 = require("./pages/movie/components/info-movie/info-movie.component");
var movie_card_component_1 = require("./pages/home/components/movie-card/movie-card.component");
var movie_service_1 = require("./shared/services/movie.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_page_component_1.HomePageComponent,
                main_nav_component_1.MainNavComponent,
                movie_page_component_1.MovieComponent,
                info_movie_component_1.InfoMovieComponent,
                movie_card_component_1.MovieCard
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                flex_layout_1.FlexLayoutModule,
                menu_1.MatMenuModule,
                divider_1.MatDividerModule,
                grid_list_1.MatGridListModule,
                core_2.MatRippleModule,
                card_1.MatCardModule,
                layout_1.LayoutModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                checkbox_1.MatCheckboxModule,
                select_1.MatSelectModule
            ],
            providers: [movie_service_1.MovieService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
