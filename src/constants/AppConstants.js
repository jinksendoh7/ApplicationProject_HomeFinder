export const ErrorMessageConst = {
    INVALID_EMAIL_PASSWORD: 'Please enter a valid email and password.',
    INVALID_PASSWORD_LENGTH: 'Password length must be greater then 4 characters.',
    PASSWORD_DO_NOT_MATCH: 'Passwords do not match.',
    INVALID_CREDENTIAL: 'Invalid credentials.',
}

export const SuccessMessageConst={
    WELCOME_MESSAGE: 'Welcome to HomeFinder!',
    CONSOLE_LOG_ADD_USER: 'User added to database with ID: ',
    SUCCESS_SUBMIT_LISTING: 'Your listing has been added and can now be viewed by member users.',
    EMPTY_SAVED_LISTING: '  You haved not saved any listing. Click on the heart icon when you see one when you stop saving.'
}
export const RoutesConst = {
    HOME_ROUTE: '/',
    LISTING_ROUTE: '/listing',
    PROPERTY_ROUTE: '/property',
    DASHBOARD_ROUTE: '/dashboard',
    SIGNIN_ROUTE: '/login',
    SIGNUP_ROUTE: '/signup',
    SIGN_OUT: '/logout',
    RESET_PASSWORD_ROUTE: '/reset',
    CHANGE_PASSWORD_ROUET: '/changepassword',
    ADD_LISTING_ROUTE: 'add-listing',
    ADD_PROPERTY_ROUTE: 'add-property',
    SAVED_LISTING_ROUTE: 'saved-listing',
    SEARCH_LISTING_ROUTE: 'search-listing',
    SHARE_ON_FACEBOOK_ROUTE: 'https://www.facebook.com/sharer/sharer.php?u=' + 'https://github.com/knoldus/angular-facebook-twitter.git',
}
export const LocalStorageKeysConst = {
    LISTING_DETAILS: 'LISTING_DETAILS',
    AMENITIES_FEATURES: 'AMENITIES_FEATURES',
    MEDIA_AND_GALLERY: 'MEDIA_AND_GALLERY',
    RENT_OTHER_FEES: 'RENT_OTHER_FEES',
    SAVED_LISTING: 'SAVED_LISTING'
}