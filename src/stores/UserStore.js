class UserStoreC {
    isLoggedIn = false;
    userInfo = null;
    constructor() {
        this.initialize();
    }

    initialize = () => {
        let userRaw = localStorage.getItem('user');
        if (userRaw) {
            this.setUser(JSON.parse(userRaw));
        }
    }

    setUser = (user) => {
        if (user) {
            this.isLoggedIn = true;
            this.userInfo = user;
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            this.isLoggedIn = false;
            this.userInfo = null;
            localStorage.setItem('user', "");
        }
    }

}

const UserStore = new UserStoreC();
window.tmp_UserStore = UserStore;
export default UserStore;
