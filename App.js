import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import splashscreen from './src/splash';
import signin from './src/signin';
import onboarding from './src/onboarding';
import login from './src/login'
import register from './src/register';
import forgotpassword from './src/forgotpassword';
import editprofile from './src/editprofile';
import dashboard from './src/dashboard';
import trending from './src/trending';
import favorties from './src/favorties';
import restaurantlistview from './src/restaurants/restaurantlistview';
import marketlistview from './src/market/marketlistview'
import mosquelistview from './src/mosque/mosquelistview'
import profilereviews from './src/profilereviews'
import mapviewrestaurant from './src/restaurants/mapviewrestaurant'
import mapviewmarket from './src/market/mapviewrmarket'
import mapviewmosque from './src/mosque/mapviewmosque'
import detailreview from './src/detailreview'
import searchgroup from './src/searchgroup'
import photoupload from './src/photoupload'
import coupondetail from './src/coupondetail'
import couponlist from './src/couponlist'
import publicprofile from './src/publicprofile'
import homescreen from './src/homescreen'
import addreview from './src/addreview';
import addreviewmosque from './src/addreviewmosque'
import restaurantdetail from './src/restaurants/restaurantdetail';
import marketdetail from './src//market/marketdetail';
import mosquedetail from './src/mosque/mosquedetail'
import photodetail from './src/photodetail'
import photogallery from './src/photogallery'
import drawer from './src/drawer'
import onboardingextra from './onboardextra'
import aboutWebView from './src/WebView/aboutZabiah';
import privacyWebView from './src/WebView/privacyZabihah';
import termsWebView from './src/WebView/termsZabihah';
import helpWebView from './src/WebView/helpZabihah'
import RestaurantCard from './src/component/restaurantcard';
import LoginController from './fbLogibn'
import FavButton from './src/component/likebutton'
import photogalleryMosque from './src/photogallerymosque'
import photogalleryMarket from './src/photogallerymarket';
import photodetailmosque from './src/photodetailmosque'
import detailreviewmosque from './src/detailreviewmosque'
import detailreviewmarket from './src/detailreviewmarket';
import splash from './src/splashtest';
import addreviewmarket from './src/addreviewmarket';
import dashboardmarket from './src/dashboardmarket'
import dashboardmosque from './src/dashboardmosque';
import publicprofilemarket from './src/publicprofilemarket';
import publicprofilemosque from './src/publicprofilemosque';
import profilereviewsmarket from './src/profilereviewsmarket';
import profilereviewsmosque from './src/profilereviewsmosque';
import searchgrouprestlist from './src/searchgrouprestlist';
import searchgrouprestmap from './src/searchgrouprestmap';
import searchgroupmarketlist from './src/searchgroupmarketlist';
import searchgroupmarketmap from './src/searchgroupmarketmap';
import searchgroupmosquelist from './src/searchgroupmosquelist';
import searchgroupmosquemap from './src/searchgroupmosquemap';
import webviewextra from './src/webviewextra'


