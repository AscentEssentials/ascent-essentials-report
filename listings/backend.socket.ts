// Keep track of connected users and their sockets
const connectedUsers = new Map<string, Socket>();

// Handle client login event
export const handleClientLogin = (socket, token) => {
  try {
    const userId = getUserIdFromToken(token);

    // Associate the socket with the user
    connectedUsers.set(userId, socket);

    console.log(`User ${userId} authenticated`);
  } catch (error) {
    console.error("Error during client login:", error);
  }
};