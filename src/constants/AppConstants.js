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
    DASHBOARD_ROUTE: '/listing',
    SIGNIN_ROUTE: '/login',
    SIGNUP_ROUTE: '/signup',
    SIGN_OUT: '/logout',
    RESET_PASSWORD_ROUTE: '/reset',
    CHANGE_PASSWORD_ROUET: '/changepassword',
    ADD_LISTING_ROUTE: 'add',
    SAVED_LISTING_ROUTE: 'saved-listing'
}
export const LocalStorageKeysConst = {
    LISTING_DETAILS: 'LISTING_DETAILS',
    AMENITIES_FEATURES: 'AMENITIES_FEATURES',
    MEDIA_AND_GALLERY: 'MEDIA_AND_GALLERY',
    RENT_OTHER_FEES: 'RENT_OTHER_FEES',
    SAVED_LISTING: 'SAVED_LISTING'
}