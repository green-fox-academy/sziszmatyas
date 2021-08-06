export const createErrorResponse = (errorMessage) => {
    return {
        status: "error",
        message: errorMessage,
    }
}