const MainNavigator = createStackNavigator({
  splashscreen: {screen:splashscreen, navigationOptions: { header: null }},
  signin: {screen: signin, navigationOptions: { header: null }},
  login: {screen: login, navigationOptions: { header: null }},
  register: {screen: register, navigationOptions: { header: null }},
  forgotpassword: {screen: forgotpassword, navigationOptions: { header: null }},
  editprofile: {screen: editprofile, navigationOptions: { header: null }},
  publicprofile: {screen: publicprofile, navigationOptions: { header: null }},
  dashboard: {screen: dashboard, navigationOptions: { header:null }},
  homescreen: {screen: homescreen, navigationOptions: { header: null }},
  trending: {screen: trending, navigationOptions: { header: null }},
  favorties: {screen: favorties, navigationOptions: { header: null }},
  restaurantlistview: {screen: restaurantlistview, navigationOptions: { header: null }},
  marketlistview: {screen: marketlistview, navigationOptions: { header: null }},
  mosquelistview: {screen: mosquelistview, navigationOptions: { header: null }},
  profilereviews: {screen: profilereviews, navigationOptions: { header:null }},
  mapviewrestaurant: {screen: mapviewrestaurant, navigationOptions: { header: null }},
  mapviewmarket: {screen: mapviewmarket, navigationOptions: { header: null }},
  mapviewmosque: {screen: mapviewmosque, navigationOptions: { header: null }},
  detailreview: {screen: detailreview, navigationOptions: { header: null }},
  detailreviewmarket: {screen: detailreviewmarket, navigationOptions: { header: null }},
  detailreviewmosque: {screen: detailreviewmosque, navigationOptions: { header: null }},
  searchgroup: {screen: searchgroup, navigationOptions: { header: null }},
  // photoupload: {screen: photoupload, navigationOptions: { header: null }},
  couponlist: {screen: couponlist, navigationOptions: { header: null }},
  coupondetail: {screen: coupondetail, navigationOptions: { header: null }},
  addreview: {screen: addreview, navigationOptions: { header: null }},
  addreviewmosque: {screen: addreviewmosque, navigationOptions: { header: null }},
  restaurantdetail: {screen: restaurantdetail, navigationOptions: { header: null }},
  marketdetail: {screen: marketdetail, navigationOptions: { header: null }},
  mosquedetail: {screen: mosquedetail, navigationOptions: { header: null }},
  photodetail: {screen: photodetail, navigationOptions: { header: null }},
  photodetailmosque: {screen: photodetailmosque, navigationOptions: { header: null }},
  photogallery: {screen: photogallery, navigationOptions: { header: null }},
  photogalleryMosque: {screen: photogalleryMosque, navigationOptions: { header: null }},
  photogalleryMarket: {screen: photogalleryMarket, navigationOptions: { header: null }},
  // drawer: {screen: drawer, navigationOptions: { header: null }},
  onboardingextra: {screen: onboardingextra, navigationOptions: { header: null }},
  aboutWebView: {screen: aboutWebView, navigationOptions: { header: null }},
  privacyWebView: {screen: privacyWebView, navigationOptions: { header: null }},
  termsWebView: {screen: termsWebView, navigationOptions: { header: null }},
  helpWebView: {screen: helpWebView, navigationOptions: { header: null }},
  // RestaurantCard: {screen: RestaurantCard, navigationOptions: { header: null }}
  LoginController: {screen: LoginController, navigationOptions: { header: null }},
  addreviewmarket: {screen: addreviewmarket, navigationOptions: { header: null }},
  // FavButton: {screen: FavButton, navigationOptions: { header: null }},
  dashboardmarket: {screen: dashboardmarket, navigationOptions: { header: null }},
  dashboardmosque: {screen: dashboardmosque, navigationOptions: { header: null }},
  publicprofilemarket: {screen: publicprofilemarket, navigationOptions: { header: null }},
  publicprofilemosque: {screen: publicprofilemosque, navigationOptions: { header: null }},
  profilereviewsmarket: {screen: profilereviewsmarket, navigationOptions: { header: null }},
  profilereviewsmosque: {screen: profilereviewsmosque, navigationOptions: { header: null }},
  searchgrouprestlist: {screen: searchgrouprestlist, navigationOptions: { header: null }},
  searchgrouprestmap: {screen: searchgrouprestmap, navigationOptions: { header: null }},
  searchgroupmarketlist: {screen: searchgroupmarketlist, navigationOptions: { header: null }},
  searchgroupmarketmap: {screen: searchgroupmarketmap, navigationOptions: { header: null }},
  searchgroupmosquelist: {screen: searchgroupmosquelist, navigationOptions: { header: null }},
  searchgroupmosquemap: {screen: searchgroupmosquemap, navigationOptions: { header: null }},
  webviewextra: {screen: webviewextra, navigationOptions: { header: null }},
});
const App = createAppContainer(MainNavigator);
export default App;