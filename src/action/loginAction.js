

export const setLogin = () => {
    return {
        type: 'SET_LOGIN',
        payload: true,
    };
};

export const setLogout = () => {
    return {
        type: 'SET_LOGOUT',
        payload: false,
    };
};

export const asyncLogin = (data, history, notify) => {
    return (dispatch) => {
        // Mock the response instead of making an actual API call
        const mockResponse = {
            data: {
                token: 'fake-jwt-token', // Mock token
                user: { name: 'Admin', email: 'admin@example.com' },
            },
        };

        // Simulate a successful response
        const response = mockResponse;

        if (response.data.token) {
            console.log(response.data); // Log the fake response
            localStorage.setItem('token', response.data.token); // Store the fake token
            dispatch(setLogin()); // Set the login state to true in Redux
            history.push('/dashboard'); // Redirect to the dashboard
        } else if (response.data.errors) {
            const notifyError = { error: true, errorMessage: response.data.errors };
            notify(notifyError);
        }
    };
};
