import uuid from 'react-native-uuid'

export class ServiceConstant{

    // ------ uuid ------
    public static uuid = uuid.v4()

    // ------ key ------
    public static key = "fP5KT8fXq9h2lFzosY1Z"

    // ------ webAddress ------
    public static webServerAddress = "https://app.zabihah.com/"

    // ------ GLOBAL DATA ------
    public static global_data = ServiceConstant.webServerAddress + "data_default.php"

    // ------ LOGIN ------
    public static login = ServiceConstant.webServerAddress + "mem_login.php"

    // ------ REGISTER ------
    public static register = ServiceConstant.webServerAddress + "mem_register.php"

    // ------ RETRIEVE MEMBER INFORMATION ------
    public static retrieve_mem_info = ServiceConstant.webServerAddress + "mem_data.php"

// ------ RETURNING PLACES AROUND A GIVEN LOCATION ----------------------------------------------------------------------------

    // ------ All records around a location ------
    public static record_around_location = ServiceConstant.webServerAddress + "find_nearby.php"

    // ------ All records around a location (quick summary) ------
    public static record_around_location_quick= ServiceConstant.webServerAddress + "find_quick.php"

    // ------ Number of records around a location: ------
    public static number_around_location = ServiceConstant.webServerAddress + "find_nearby_number.php"

    // ------ Number of records around a location ------
    public static trending_around_location = ServiceConstant.webServerAddress + "find_trending.php"

// ------ RETURNING INFORMATION FOR A GIVEN PLACE --------------------------------------------------------------------------------

    // ------ Data for a particular record ------
    public static data_particular_record = ServiceConstant.webServerAddress + "rec_data.php"

    // ------ Reviews for a particular record ------
    public static reviews_particular_record = ServiceConstant.webServerAddress + "rec_reviews.php"

    // ------ Photos for a particular record ------
    public static photo_particular_record = ServiceConstant.webServerAddress + "rec_photos.php"

    // ------ Coupons for a particular record ------
    public static coupons_particular_record = ServiceConstant.webServerAddress + "cou_list.php"

    // ------ One coupon from the above list (pass coupon_id) ------
    public static one_coupon_list = ServiceConstant.webServerAddress + "cou_data.php"

// -----------------------------------------------------------------------------------------------------------------------------------

    // ------ SUBMITTING A REVIEW ------
    public static submit_review = ServiceConstant.webServerAddress + "mem_review_add.php"

    // ------  ADD/REMOVE FAVORITES ------
    public static add_remove_favorties = ServiceConstant.webServerAddress + "mem_favorite.php"

    // ------ VIEW FAVORITES ------
    public static view_favorties = ServiceConstant.webServerAddress + "find_favorite.php"

     // ------ ADD A RECORD ------
     public static add_record = ServiceConstant.webServerAddress + "rest_add.php"

     // ------ EDIT A RECORD ------
     public static edit_record = ServiceConstant.webServerAddress + "rest_edit.php"

      // ------ VIEW USER REVIEWS ------
      public static view_user_review = ServiceConstant.webServerAddress + "mem_reviews.php"

      // ------ REPORT OR BLOCK A USER ------
     public static block_user = ServiceConstant.webServerAddress + "action_block.php"

     // ------ EDIT PROFILE ------
     public static edit_profile = ServiceConstant.webServerAddress + "mem_edit.php"

     // ------ RESET PASSWORD ------
     public static reset_password = ServiceConstant.webServerAddress + "mem_password.php"

     public static user_name = ""
     public static user_home_location = ""
     public static user_photo = ""
     public static user_lat = ""
     public static user_long = ""
     public static user_login_data = ""
     public static user_first_name = ""
     public static user_last_name = ""
     public static user_mobile = ""
     public static user_email = ""


}