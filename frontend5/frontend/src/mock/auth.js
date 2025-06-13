// Mock user database
let users = [{ id: 1, email: "test@example.com", password: "password" }];

export const signup = async (userData) => {
  users.push({ ...userData, id: users.length + 1 });
  return { success: true, user: userData };
};

export const login = async (credentials) => {
  const user = users.find(
    (u) => u.email === credentials.email && u.password === credentials.password
  );
  if (user) return { success: true, user };
  throw new Error("Invalid credentials");
};

export const logout = async () => {
  return { success: true };
};