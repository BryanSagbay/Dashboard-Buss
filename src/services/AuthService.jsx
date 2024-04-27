const BASE_URL = "http://localhost:8080/auth";

const AuthService = {
  login: async (credentials) => {
    try {
      const response = await fetch(`${BASE_URL}/login-v1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.text();
     
      if (response.ok) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        throw new Error(data.message || "Error in login");
      }
    } catch (error) {
      throw new Error(error.message || "Error in login");
    }
  },

  register: async (userData) => {
    try {
      const response = await fetch(`${BASE_URL}/register-v1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        throw new Error(data.message || "Error in registration");
      }
    } catch (error) {
      throw new Error(error.message || "Error in registration");
    }
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  getToken: () => {
    return localStorage.getItem("token");
  },
};

export default AuthService;
