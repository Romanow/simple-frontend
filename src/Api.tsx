const baseURL = process.env.REACT_APP_BACKEND_IP;

export const Api = {
  message: async (name: String = "docker"): Promise<String> => {
    return await fetch(`${baseURL}?person=${name}`)
        .then((response) => response.text())
  }
}
